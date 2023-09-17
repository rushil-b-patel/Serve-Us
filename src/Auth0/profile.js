import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutButton from "./logout";

const Profile = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="text-white">Loading ...</div>;
  }

  return (
    <div className="bg-white py-10 mx-auto max-w-7xl px-6 lg:px-8 items-center min-h-fit">
      <img className="h-18 mb-4" src={user.picture} alt={user.name} />
      <div className="text-black font-semibold text-xl">Name : {user.name}</div>
      <div className="text-black font-semibold text-xl">
        Email : {user.email}
      </div>
      <p className="relative inline-flex items-center justify-start mt-2 px-3 py-1 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
          <LogoutButton />
        </span>
      </p>
    </div>
  );
};

export default Profile;
