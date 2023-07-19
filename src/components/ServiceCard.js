import React from "react";

function ServiceCard(props) {
  return (
    <div>
      <div className="p-6 bg-white border rounded-lg shadow">
        <img className="h-10 mr-3 mb-5 w-auto" src={props.image} alt={props.name} />
        <a href="#" target="_blank">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-black">
            {props.name}
          </h5>
        </a>
        <p className="font-normal text-black">{props.description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
