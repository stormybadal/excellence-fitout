// import React from "react";
// import { FaBuilding } from "react-icons/fa"; // Example icon (you can swap with any)

// const ConstructionCard = () => {
//   // Variables
//   const accentColor = "text-orange-500"; // Accent for bullets + link
//   const cardData = {
//     image:
//       "https://via.placeholder.com/400x250.png?text=Construction+Image", // Replace with actual image
//     title: "Construction Services",
//     description:
//       "Complete construction solutions from foundation to finishing with modern techniques and quality materials.",
//     services: [
//       "Residential Construction",
//       "Commercial Buildings",
//       "High-rise Projects",
//       "Infrastructure Development",
//     ],
//     linkText: "Learn More",
//     icon: FaBuilding, // Dynamic icon
//   };

//   // Extract icon component
//   const Icon = cardData.icon;

//   return (
//     <div className="max-w-sm rounded-2xl shadow-md overflow-hidden bg-white">
//       {/* Image with icon overlay */}
//       <div className="relative">
//         <img
//           src={cardData.image}
//           alt={cardData.title}
//           className="w-full h-48 object-cover"
//         />
//         <div className="absolute top-3 left-3 bg-white p-2 rounded-lg shadow">
//           <Icon className="text-gray-700 text-lg" />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <h2 className="text-xl font-bold text-gray-900 mb-2">
//           {cardData.title}
//         </h2>
//         <p className="text-gray-600 mb-4">{cardData.description}</p>

//         {/* Bullet List */}
//         <ul className="space-y-2 mb-4">
//           {cardData.services.map((service, index) => (
//             <li key={index} className="flex items-center">
//               <span className={`mr-2 ${accentColor}`}>●</span>
//               <span className="text-gray-700">{service}</span>
//             </li>
//           ))}
//         </ul>

//         {/* Link */}
//         <a
//           href="#"
//           className={`font-semibold ${accentColor} hover:underline`}
//         >
//           {cardData.linkText}
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ConstructionCard;




import React from "react";

const ConstructionCard = ({ data }) => {
  // Extract props
  const {
    image,
    title,
    description,
    services,
    linkText,
    icon: Icon,
    accentColor = "text-orange-500", // default accent color
  } = data;

  return (
    <div className="max-w-sm rounded-2xl shadow-md overflow-hidden bg-white">
      {/* Image with icon overlay */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {Icon && (
          <div className="absolute top-3 left-3 bg-white p-2 rounded-lg shadow">
            <Icon className="text-gray-700 text-lg" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Bullet List */}
        <ul className="space-y-2 mb-4">
          {services?.map((service, index) => (
            <li key={index} className="flex items-center">
              <span className={`mr-2 ${accentColor}`}>●</span>
              <span className="text-gray-700">{service}</span>
            </li>
          ))}
        </ul>

        {/* Link */}
        {linkText && (
          <a href="#" className={`font-semibold ${accentColor} hover:underline`}>
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

export default ConstructionCard;
