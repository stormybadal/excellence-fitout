import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // or use your own icon

const LocationSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Office in <br />
          <span className="text-orange-500">Business Bay</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Located in the heart of Business Bay, Dubai
        </p>
      </div>

      <div className="max-w-5xl mx-auto bg-gradient-to-b from-gray-100 to-gray-200 rounded-[30px] shadow-xl py-16 px-4 md:px-20 text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gradient-to-r from-orange-400 to-red-500 p-4 rounded-xl text-white text-2xl mb-4">
            <FaMapMarkerAlt />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">Interactive Map</h3>
          <p className="text-gray-600">Business Bay, Dubai, UAE</p>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
