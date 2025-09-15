import React from "react";

const PropertyCard = ({ data }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105">
      <img
        className="w-full h-56 object-cover"
        src={data.image}
        alt={data.title}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{data.title}</h2>
        <p className="text-sm text-gray-600 mt-2">{data.description}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
