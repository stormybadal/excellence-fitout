// import React, { useState } from "react";

// function TabBar({ categories, onSelectCategory, selectedCategory }) {
//   return (
//     <div className="bg-[var(--color-background)] p-4 sm:p-8 ">
//       <div className="flex items-center gap-4 bg-white rounded-[20px] p-4 shadow-lg w-full sm:w-fit mx-auto overflow-x-auto scrollbar-hide">

//         {/* All Services Button */}
//         {/* <button
//           className={`font-semibold px-5 py-2 rounded-[12px] shadow-md shrink-0 ${selectedCategory === "All Services"
//             ? "bg-gradient-to-r from-yellow-400 to-red-500 text-white"
//             : "bg-gray-100 text-gray-700"
//             }`}
//           onClick={() => onSelectCategory(null)}
//         >
//           All Services
//         </button> */}
//         <button
//           className={`font-semibold px-5 py-2 rounded-lg shadow-md shrink-0 transition-all duration-200 ${selectedCategory === null
//             ? "bg-gradient-to-r from-yellow-400 to-red-500 text-white scale-105"
//             : "bg-transparent text-gray-700 hover:bg-gray-100"
//             }`}
//           onClick={() => onSelectCategory(null)}
//         >
//           All Services
//         </button>


//         {/* Services List */}
//         <div className="flex gap-6 text-sm shrink-0">
//           {categories.map((service) => (

//             <>
//               {/* <button
//               key={service}
//               className={`font-semibold whitespace-nowrap cursor-pointer px-4 py-2 rounded-md transition-all duration-200 ${
//                 selectedCategory === service
//                   ? "text-orange-500 border-b-2 border-orange-500"
//                   : "text-gray-700 hover:text-orange-500"
//               }`}
//               onClick={() => onSelectCategory(service)}
//             >
//               {service}
//             </button> */}

//               <button
//                 key={service}
//                 className={`font-semibold whitespace-nowrap cursor-pointer px-5 py-2 rounded-lg transition-all duration-200 ${selectedCategory === service
//                   ? "bg-gradient-to-r from-yellow-400 to-red-500 text-white shadow-md scale-105"
//                   : "bg-transparent text-gray-700 hover:bg-gray-100"
//                   }`}
//                 onClick={() => onSelectCategory(service)}
//               >
//                 {service}
//               </button>


//             </>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TabBar;


import React, { useEffect, useState } from "react";

function TabBar({ categories = [], onSelectCategory, selectedCategory: selectedCategoryProp }) {
  const isControlled = selectedCategoryProp !== undefined;
  const [selectedCategory, setSelectedCategory] = useState(
    isControlled ? selectedCategoryProp : null // default to "All Services"
  );

  useEffect(() => {
    if (isControlled) setSelectedCategory(selectedCategoryProp);
  }, [selectedCategoryProp, isControlled]);

  useEffect(() => {
    if (!isControlled) {
      setSelectedCategory(null);
      if (onSelectCategory) onSelectCategory(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelect = (cat) => {
    if (!isControlled) setSelectedCategory(cat);
    if (onSelectCategory) onSelectCategory(cat);
  };

  const baseClasses =
    "font-semibold whitespace-nowrap cursor-pointer px-5 py-2 transition-all duration-200";

  const activeClasses =
    "bg-gradient-to-r from-yellow-400 to-red-500 text-white shadow-md rounded-lg scale-105";

  const inactiveClasses =
    "bg-transparent text-gray-700 hover:bg-gray-100 hover:rounded-lg";

  return (
    <div className="bg-[var(--color-background)] p-4 sm:p-8">
      <div className="flex items-center gap-4 bg-white rounded-[20px] p-4 shadow-lg w-full sm:w-fit mx-auto overflow-x-auto scrollbar-hide">
        {/* All Services */}
        <button
          aria-pressed={selectedCategory === null}
          onClick={() => handleSelect(null)}
          className={`${baseClasses} ${selectedCategory === null ? activeClasses : inactiveClasses
            }`}
        >
          All Services
        </button>

        {/* Category buttons */}
        <div className="flex gap-6 text-sm shrink-0">
          {categories.map((service) => (
            <button
              key={service}
              aria-pressed={selectedCategory === service}
              onClick={() => handleSelect(service)}
              className={`${baseClasses} ${selectedCategory === service ? activeClasses : inactiveClasses
                }`}
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
