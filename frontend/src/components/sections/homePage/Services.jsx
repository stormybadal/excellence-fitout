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
        <section id="services" className="relative bg-white py-12">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-yellow-50/30"></div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-100/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-100/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800 mb-4">
                        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        Our Services
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                        Comprehensive{" "}
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                            Solutions
                        </span>
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                        Comprehensive solutions tailored for Dubai's residential and commercial spaces.
                        From design to completion, we deliver excellence in every project.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((s, index) => (
                        <div key={s.title} className="group relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100 transition-all duration-300 hover:shadow-2xl hover:ring-yellow-200 hover:-translate-y-1">
                            {/* Icon container */}
                            <div className="relative mb-6">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-100 to-orange-100 group-hover:from-yellow-200 group-hover:to-orange-200 transition-all duration-300">
                                    <div className="text-2xl text-yellow-600 group-hover:scale-110 transition-transform duration-300">
                                        {s.icon}
                                    </div>
                                </div>

                                {/* Decorative number */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                                {s.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {s.desc}
                            </p>

                            {/* Learn more link */}
                            <div className="mt-6">
                                <a href="#" className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium text-sm transition-colors duration-300">
                                    Learn More
                                    <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-yellow-100/30 to-transparent rounded-tl-2xl"></div>
                        </div>
                    ))}
                </div>

                {/* Call to action */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 p-8 shadow-xl">
                        <div className="text-left">
                            <h3 className="text-xl font-bold text-black">Ready to Start Your Project?</h3>
                            <p className="text-black/80">Get a free consultation and quote for your next construction project.</p>
                        </div>
                        <button className="whitespace-nowrap rounded-lg bg-white px-6 py-3 font-semibold text-black shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            Get Free Quote
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;


