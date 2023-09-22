import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../../firebaseConfig";

function Profile() {
  const [userData, setUserData] = useState(null);

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const signOut = async (e) => {
    try {
      await logout();
      navigate("/Login");
    } catch (error) {}
  };

  useEffect(() => {
    if (currentUser) {
      const q = query(
        collection(database, "users"),
        where("email", "==", currentUser.email)
      );

      getDocs(q)
        .then((querySnapshot) => {
          if (!querySnapshot.empty) {
            const user = querySnapshot.docs[0].data();
            setUserData(user);
          } else {
            console.error("User not found in Firestore.");
          }
        })
        .catch((error) => {
          console.error("Error fetching user data: ", error);
        });
    }
  }, [currentUser]);

  return (
    <div className="bg-white py-10 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-black mb-8">Profile</h2>
        {currentUser ? (
          <div>
            <h2>Welcome, {currentUser.email}!</h2>
            {userData ? (
              <div>
                <p>Your user data:</p>
                <ul>
                  <li>First Name: {userData.firstName}</li>
                  <li>Last Name: {userData.lastName}</li>
                    <li>Email: {userData.email}</li>
                    <li>Phone Number: {userData.number}</li>
                </ul>
                <button
                  className="text-white bg-red-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() => signOut()}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <p>Loading user data...</p>
            )}
          </div>
        ) : (
          <p>Please log in to view your data.</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
