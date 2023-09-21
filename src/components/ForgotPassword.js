import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const resetpassword = useAuth();

  const passwordreset = async (e) => {
    e.preventDefault();
    await resetpassword(email)
    .response((response)=>{
        console.log(response.user)
        console.log(email);
    })
    .catch((error)=>{
        alert(error.message);
    })
  };

  return (
    <div className="bg-white py-10 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-sm p-4 space-y-6 bg-slate-100 border-gray-700 rounded-lg shadow sm:p-6 md:p-8">
        <h5 className="text-2xl font-medium text-center text-black">
          Reset Your Password
        </h5>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-black"
          >
            Enter your Registered email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-slate-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 text-black"
            placeholder="name@company.com"
            required
          />
        </div>
        <button
          onClick={passwordreset}
          type="submit"
          className="w-full text-white bg-black hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
