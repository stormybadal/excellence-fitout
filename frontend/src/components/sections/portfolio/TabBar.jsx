import React, { useState } from "react";

function TabBar({ categories, onSelectCategory, selectedCategory }) {
  return (
    <div className="bg-[var(--color-background)] p-4 sm:p-8">
      <div className="flex items-center gap-4 bg-white rounded-[20px] p-4 shadow-lg w-full sm:w-fit mx-auto overflow-x-auto scrollbar-hide">
        
        {/* All Services Button */}
        <button
          className={`font-semibold px-5 py-2 rounded-[12px] shadow-md shrink-0 ${
            selectedCategory === "All Services"
              ? "bg-gradient-to-r from-yellow-400 to-red-500 text-white"
              : "bg-gray-100 text-gray-700"
          }`}
          onClick={() => onSelectCategory(null)}
        >
          All Services
        </button>

        {/* Services List */}
        <div className="flex gap-6 text-sm shrink-0">
          {categories.map((service) => (
            <button
              key={service}
              className={`font-semibold whitespace-nowrap cursor-pointer px-4 py-2 rounded-md transition-all duration-200 ${
                selectedCategory === service
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`}
              onClick={() => onSelectCategory(service)}
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
