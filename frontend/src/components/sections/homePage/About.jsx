import React from "react";


const About = () => {
    return (
        <section id="about" className="relative bg-white py-12">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 via-transparent to-orange-50/30"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-100/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800 mb-4">
                                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                                About Our Company
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
                                Building Dubai's{" "}
                                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                                    Future
                                </span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                            <p>
                                We are a Dubai-based construction and interior fit-out company delivering end-to-end solutions for
                                commercial and residential spaces. From due diligence and design to permits, execution, and handover,
                                our team manages every detail to UAE standards.
                            </p>
                            <p>
                                Our approach blends craftsmanship with project discipline — clear scopes, realistic timelines, and
                                proactive site supervision. Whether it's a corporate office in Business Bay or a villa renovation in
                                Emirates Hills, we build with precision and accountability.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="group rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:ring-yellow-200">
                                <div className="flex items-center mb-3">
                                    <div className="rounded-lg bg-yellow-100 p-2 mr-3">
                                        <svg className="h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-sm font-semibold text-gray-900">Design & Build</div>
                                </div>
                                <p className="text-sm text-gray-600">Single point of contact from concept to completion.</p>
                            </div>
                            <div className="group rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:ring-yellow-200">
                                <div className="flex items-center mb-3">
                                    <div className="rounded-lg bg-yellow-100 p-2 mr-3">
                                        <svg className="h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-sm font-semibold text-gray-900">Commercial Fit-out</div>
                                </div>
                                <p className="text-sm text-gray-600">Offices, retail, and F&B aligned to Dubai codes.</p>
                            </div>
                            <div className="group rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:ring-yellow-200">
                                <div className="flex items-center mb-3">
                                    <div className="rounded-lg bg-yellow-100 p-2 mr-3">
                                        <svg className="h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                        </svg>
                                    </div>
                                    <div className="text-sm font-semibold text-gray-900">Residential Upgrades</div>
                                </div>
                                <p className="text-sm text-gray-600">Kitchens, bathrooms, full refurbishments and joinery.</p>
                            </div>
                            <div className="group rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:ring-yellow-200">
                                <div className="flex items-center mb-3">
                                    <div className="rounded-lg bg-yellow-100 p-2 mr-3">
                                        <svg className="h-5 w-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-sm font-semibold text-gray-900">Maintenance</div>
                                </div>
                                <p className="text-sm text-gray-600">Planned and emergency support across Dubai.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 text-center">
                            <div className="rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 shadow-lg">
                                <div className="text-3xl font-extrabold text-yellow-600 mb-1">12+</div>
                                <div className="text-sm font-medium text-gray-600">Years Experience</div>
                            </div>
                            <div className="rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 shadow-lg">
                                <div className="text-3xl font-extrabold text-yellow-600 mb-1">350+</div>
                                <div className="text-sm font-medium text-gray-600">Projects Completed</div>
                            </div>
                            <div className="rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 shadow-lg">
                                <div className="text-3xl font-extrabold text-yellow-600 mb-1">98%</div>
                                <div className="text-sm font-medium text-gray-600">Client Satisfaction</div>
                            </div>
                        </div>

                        <div>
                            <a href="#contact" className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                <span>Discuss Your Project</span>
                                <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://picsum.photos/seed/about-construction/600/800"
                                className="h-[600px] w-full object-cover"
                                alt="About Excellence Fit-out - Construction team at work"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        </div>

                        {/* Floating stats card */}
                        <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100">
                            <div className="flex items-center space-x-4">
                                <div className="rounded-full bg-yellow-100 p-3">
                                    <svg className="h-6 w-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-gray-900">Licensed & Insured</div>
                                    <div className="text-sm text-gray-600">UAE Certified</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;


