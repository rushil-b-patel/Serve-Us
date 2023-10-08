import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../firebaseConfig";
import { useEffect } from "react";
import { useCallback } from "react";

function AddService() {
  const { currentUser } = useAuth();
  const [serviceData, setServiceData] = useState({
    title: "",
    serviceName: "",
    description: "",
    image: "",
    price: "",
  });

  const [formValid, setFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setServiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValid) {
      try {
        const serviceRef = collection(database, "services");
        const newService = {
          ...serviceData,
          providerId: currentUser.uid,
        };

        const docRef = await addDoc(serviceRef, newService);
        console.log("Service added with ID: ", docRef.id);

        setServiceData({
          title: "",
          serviceName: "",
          description: "",
          image: "",
          price: "",
        });
      } catch (error) {
        console.error("Error adding service: ", error);
      }
    } else {
      alert("Please fill in all the fields.");
    }
  };

  const checkFormValidity = useCallback(() => {
    for (const key in serviceData) {
      if (!serviceData[key] && key !== "image") {
        return false;
      }
    }
    return true;
  }, [serviceData]);

  useEffect(() => {
    setFormValid(checkFormValidity());
  }, [serviceData, checkFormValidity]);

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Add Your Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={serviceData.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            Service Name
          </label>
          <input
            type="text"
            name="serviceName"
            value={serviceData.serviceName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={serviceData.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600 mb-2">
            Price
          </label>
          <input
            type="text"
            name="price"
            value={serviceData.price}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
        >
          Add Service
        </button>
      </form>
    </div>
  );
}

export default AddService;
