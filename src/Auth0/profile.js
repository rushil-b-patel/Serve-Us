import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="text-white">Loading ...</div>;
  }
    
  return (
        <div className="flex items-center">
          <img
            className="h-8"
            src={user.picture}
            alt={user.name}
          />
          <span className="ml-2 text-white font-semibold cursor-pointer hover:text-[#F5D547] ease-in duration-150">{user.name}</span>
        </div>
  );
};

export default Profile;