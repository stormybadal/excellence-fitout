import React from "react";
import Heading from '../../shared/Heading'
const services = [
  "Space Planning",
  "Custom Furniture Design",
  "Lighting Design",
  "Material Selection",
  "Color Consultation",
  "3D Visualization",
  "Project Management",
  "Installation Services",
];

function Feature() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Label */}
        <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 shadow-md">
          WHAT WE OFFER
        </div>


<Heading  title="Comprehensive Solutions" highlight="Tailored for You" description="Comprehensive solutions tailored to your needs"   addBreakLine={true}/> 





        {/* Grid of Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#fff7ed] text-left px-6 py-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                <span className="font-semibold text-gray-900">{service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;
