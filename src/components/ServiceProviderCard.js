import React from "react";

function ServiceProviderCard(service) {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
        <h3 className="mb-3 text-xl font-bold text-indigo-600">
          {service.name}
        </h3>
        <div className="relative">
          <img
            className="w-full rounded-xl"
            src={service.image}
            alt={service.name}
          />
          <p className="absolute top-0 bg-yellow-300 text-black font-semibold py-1 px-2 rounded-br-lg rounded-tl-lg">
            {service.price}
          </p>
        </div>
        <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
          {service.title}
        </h1>
        <div className="my-4">
          <div className="flex justify-between space-x-1 items-center mb-1.5">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <p>{service.time}</p>
          </div>
          <div className="flex justify-between space-x-1 items-center mb-1.5">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </span>
            <p>{service.rating}</p>
          </div>
          <div className="flex justify-between space-x-1 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </span>
            <p>{service.description}</p>
          </div>
          <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceProviderCard;
