import React, { useState, useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { database } from "../firebaseConfig";
import ServiceProviderCard from "./Card/ServiceProviderCard";
import Cart from "./Cart";
import AddService from "./AddService";
import { NavLink } from 'react-router-dom'
import { useAuth } from "../context/AuthContext";

function Services() {
  const [services, setServices] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const { currentUser } = useAuth();

  const fetchServices = async () => {
    const q = query(collection(database, "services"));
    const querySnapshot = await getDocs(q);
    const servicesData = [];

    querySnapshot.forEach((doc) => {
      servicesData.push({ id: doc.id, ...doc.data() });
    });

    setServices(servicesData);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const addToCart = (service) => {
    setCartItems([...cartItems, service]);
  };

  const updateQuantity = (service, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === service.id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10 z-10 relative">
      <h1 className="font-bold text-3xl">Services</h1>
      <p className="font-serif text-lg text-slate-500">
        Best Services at low cost efficient prices
      </p>
      {currentUser && currentUser.userType === "service_provider" ? (
        <div>
          <AddService />
        </div>
      ) : (
        <div>
          <NavLink to="/AddService">
          <button 
          className="mt-4 text-xl w-full text-white bg-blue-700 py-2 rounded-xl shadow-lg hover:bg-blue-600">
            Add new Service
        </button>
            </NavLink>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-8">
            {services.map((service, index) => (
              <div key={index}>
                <ServiceProviderCard
                  name={service.name}
                  image={service.image}
                  price={service.price}
                  title={service.title}
                  time={service.time}
                  rating={service.rating}
                  description={service.description}
                  addToCart={() => addToCart(service)}
                />
              </div>
            ))}
          </div>

          {cartItems.length > 0 && (
            <div className="mt-8">
              <Cart
                cartItems={cartItems}
                removeFromCart={(item) => {
                  const updatedItems = cartItems.filter(
                    (cartItem) => cartItem.id !== item.id
                  );
                  setCartItems(updatedItems);
                }}
                updateQuantity={updateQuantity}
                emptyCart={emptyCart}
              />
            </div>
          )}
          
        </div>
      )}
    </div>
  );
}

export default Services;
