import React from "react";
import { FaBuilding, FaCouch, FaTools } from "react-icons/fa";
import ConstructionCard from "../components/shared/ConstructionCard";
import PropertyCard from "../components/shared/PropertyCard";
const Portfolio = () => {
const cards = [
    {
      image: "https://via.placeholder.com/400x250.png?text=Construction+Image",
      title: "Construction Services",
      description:
        "Complete construction solutions from foundation to finishing with modern techniques and quality materials.",
      services: [
        "Residential Construction",
        "Commercial Buildings",
        "High-rise Projects",
        "Infrastructure Development",
      ],
      linkText: "Learn More",
      icon: FaBuilding,
      accentColor: "text-orange-500",
    },
    {
      image: "https://via.placeholder.com/400x250.png?text=Interior+Design",
      title: "Interior Design & Fit-out",
      description:
        "Modern and functional interior design solutions that transform spaces into beautiful, livable environments.",
      services: [
        "Space Planning",
        "Custom Furniture",
        "Lighting Design",
        "Material Selection",
      ],
      linkText: "Learn More",
      icon: FaCouch,
      accentColor: "text-blue-500",
    },
    {
      image: "https://via.placeholder.com/400x250.png?text=Maintenance",
      title: "Maintenance & Repair",
      description:
        "24/7 maintenance and repair services to keep your property in perfect condition year-round.",
      services: [
        "Preventive Maintenance",
        "Emergency Repairs",
        "HVAC Services",
        "Plumbing & Electrical",
      ],
      linkText: "Learn More",
      icon: FaTools,
      accentColor: "text-red-500",
    },
  ];

    const villaData = {
    image: "https://via.placeholder.com/400x250.png?text=Luxury+Villa",
    title: "Luxury Villa - Emirates Hills",
    description: "Modern 5-bedroom villa with contemporary design",
  };
  return (
    <div className="p-10">
      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {cards.map((card, index) => (
          <ConstructionCard key={index} data={card} />
        ))}
        
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Featured Property</h2>
        <PropertyCard data={villaData} />

      </div>
    </div>
  );
};

export default Portfolio;
