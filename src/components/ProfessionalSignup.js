import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function ProfessionalSignup() {
  const { sendOtp } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  // const history = useHistory();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    sendOtp(input);
  };

  const [input, setInput] = useState({
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    fied: "",
    customField: "",
    location: "",
  });

  const [error, setError] = useState({
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
          if(!value){
            stateObj[name]="Please enter your profession"
          }

        case "location":
          if(!value){
            stateObj[name]= "Please enter your location";
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
        <form
          className="space-y-6"
          action=""
          //  onSubmit={onSubmit}
        >
          <h5 className="text-2xl font-medium text-center text-black">
            Sign up to find the work you love
          </h5>
          <div className="flex justify-between">
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

          {input.field === 'Other' && (
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
                <span className="err text-sm text-red-500">{error.customField}</span>
              )}
          <div>
            <label
              htmlFor="location"
              className="block mb-2 text-sm font-medium text-black"
            >
              Your Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={input.location}
              onChange={onInputChange}
              onBlur={validateInput}
              className="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
              placeholder="Enter your location"
              required
            />
            {error.location && (
              <span className="err text-sm text-red-500">{error.location}</span>
            )}
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
              to="/ProfessionalLogin"
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

export default ProfessionalSignup;
