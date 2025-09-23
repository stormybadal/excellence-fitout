// import { FaArrowLeft } from "react-icons/fa";

// const BackNavigation = ({ href, label }) => {
//   return (
//     <div className="bg-gradient-to-r from-yellow-50 via-white to-rose-50 py-6 shadow-sm mt-5">
//       <div className="max-w-7xl mx-auto px-4">
//         <a
//           href={href}
//           className="inline-flex items-center gap-2 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500 hover:underline transition"
//         >
//           <FaArrowLeft className="text-orange-500" />
//           {label}
//         </a>
//       </div>
//     </div>
//   );
// };

// export default BackNavigation;

import { FaArrowLeft } from "react-icons/fa";

const BackNavigation = ({ href, label }) => {
  return (
    <div className="bg-white shadow-sm mt-5">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <a
          href={href}
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
        >
          <FaArrowLeft className="mr-2" />
          {label}
        </a>
      </div>
    </div>
  );
};

export default BackNavigation;
