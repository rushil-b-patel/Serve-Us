import React from "react";
import { useAuth } from "../context/AuthContext";
import {useNavigate} from 'react-router-dom';

function Profile() {

    const {currentUser, logout} = useAuth();
    const navigate = useNavigate();
    const signOut = async (e) =>{
        try {
            await logout();
            navigate('/Login')
        } catch (error) {
            
        }
    }

  return (
    <div className="bg-white py-10 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-black mb-8">
            Profile
        </h2>
        <p>Email : {currentUser.email}</p>
        <p>Phone : {currentUser.phoneNumber}</p>
        <button 
        className="text-white bg-red-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        onClick={() => signOut()} >Sign Out</button>
      </div>
    </div>
  );
}

export default Profile;
