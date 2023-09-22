import React from "react";

function ServiceCardPrice(props) {
  return (
    <div>
      <div className="w-full max-w-sm bg-white border rounded-lg shadow">
        <p>
          <img
            className="p-5 pb-0 rounded-t-lg"
            src={props.image}
            alt={props.image}
          />
        </p>
        <div className="px-5 py-5 ">
          <p>
            <h5 className="text-xl font-semibold tracking-tight text-black">
              {props.name}
            </h5>
          </p>
          <div className="flex items-center justify-between pt-5">
            <span className="text-2xl font-bold text-black">
              {props.price}
            </span>
            <button
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCardPrice;
