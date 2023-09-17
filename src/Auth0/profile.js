import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="text-white">Loading ...</div>;
  }

  return (
    <div className="bg-white py-10 mx-auto max-w-7xl px-6 lg:px-8 items-center min-h-fit">
        <img className="h-18 mb-4" src={user.picture} alt={user.name} />
        <div className="text-black font-semibold text-xl">Name : {user.name}</div>
        <div className="text-black font-semibold text-xl">Email : {user.email}</div>
    </div>
  );
};

export default Profile;
