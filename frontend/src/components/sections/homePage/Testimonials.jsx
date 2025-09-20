import React from "react";

const testimonials = [
    {
        name: "A. Khan",
        role: "Dubai Marina",
        quote: "Professional, timely, and top-notch finish. Highly recommended for fit-out.",
    },
    { name: "L. Smith", role: "Business Bay", quote: "Great communication and quality workmanship." },
    { name: "R. Patel", role: "JLT", quote: "Delivered our office ahead of schedule without compromising quality." },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="relative bg-gradient-to-br from-yellow-50 via-white to-orange-50 py-12">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-40" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800 mb-4">
                        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                        Client Testimonials
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                        What Our{" "}
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                            Clients Say
                        </span>
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
                        Don't just take our word for it. Here's what our satisfied clients have to say about our work.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <div key={t.name} className="group relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100 transition-all duration-300 hover:shadow-2xl hover:ring-yellow-200">
                            {/* Rating stars */}
                            <div className="flex space-x-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                                "{t.quote}"
                            </blockquote>

                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">
                                            {t.name.charAt(0)}
                                        </span>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                                    <div className="text-sm text-gray-500">{t.role}</div>
                                </div>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-yellow-100/30 to-transparent rounded-tl-2xl"></div>
                        </div>
                    ))}
                </div>

                {/* Trust indicators */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center space-x-8 text-sm text-gray-600">
                        <div className="flex items-center">
                            <div className="mr-2 h-1 w-8 bg-yellow-400"></div>
                            <span>98% Client Satisfaction</span>
                        </div>
                        <div className="flex items-center">
                            <div className="mr-2 h-1 w-8 bg-yellow-400"></div>
                            <span>350+ Happy Clients</span>
                        </div>
                        <div className="flex items-center">
                            <div className="mr-2 h-1 w-8 bg-yellow-400"></div>
                            <span>12+ Years Experience</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;


