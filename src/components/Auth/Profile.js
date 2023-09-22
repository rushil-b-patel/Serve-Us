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
        {currentUser && userData ? (
          <div>
            <h2 className="text-3xl font-bold text-black mb-8">Welcome {userData.firstName}!</h2>
            {userData ? (
              <div>
                <div className="shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <p className="mt-1 text-sm text-black">
                      Details and informations about user.
                    </p>
                  </div>
                  <div className="border-t border-black">
                    <dl>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-black">
                          Full name
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData.firstName} {userData.lastName}
                        </dd>
                      </div>
                      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-black">
                          Field
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData.profession}
                        </dd>
                      </div>
                      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-black">
                          Email address
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData.email}
                        </dd>
                      </div>
                      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-black">
                          Location
                        </dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData.location}
                        </dd>
                      </div>
                      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-black">Phone</dt>
                        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData.number}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <button
                  className="mt-5 text-white bg-red-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center ease-in duration-200"
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
