import React from 'react';
import { FaBullseye, FaAward } from 'react-icons/fa';
import Heading from '../../shared/Heading.jsx';

const MissionVision = () => {
  return (
    <section className="py-20 px-4 bg-white text-gray-800">

      <Heading title="Our Mission" highlight="& Vision" />

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Mission Card */}
        <div className="bg-orange-50 rounded-xl shadow-md p-8 flex flex-col items-start">
          <div className="bg-gradient-to-br from-orange-400 to-yellow-400 p-4 rounded-md mb-4">
            <FaBullseye className="text-white text-4xl" />
          </div>
          <h3 className="text-3xl font-bold mb-2">Our Mission</h3>
          <p className="text-gray-700 text-lg">
            To deliver exceptional construction and interior maintenance services that exceed client expectations
            while contributing to Dubai's architectural excellence and sustainable development goals.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-red-50 rounded-xl shadow-md p-8 flex flex-col items-start">
          <div className="bg-gradient-to-br from-red-400 to-orange-400 p-4 rounded-md mb-4 ">
            <FaAward className="text-white text-4xl" />
          </div>
          <h3 className="text-3xl font-bold mb-2">Our Vision</h3>
          <p className="text-gray-700 text-lg">
            To be the leading construction company in the UAE, recognized for innovation, quality, and sustainability,
            while setting new standards in the industry through cutting-edge technology and exceptional craftsmanship.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
