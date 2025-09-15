import React from 'react'
import ConstructionCard from '../../shared/ConstructionCard';

import {
  FaBuilding,
  FaCouch,
  FaTools,
  FaPencilRuler,
  FaIndustry,
  FaProjectDiagram,
} from "react-icons/fa";

const cards = [
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
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
  {
    image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Renovation & Remodeling",
    description:
      "Transform your existing space with our comprehensive renovation and remodeling services.",
    services: [
      "Kitchen Renovation",
      "Bathroom Remodeling",
      "Office Renovation",
      "Villa Upgrades",
    ],
    linkText: "Learn More",
    icon: FaPencilRuler,
    accentColor: "text-orange-500",
  },
  {
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Commercial Fit-outs",
    description:
      "Professional commercial spaces designed to enhance productivity and create lasting impressions.",
    services: [
      "Office Design",
      "Retail Spaces",
      "Restaurant Fit-outs",
      "Medical Centers",
    ],
    linkText: "Learn More",
    icon: FaIndustry,
    accentColor: "text-blue-500",
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Project Management",
    description:
      "End-to-end project management services ensuring timely delivery and quality execution.",
    services: [
      "Planning & Scheduling",
      "Quality Control",
      "Budget Management",
      "Risk Assessment",
    ],
    linkText: "Learn More",
    icon: FaProjectDiagram,
    accentColor: "text-yellow-500",
  },
];

const Services = () => {
  return (
    <section className=" py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
          Our{" "}
          <span className="text-yellow-300">

            Services
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-gray-700 mb-12 text-sm sm:text-base">
          Showcasing our expertise across different project types
        </p>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
         
          {cards.map((card, index) => (
          <ConstructionCard key={index} data={card} />
        ))}
        </div>
      </div>
    </section>
  );
};

export default Services