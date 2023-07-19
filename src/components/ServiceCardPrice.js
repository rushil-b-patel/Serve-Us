import React from "react";

function ServiceCardPrice(props) {
  return (
    <div>
      <div class="w-full max-w-sm bg-white border rounded-lg shadow">
        <a>
          <img
            class="p-5 pb-0 rounded-t-lg"
            src={props.image}
            alt={props.image}
          />
        </a>
        <div class="px-5 py-5 ">
          <a>
            <h5 class="text-xl font-semibold tracking-tight text-black">
              {props.name}
            </h5>
          </a>
          <div class="flex items-center justify-between pt-5">
            <span class="text-2xl font-bold text-black">
              {props.price}
            </span>
            <button
              class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center"
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
