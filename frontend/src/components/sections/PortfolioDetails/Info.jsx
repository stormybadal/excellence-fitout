import React from "react";
import { FaAward, FaUsers, FaCheckCircle } from "react-icons/fa";
import interiorImage from "../../../assets/contactUsPage/contactUsHeroBg.jpg"; // Use actual image

function Info() {
  return (
    <section className="w-full bg-[var(--color-background)] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Text Content */}
        <div className="flex-1">
          <span className="bg-gradient-to-r from-orange-500 to-red-400 text-white font-semibold px-4 py-1 rounded-full text-sm inline-block mb-4 shadow-md">
            SERVICE OVERVIEW
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Excellence in <br />
            <span className="text-orange-500">Every Detail</span>
          </h2>

          <p className="text-gray-700 text-lg mb-10">
            Transform your space with our expert interior design and fit-out
            services. We create beautiful, functional environments that reflect
            your style and meet your specific needs, combining aesthetics with
            practicality.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Experience */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex-1 text-center">
              <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 text-xl">
                <FaAward />
              </div>
              <h3 className="text-orange-500 text-2xl font-bold">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>

            {/* Projects */}
            <div className="bg-white rounded-2xl shadow-md p-6 flex-1 text-center">
              <div className="bg-blue-600 text-white rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 text-xl">
                <FaUsers />
              </div>
              <h3 className="text-blue-600 text-2xl font-bold">500+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src={interiorImage}
              alt="Interior"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quality Badge */}
          <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-[-60px] bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-4 w-[270px]">
            <div className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-xl p-3 text-xl">
              <FaCheckCircle />
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold text-lg">
                Quality Guaranteed
              </h4>
              <p className="text-sm text-gray-500">100% Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
