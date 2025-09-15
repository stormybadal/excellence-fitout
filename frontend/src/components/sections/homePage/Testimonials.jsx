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
        <section id="testimonials" className="mx-auto max-w-7xl px-4 py-16">
            <h2 className="text-2xl font-bold md:text-3xl">What Clients Say</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
                {testimonials.map((t) => (
                    <div key={t.name} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                        <p className="text-gray-700">“{t.quote}”</p>
                        <div className="mt-4 text-sm font-semibold">{t.name}</div>
                        <div className="text-xs text-gray-500">{t.role}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;


