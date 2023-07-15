import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";

function OtpVerification() {
  const [OTP, setOTP] = useState("");

  return (
    <>
      <div className="bg-white py-10 flex justify-center items-center">
        <div class="w-full max-w-sm p-4 bg-slate-100 border-gray-700 rounded-lg shadow sm:p-6 md:p-8">
          <label
            for="otp"
            autoFocus
            length={4}
            class="block mb-3 text-sm font-medium text-xl text-black text-center"
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
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default OtpVerification;
