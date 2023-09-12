import React from "react";
import ServiceCardPrice from "./ServiceCardPrice";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10 z-10 relative">
      <h1 className="font-bold text-3xl  ">Services</h1>
      <p className="font-serif text-lg text-slate-500">
        Best Services at low cost efficient prices
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-8">
        <div className="mb-4">
          <Link to={`/ServiceProvider?service=Plumbing`} className="block">
            <ServiceCard
              name="Plumbing"
              description="Flow with Confidence, Your Trusted Plumbing Experts Plumbing Solutions that Keep Things Running Smoothly"
              link="Link"
              // image=""
            />
          </Link>
        </div>
        <div className="mb-4">
          <Link to={`/ServiceProvider?service=Electrical`} className="block">
            <ServiceCard
              name="AC/Appliances"
              description="Flow with Confidence, Your Trusted Plumbing Experts Plumbing Solutions that Keep Things Running Smoothly"
              link="Link"
              // image="aircondition.png"
            />
          </Link>
        </div>
        <div className="mb-4">
          <Link to={`/ServiceProvider?service=Home Repairs`} className="block">
            <ServiceCard
              name="Home Repairs"
              description="Flow with Confidence, Your Trusted Plumbing Experts Plumbing Solutions that Keep Things Running Smoothly"
              link="Link"
              // image="homerepair.png"
            />
          </Link>
        </div>
        <div className="mb-4">
          <Link to={`/ServiceProvider?service=Pest Control`} className="block">
            <ServiceCard
              name="Pest Control"
              description="Flow with Confidence, Your Trusted Plumbing Experts Plumbing Solutions that Keep Things Running Smoothly"
              link="Link"
              // image="pest.png"
            />
          </Link>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-3xl">Best Offers</h1>
        <p className="font-serif text-lg text-slate-500">
          Hygienic & Single-use products | low-contact services
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 p-8">
        <div>
          <ServiceCardPrice
            name="Bathroom & Kitchen"
            image="https://s3-ap-southeast-1.amazonaws.com/urbanclap-prod/images/growth/home-screen/1625159882387-9585c7.jpeg"
            price="Rs.599"
            rating="5.0"
          />
        </div>
        <div>
          <ServiceCardPrice
            name="Salon for Women"
            image="https://img.freepik.com/free-photo/beautiful-woman-has-cutting-hair-hairdresser_329181-1942.jpg?w=360"
            price="Rs.799"
            rating="5.0"
          />
        </div>
        <div>
          <ServiceCardPrice
            name="Salon for Men"
            image="https://www.bodycraft.co.in/wp-content/uploads/salon-4-mens-styling.png"
            price="Rs.499"
            rating="5.0"
          />
        </div>
        <div>
          <ServiceCardPrice
            name="Massage for Men"
            image="https://t3.ftcdn.net/jpg/02/16/10/38/360_F_216103860_6p5ulMbGcbHmD9PiO8aeGZB4yDq6L47H.jpg"
            price="Rs.1599"
            rating="5.0"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
