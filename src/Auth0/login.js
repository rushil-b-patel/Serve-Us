import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="font-semibold text-white mr-5 underline hover:text-[#F5D547] aria-[current=page]:text-[#F5D547] ease-in duration-150"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
