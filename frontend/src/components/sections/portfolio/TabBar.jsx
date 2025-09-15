import React from "react";

function TabBar() {
  const services = [
    "Construction",
    "Interior Design",
    "Maintenance",
    "Renovation",
    "Commercial",
    "Management",
  ];

  return (
    <div className="bg-[var(--color-background)] p-4 sm:p-8">
      <div className="flex items-center gap-4 bg-white rounded-[20px] p-4 shadow-lg w-full sm:w-fit mx-auto overflow-x-auto scrollbar-hide">
        {/* Filter Icon */}
        <button className="text-gray-500 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A1 1 0 0013 13v5l-2 2v-7a1 1 0 00-.293-.707L4.293 6.707A1 1 0 014 6V4z"
            />
          </svg>
        </button>

        {/* All Services Button */}
        <button className="text-white font-semibold px-5 py-2 rounded-[12px] bg-gradient-to-r from-yellow-400 to-red-500 shadow-md shrink-0">
          All Services
        </button>

        {/* Services List */}
        <div className="flex gap-6 text-gray-700 font-semibold text-sm shrink-0">
          {services.map((service) => (
            <button
              key={service}
              className="hover:text-orange-500 transition-all duration-200 whitespace-nowrap"
            >
              {service}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TabBar;
