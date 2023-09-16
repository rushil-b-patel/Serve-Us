import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="text-white">Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img className="h-8" src={user.picture} alt={user.name} />
        {/* <h2 className="text-white">{user.name}</h2>
        <p className="text-white">{user.email}</p> */}
      </div>
    )
  );
};

export default Profile;