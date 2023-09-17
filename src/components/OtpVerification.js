import React, { useState, useContext } from "react";
import OTPInput from "otp-input-react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function OtpVerification() {
  const { signUp, phoneNo } = useContext(AuthContext);
  const [OTP, setOTP] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const verifyOtp = async (input) => {
    console.log(phoneNo);
    console.log(input);
    // e.preventDefault();
    setLoading(true);
    console.log(process.env.REACT_APP_BACKEND_URL);
    let response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/verifyotp`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNo: phoneNo,
          otp: OTP,
        }),
      }
    );
    let data = await response.json();
    console.log(data);
    if (data.success) {
      signUp();
      navigate("/");
      console.log("otp correct");

      // history.push("/OTPverification");
      setLoading(false);
    } else {
      console.log(data.msg);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="bg-white py-10 flex justify-center items-center">
        <div className="w-full max-w-sm p-4 bg-slate-100 border-gray-700 rounded-lg shadow sm:p-6 md:p-8">
          <label
            htmlFor="otp"
            autoFocus
            length={4}
            className="block mb-3 text-sm font-medium text-xl text-black text-center"
          >
            Enter the OTP
          </label>

          <OTPInput
            className="justify-center otp_container"
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="number"
            disabled={false}
            // secure
          />
          {/* <ResendOTP handelResendClick={() => console.log("Resend clicked")} /> */}
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 my-5"
            onClick={verifyOtp}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default OtpVerification;
