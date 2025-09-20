import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";

function Header({ heading = "", tagline = "", image = "" }) {
  return (
    <section
      className="w-full h-[100vh] md:h-[85vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-blue-900/70 w-full h-full flex items-center px-6 md:px-20">
        <div className="max-w-2xl text-white">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {heading.split("&")[0]}&nbsp;
            <br />
            <span className="text-white font-extrabold">
              {heading.split("&")[1] || ""}
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl mt-6 mb-8 text-white">
            {tagline}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition-all duration-300">
              Get Free Quote
            </button>

            <button className="border border-white text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-white hover:text-blue-900 transition-all duration-300">
              <FaPhoneAlt />
              Call Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
