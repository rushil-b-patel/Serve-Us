import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where, deleteDoc, doc } from "firebase/firestore";
import { database } from "../../firebaseConfig";

function Profile() {
  const [userData, setUserData] = useState(null);
  const [userServices, setUserServices] = useState([]);

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const signOut = async (e) => {
    try {
      await logout();
      navigate("/Login");
    } catch (error) {}
  };

  const handleDeleteService = async (serviceId) => {
    try {
      const serviceDocRef = doc(database, "services", serviceId);
      await deleteDoc(serviceDocRef);
      setUserServices((prevServices) =>
        prevServices.filter((service) => service.id !== serviceId)
      );
    } catch (error) {
      console.error("Error deleting service: ", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      const userTypeCollection = currentUser.userType === "customer" ? "customers" : "users";
      const q = query(
        collection(database, userTypeCollection),
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

  useEffect(() => {
    if (currentUser) {
      const q = query(
        collection(database, "services"),
        where("providerId", "==", currentUser.uid)
      );

      getDocs(q)
        .then((querySnapshot) => {
          const services = [];
          querySnapshot.forEach((doc) => {
            services.push({ id: doc.id, ...doc.data() });
          });
          setUserServices(services);
        })
        .catch((error) => {
          console.error("Error fetching user services: ", error);
        });
    }
  }, [currentUser]);

  return (
    <div className="bg-white py-10 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {currentUser && userData ? (
          <div>
            <h2 className="text-3xl font-bold text-black mb-8">
              Welcome {userData.firstName}!
            </h2>
            {userData ? (
              <div>
                <div className="shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <p className="mt-1 text-sm text-black">
                      Details and informations about user.
                    </p>
                  </div>
                  <div className="border-t border-black border-b">
                    <dl>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-black">
                          Full name
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData.firstName} {userData.lastName}
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-black">
                          Field
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData.profession}
                        </dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-black">
                          Email address
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData.email}
                        </dd>
                      </div>
                      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-black">
                          Location
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData.location}
                        </dd>
                      </div>
                      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-black">
                          Phone
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
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
          <div>
            <p>Please log in to view your data.</p>
          </div>
        )}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Your Services</h2>
          {userServices.length === 0 ? (
            <p>You haven't added any services yet.</p>
          ) : (
            <ul className="space-y-4">
              {userServices.map((service) => (
                <li
                  key={service.id}
                  className="bg-white p-4 rounded-lg shadow-md border border-gray-300"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold">
                      Title : {service.title}
                    </h3>
                    <p className="text-black">
                      Service Name : {service.serviceName}
                    </p>
                    <p className="text-black">Price : Rs.{service.price}</p>
                    <p className="text-black">
                      Description : {service.description}
                    </p>
                  </div>
                  <div className="mt-auto"> 
                    <button
                      onClick={() => handleDeleteService(service.id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline-red active:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
