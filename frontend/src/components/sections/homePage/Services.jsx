import React from "react";
import { FaTools, FaHome, FaDraftingCompass, FaPaintRoller, FaBuilding, FaWrench } from "react-icons/fa";

const services = [
    { icon: <FaDraftingCompass />, title: "Design & Build", desc: "End-to-end design and construction." },
    { icon: <FaBuilding />, title: "Commercial Fit-out", desc: "Offices, retail, restaurants." },
    { icon: <FaHome />, title: "Residential Renovation", desc: "Apartments and villas." },
    { icon: <FaPaintRoller />, title: "Joinery & Finishes", desc: "Custom carpentry and finishes." },
    { icon: <FaTools />, title: "Civil Works", desc: "Structural, masonry, MEP coordination." },
    { icon: <FaWrench />, title: "Maintenance", desc: "Planned and emergency services." },
];

const Services = () => {
    return (
        <section id="services" className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4">
                <h2 className="text-center text-2xl font-bold md:text-3xl">Our Services</h2>
                <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
                    Comprehensive solutions tailored for Dubai's residential and commercial spaces.
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((s) => (
                        <div key={s.title} className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition hover:shadow-md">
                            <div className="text-3xl text-yellow-600 group-hover:scale-110 transition-transform">{s.icon}</div>
                            <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                            <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;


