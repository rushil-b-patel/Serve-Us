import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Signup() {
  const { sendOtp } = useContext(AuthContext);
  // const history = useHistory();
  // const navigate = useNavigate();
  const fetchCityName = async (latitude, longitude) => {
    const apiKey = "pk.d3f74bc82b4883e52345f15f068a67be";
    const apiUrl = `https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${latitude}&lon=${longitude}&format=json`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      console.log(data); // Log the entire response for examination

      if (data.address || data.address.city) {
        const cityName = data.address.city;
        const villageName = data.address.village;
        const county = data.address.county;
        const location = villageName || cityName || county;
        setInput((prev) => ({
          ...prev,
          location,
        }));
        console.log(location);
        console.log(cityName);
        console.log(villageName);
      }
    } catch (error) {
      console.error("Error fetching city name:", error);
    }
  };

  const fetchUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchCityName(latitude, longitude);
          // fetchCityName(22.554029, 72.948936);
          setInput((prev) => ({
            ...prev,
            location: `${latitude}, ${longitude}`,
          }));
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  };

  const onSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    sendOtp(input);
  };

  const [input, setInput] = useState({
    userType: "",
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    fied: "",
    customField: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    field: "",
    customField: "",
    location: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "firstName":
          if (!value) {
            stateObj[name] = "Please enter First Name";
          }
          break;

        case "lastName":
          if (!value) {
            stateObj[name] = "Please enter Last Name";
          }
          break;

        case "email":
          if (!value) {
            stateObj[name] = "Please enter Email";
          }
          break;

        case "number":
          if (!value) {
            stateObj[name] = "Please enter Mobile Number";
          }
          break;

        case "field":
          if (!value) {
            stateObj[name] = "Please select your profession";
          }
          break;

        case "customField":
          if (!value) {
            stateObj[name] = "Please enter your profession";
          }
          break;

        case "location":
          if (!value) {
            stateObj[name] = "Please enter your location";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password do not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password do not match.";
          }
          break;

        default:
          break;
      }
      return stateObj;
    });
  };
  return (
    <div className="bg-white py-10 flex justify-center items-center">
      <div className="max-w-lg bg-slate-100 border-gray-700 rounded-lg shadow py-10 px-8">
        <form className="space-y-6" action="" onSubmit={onSubmit}>
          <h5 className="text-2xl font-medium text-center text-black">
            Sign up to find the work you love
          </h5>
          <select
            name="userType"
            id="userType"
            value={input.userType}
            onChange={onInputChange}
            onBlur={validateInput}
            className="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          >
            <option value="customer">Customer</option>
            <option value="service_provider">Register As Professional</option>
          </select>
          <div className="lg:flex justify-between">
            <div>
              <label
                htmlFor="firstname"
                className="block mb-2 text-sm font-medium text-black"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={input.firstName}
                onChange={onInputChange}
                onBlur={validateInput}
                className="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
                placeholder="eg. Suresh"
                required
              />
              {error.firstName && (
                <span className="err text-sm text-red-500">
                  {error.firstName}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block mb-2 text-sm font-medium text-black"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={input.lastName}
                onChange={onInputChange}
                onBlur={validateInput}
                className="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
                placeholder="eg. Patel"
                required
              />
              {error.lastName && (
                <span className="err text-sm text-red-500">
                  {error.lastName}
                </span>
              )}
            </div>
          </div>
          <div className="lg:flex justify-between">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-black"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={input.email}
                onChange={onInputChange}
                onBlur={validateInput}
                className="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
                placeholder="name@company.com"
                required
              />
              {error.email && (
                <span className="err text-sm text-red-500">{error.email}</span>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-black"
              >
                Your Mobile Number
              </label>
              <input
                type="number"
                name="number"
                id="number"
                value={input.number}
                onChange={onInputChange}
                onBlur={validateInput}
                className="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
                placeholder="000000000"
                required
              />
              {error.number && (
                <span className="err text-sm text-red-500">{error.number}</span>
              )}
            </div>
          </div>
          {input.userType === "service_provider" && (
          <div>
            <label
              htmlFor="field"
              className="block mb-2 text-sm font-medium text-black"
            >
              Select Your Profession
            </label>
            <select
              name="field"
              id="field"
              value={input.field}
              onChange={onInputChange}
              onBlur={validateInput}
              className="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              required
            >
              <option value="">Select Field</option>
              <option value="Plumber">Plumber</option>
              <option value="Electrician">Electrician</option>
              <option value="Pest Control">Pest Control</option>
              <option value="Hair Artist Women">Hair Artist (Women)</option>
              <option value="Hair Artist Men">Hair Artist (Men)</option>
              <option value="Painter">Painter</option>
              <option value="Carpenter">Carpenter</option>
              <option value="Other">Other</option>
            </select>
            {error.field && (
              <span className="err text-md text-red-500">{error.field}</span>
            )}
          </div>
          )}
          {input.field === "Other" && (
            <div>
              <label
                htmlFor="customField"
                className="block mb-2 text-sm font-medium text-black"
              >
                Enter Your Field
              </label>
              <input
                type="text"
                name="customField"
                id="customField"
                value={input.customField}
                onChange={onInputChange}
                className="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
                placeholder="Enter your field"
                required
              />
            </div>
          )}
          {error.customField && (
            <span className="err text-sm text-red-500">
              {error.customField}
            </span>
          )}
          <div className="flex justify-between">
            <div>
              <button
                type="button"
                className="bg-black text-white p-2.5 text-sm rounded-lg w-full hover:bg-blue-700"
                onClick={fetchUserLocation}
              >
                Fetch My Location
              </button>
            </div>
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-black"
              ></label>
              <input
                type="text"
                name="location"
                id="location"
                value={input.location}
                // onChange={(e) => setCityName(e.target.value)}
                onChange={onInputChange}
                onBlur={validateInput}
                className="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-black"
            >
              Create password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="on"
              placeholder="•••••••••"
              value={input.password}
              onChange={onInputChange}
              onBlur={validateInput}
              className="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
              required
            />
            {error.password && (
              <span className="err text-md text-red-500">{error.password}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-black"
            >
              Confirm password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              autoComplete="on"
              placeholder="•••••••••"
              value={input.confirmPassword}
              onChange={onInputChange}
              onBlur={validateInput}
              className="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
              required
            />
            {error.confirmPassword && (
              <span className="err text-md text-red-500">
                {error.confirmPassword}
              </span>
            )}
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-black"
              >
                Remember me
              </label>
            </div>
          </div>

          <button
            to="/OtpVerification"
            type="submit"
            className="w-full text-white bg-black hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 my-5 text-center"
            onClick={onSubmit}
          >
            {/* {success ? <Link to="/OTPVerification"> */}
            Signup
            {/* </Link> : "Signup"} */}
          </button>
          <div class="text-sm font-medium text-black flex justify-between">
            Already registered?{" "}
            <Link
              to="/Login"
              class="text-blue-700 hover:underline dark:text-blue-500"
            >
              Sigin to your Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;