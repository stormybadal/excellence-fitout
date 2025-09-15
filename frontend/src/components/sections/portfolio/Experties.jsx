import React from 'react'
import PropertyCard from '../../shared/PropertyCard';
const properties = [
  {
    title: "Luxury Villa - Emirates Hills",
    description: "Modern 5-bedroom villa with contemporary design",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Corporate Office - DIFC",
    description: "Complete office fit-out for financial services company",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Apartment Renovation - Marina",
    description: "Full renovation of a 3-bedroom apartment",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Restaurant Design - JBR",
    description: "Contemporary restaurant interior with sea view",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Shopping Mall - Business Bay",
    description: "Large-scale commercial construction project",
    image: "https://plus.unsplash.com/premium_photo-1664202525979-80d1da46b34b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hotel Maintenance - Downtown",
    description: "Ongoing maintenance services for luxury hotel",
    image: "https://images.unsplash.com/photo-1557034362-d9b6856e4cab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Experties = () => {
  return (
    <section className="bg-[#FFFCEF] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Tag */}
        <div className="inline-block mb-4 px-4 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold uppercase tracking-wide">
          Featured Projects
        </div>

  <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
          Showcasing Our{" "}
          <span className="text-yellow-300">

            Expertise
          </span>
        </h2>
        {/* Subheading */}
        <p className="text-gray-700 mb-12 text-sm sm:text-base">
          Showcasing our expertise across different project types
        </p>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 text-left"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))} */}

{properties.map((property, index) => (
    <PropertyCard key={index} data={property} />
  ))}
        </div>
      </div>
    </section>
  );
};

export default Experties