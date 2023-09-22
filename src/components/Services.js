import React from "react";
import ServiceCardPrice from "./Card/ServiceCardPrice";
import { Link } from "react-router-dom";
import ServiceCard from "./Card/ServiceCard";

function Services() {

  const serviceCards = [
    {
      to: "/ServiceProvider?service=Plumbing",
      title:"Plumbers",
      name: "Plumbing",
      description: "Flow with Confidence, Your Trusted Plumbing Experts Plumbing Solutions that Keep Things Running Smoothly",
      link: "Link",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpinoybuilders.ph%2F8-most-common-plumbing-problems-and-plumbing-tools%2F&psig=AOvVaw1u_w1O8s6NkHSiS8tmq_6j&ust=1695069633118000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOC72czAsoEDFQAAAAAdAAAAABAE",
    },
    {
      to: "/ServiceProvider?service=Electrical",
      title:"Electrcians",
      name: "AC/Appliances",
      description: "Flow with Confidence, Your Trusted Plumbing Experts Plumbing Solutions that Keep Things Running Smoothly",
      link: "Link",
      image: "aircondition.png",
    },
    {
      to: "/ServiceProvider?service=Home Repairs",
      title:"Home Experts",
      name: "Home Repairs",
      description: "Flow with Confidence, Your Trusted Plumbing Experts Plumbing Solutions that Keep Things Running Smoothly",
      link: "Link",
      image: "homerepair.png",
    },
  ];
  
  const serviceCardPrices = [
    {
      name: "Bathroom & Kitchen",
      image: "https://s3-ap-southeast-1.amazonaws.com/urbanclap-prod/images/growth/home-screen/1625159882387-9585c7.jpeg",
      price: "Rs.599",
      rating: "5.0",
    },
    {
      name: "Salon for Women",
      image: "https://img.freepik.com/free-photo/beautiful-woman-has-cutting-hair-hairdresser_329181-1942.jpg?w=360",
      price: "Rs.799",
      rating: "5.0",
    },
    {
      name: "Salon for Men",
      image: "https://www.bodycraft.co.in/wp-content/uploads/salon-4-mens-styling.png",
      price: "Rs.499",
      rating: "5.0",
    },
    {
      name: "Massage for Men",
      image: "https://t3.ftcdn.net/jpg/02/16/10/38/360_F_216103860_6p5ulMbGcbHmD9PiO8aeGZB4yDq6L47H.jpg",
      price: "Rs.1599",
      rating: "5.0",
    },
  ];

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10 z-10 relative">
      <h1 className="font-bold text-3xl  ">Services</h1>
      <p className="font-serif text-lg text-slate-500">
        Best Services at low cost efficient prices
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-8">
      {serviceCards.map((service, index) => (
          <div className="mb-4" key={index}>
            <Link to={service.to} className="block">
              <ServiceCard {...service} />
            </Link>
          </div>
        ))}
      </div>

      <div>
        <h1 className="font-bold text-3xl">Best Offers</h1>
        <p className="font-serif text-lg text-slate-500">
          Hygienic & Single-use products | low-contact services
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 p-8">
        {serviceCardPrices.map((service, index) => (
          <div key={index}>
            <ServiceCardPrice {...service} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
