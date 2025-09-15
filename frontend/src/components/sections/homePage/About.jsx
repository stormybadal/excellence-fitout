import React from "react";


const About = () => {
    return (
        <section id="about" className="mx-auto max-w-7xl px-4 py-16">
            <div className="grid gap-10 md:grid-cols-[1.6fr,0.8fr] md:items-center">
                <div>
                    <h2 className="text-3xl font-extrabold md:text-4xl">About Excellence Fit-out</h2>
                    <p className="mt-4 text-lg leading-relaxed text-gray-700">
                        We are a Dubai-based construction and interior fit-out company delivering end-to-end solutions for
                        commercial and residential spaces. From due diligence and design to permits, execution, and handover,
                        our team manages every detail to UAE standards.
                    </p>
                    <p className="mt-3 text-gray-700">
                        Our approach blends craftsmanship with project discipline — clear scopes, realistic timelines, and
                        proactive site supervision. Whether it’s a corporate office in Business Bay or a villa renovation in
                        Emirates Hills, we build with precision and accountability.
                    </p>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                            <div className="text-sm font-semibold text-gray-900">Design & Build</div>
                            <p className="mt-1 text-sm text-gray-600">Single point of contact from concept to completion.</p>
                        </div>
                        <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                            <div className="text-sm font-semibold text-gray-900">Commercial Fit-out</div>
                            <p className="mt-1 text-sm text-gray-600">Offices, retail, and F&B aligned to Dubai codes.</p>
                        </div>
                        <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                            <div className="text-sm font-semibold text-gray-900">Residential Upgrades</div>
                            <p className="mt-1 text-sm text-gray-600">Kitchens, bathrooms, full refurbishments and joinery.</p>
                        </div>
                        <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
                            <div className="text-sm font-semibold text-gray-900">Maintenance</div>
                            <p className="mt-1 text-sm text-gray-600">Planned and emergency support across Dubai.</p>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                        <div className="rounded-lg bg-gray-50 p-4">
                            <div className="text-2xl font-extrabold text-yellow-600">12+</div>
                            <div className="text-xs text-gray-600">Years</div>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-4">
                            <div className="text-2xl font-extrabold text-yellow-600">350+</div>
                            <div className="text-xs text-gray-600">Projects</div>
                        </div>
                        <div className="rounded-lg bg-gray-50 p-4">
                            <div className="text-2xl font-extrabold text-yellow-600">98%</div>
                            <div className="text-xs text-gray-600">Satisfaction</div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <a href="#contact" className="inline-block rounded-md bg-yellow-500 px-5 py-3 font-semibold text-black shadow-md transition hover:bg-yellow-400">Discuss Your Project</a>
                    </div>
                </div>
                {/* <div className="mx-auto w-full">
                    <img src={aboutBg} className="h-[75vh] w-full rounded-lg object-cover shadow-lg md:h-[80vh] lg:h-[85vh]" alt="About Excellence Fit-out" />
                </div> */}
            </div>
        </section>
    );
};

export default About;


