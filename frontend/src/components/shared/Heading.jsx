import React from "react";

const Heading = ({ title, highlight, description, addBreakLine = false }) => {
  return (
    <div className="max-w-6xl mx-auto text-center mb-12">
      <h2 className="text-5xl font-bold">
        {title}
        {addBreakLine ? <br /> : " "}
        <span className="text-orange-500">{highlight}</span>
      </h2>
      {description && <p className="text-gray-600 mt-2">{description}</p>}
    </div>
  );
};

export default Heading;
