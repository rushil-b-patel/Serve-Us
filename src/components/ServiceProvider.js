import React from 'react';
import ServiceProviderCard from './ServiceProviderCard';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';

const serviceProvidersData = [
  {
    id: 1,
    services: ['Plumbing'], 
    name: "John's Plumbing",
    price: "Rs.599",
    time: "01:50:30",
    rating: "5.0",
    title: "Tap & Tour",
    description: 'Experienced plumbing services for your home.',
    image: 'https://content.jdmagicbox.com/comp/def_content/plumbing-contractors/4-plumbing-contractors-10-d3qlx.jpg?clr=',
  },
  {
    id: 6,
    services: ['Plumbing'], 
    name: "Rushil's Plumbing",
    price: "Rs.799",
    time: "01:50:30",
    rating: "4.5",
    title: "Patel Plumbers",
    description: 'Experienced plumbing services for your home.',
    image: 'https://content.jdmagicbox.com/comp/def_content/plumbing-contractors/4-plumbing-contractors-10-d3qlx.jpg?clr=',
  },
  {
    id: 2,
    services: ['Electrical'], 
    name: 'ABC Electricians',
    price:"Rs.599",
    time: "",
    rating: "",
    title: "",
    description: 'Professional electrical services at your doorstep.',
    image: 'abc-electricians.jpg',
  },
  {
    id: 3,
    services: ['Home Repairs'], 
    name: 'Home Repair Pros',
    price:"Rs.599",
    time: "",
    rating: "",
    title: "",
    description: 'We fix it all - from leaks to broken appliances.',
    image: 'home-repair-pros.jpg',
  },
  {
    id: 4,
    services: ['Pest Control'], 
    name: 'Pest Control Experts',
    price:"Rs.599",
    time: "",
    rating: "",
    title: "",
    description: 'Effective pest control solutions for a pest-free home.',
    image: 'pest-control-experts.jpg',
  },
];

function ServiceProvider() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedService = queryParams.get('service');

  const filteredServiceProviders = serviceProvidersData.filter((provider) =>
    provider.services.includes(selectedService)
  );

  const [cart, setCart] = useState([]);

  const addToCart = (service) => {
    setCart([...cart, service]);
  };

  const removeFromCart = (service) => {
    const updatedCart = cart.filter((item) => item.id !== service.id);
    setCart(updatedCart);
  };

  const updateQuantity = (serviceId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === serviceId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10 z-10 relative">
      <div className="md:flex">
        <div className="md:w-1/2">
        {filteredServiceProviders.map((provider) => (
          <div key={provider.id}>
            <ServiceProviderCard
              name={provider.name}
              description={provider.description}
              image={provider.image}
              price={provider.price}
              time={provider.time}
              rating={provider.rating}
              title={provider.title}
              addToCart={() => addToCart(provider)}
            />
          </div>
        ))}
        </div>
      <div className="md:w-1/3 mx-auto fixed top-30 right-28 h-full">
        <Cart cartItems={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity}/>
      </div>
      </div>
    </div>
  );
}

export default ServiceProvider;
