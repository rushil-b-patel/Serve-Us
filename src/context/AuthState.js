import { useState } from "react";
import AuthContext from "./AuthContext";
// import jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthState = ({ children }) => {
  const navigate = useNavigate();

  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  const [phoneNo, setPhoneNo] = useState("0000000000");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // const [service, setService] = useState("");
  // const [location, setLocation] = useState("");
  
  //   const [user, setUser] = useState(() =>
  //     localStorage.getItem("authToken")
  //       ? jwt_decode(localStorage.getItem("authToken"))["username"]
  //       : null
  //   );
  const [loading, setLoading] = useState(false);

  const sendOtp = async (input) => {
    console.log(input);
    // e.preventDefault();
    setLoading(true);
    console.log(process.env.REACT_APP_BACKEND_URL);
    setPhoneNo(input.number);
    setEmail(input.email);
    setPass(input.password);
    let response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/sendotp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNo: input.number,
          email: input.email,
          password: input.password,
        }),
      }
    );
    let data = await response.json();
    console.log(data);
    if (data.success) {
      console.log("loginned");
      navigate("/OTPVerification");
      // history.push("/OTPverification");
      setLoading(false);
    } else {
      console.log(data.msg);
    }
    setLoading(false);
  };

  const signUp = async (input) => {
    console.log(input);
    // e.preventDefault();
    setLoading(true);
    console.log(process.env.REACT_APP_BACKEND_URL);
    let response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNo: phoneNo,
          email: email,
          password: pass,
        }),
      }
    );

    // const ProfessionalSignup = async (input) => {

    // }

    let data = await response.json();
    console.log(data);
    if (data.success) {
      localStorage.setItem("authToken", JSON.stringify(data.token));
      setAuthToken(data.token);
      console.log("loginned");
      //   setUser(data.user);
      //   toast.success("Logged In !!", {
      //     autoClose: 4000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     theme: "dark",
      //   });
      setLoading(false);
    } else {
      console.log(data.msg);
      //   toast.error(data.msg, {
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     theme: "dark",
      //   });
    }
    setLoading(false);
  };

  const login = async (e) => {
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    // e.preventDefault();
    setLoading(true);
    console.log(process.env.REACT_APP_BACKEND_URL);
    let response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      }
    );
    let data = await response.json();
    console.log(data);
    if (data.success) {
      navigate("/");
      localStorage.setItem("authToken", JSON.stringify(data.token));
      setAuthToken(data.token);
      //   setUser(data.user);
      //   toast.success("Logged In !!", {
      //     autoClose: 4000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     theme: "dark",
      //   });
      setLoading(false);
    } else {
      console.log(data.msg);
      //   toast.error(data.msg, {
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     theme: "dark",
      //   });
    }
    setLoading(false);
  };

  let contextData = {
    signUp: signUp,
    sendOtp: sendOtp,
    phoneNo: phoneNo,
    login: login,
  };
  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <h1>Loading...</h1> : children}
    </AuthContext.Provider>
  );
};
export default AuthState;
