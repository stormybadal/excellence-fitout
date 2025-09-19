import React from "react";

const reviews = [
  {
    name: "Ahmed Al Mansouri",
    role: "Property Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg", // Replace with actual image or local path
    quote:
      "Exceptional quality and professional service. They completed our project ahead of schedule.",
  },
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/women/44.jpg", // Replace with actual image or local path
    quote:
      "Outstanding work. They transformed our space into exactly what we envisioned.",
  },
];

const Review = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Header */}
        <div className="mb-10">
          <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold px-4 py-1.5 rounded-full text-sm uppercase">
            Client Testimonials
          </button>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">
            What Our Clients <span className="text-orange-500">Say About This Service</span>
          </h2>
          <p className="text-gray-600 mt-2">What our clients say about this service</p>
        </div>

        {/* Reviews */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mt-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-amber-50 rounded-xl p-6 shadow-md text-left max-w-md w-full"
            >
              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#facc15"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#facc15"
                    className="w-5 h-5 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499l2.286 6.652h7.005L15.75 14.1l2.286 6.652-5.79-4.202-5.79 4.202L8.25 14.1 3.23 10.151h7.005L11.48 3.5z"
                    />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="italic text-gray-700 mb-6">"{review.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-800">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
