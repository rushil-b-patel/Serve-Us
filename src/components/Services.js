import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10 z-10 relative">
      <h1 className="font-bold text-3xl  ">Services</h1>
      <p className="text-lg text-slate-500">
        Best Services at low cost efficient prices
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 p-8">
        <div>
          <ServiceCard
            name="Plumbing"
            description=" Flow with Confidence, Your Trusted Plumbing Experts Plumbing Solutions that Keep Things Running Smoothly"
            link="Link"
            image="plumbing.png"
          />
        </div>
        <div>
          <ServiceCard
            name="AC/Appliances"
            description=" Flow with Confidence, Your Trusted Plumbing Experts Plumbing Solutions that Keep Things Running Smoothly"
            link="Link"
            image="aircondition.png"
          />
        </div>
        <div>
          <ServiceCard
            name="Home Repairs"
            description=" Flow with Confidence, Your Trusted Plumbing Experts Plumbing Solutions that Keep Things Running Smoothly"
            link="Link"
            image="homerepair.png"
          />
        </div>
        <div>
          <ServiceCard
            name="Pest Control"
            description=" Flow with Confidence, Your Trusted Plumbing Experts Plumbing Solutions that Keep Things Running Smoothly"
            link="Link"
            image="pest.png"
          />
        </div>
      </div>

      <div>
        <h1 className="font-bold text-3xl">Best Offers</h1>
        <p className="text-lg text-slate-500">
          Hygienic & Single-use products | low-contact services
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 p-8"></div>
        
      </div>
  );
}

export default Services;
