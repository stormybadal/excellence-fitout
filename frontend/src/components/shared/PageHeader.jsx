// import React from "react";

// const PageHeader = ({ bgImage, heading, subheading, description }) => {
//   return (
//     <section
//       className="w-full h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center px-4">
//         {heading && (
//           <h2 className="text-white text-3xl md:text-5xl font-bold mb-2">{heading}</h2>
//         )}
//         {subheading && (
//           <h1 className="text-yellow-300 text-4xl md:text-6xl font-extrabold mb-4">
//             {subheading}
//           </h1>
//         )}
//         {description && (
//           <p className="text-white text-lg md:text-xl max-w-3xl">{description}</p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default PageHeader;


import React from "react";

const PageHeader = ({ bgImage, bgColorClass, heading, subheading, description }) => {
  // Determine style or class based on whether bgImage or bgColorClass is provided
  const hasBgImage = !!bgImage;

  return (
    <section
      className={`w-full ${hasBgImage ? "h-[70vh] bg-cover bg-center bg-no-repeat" : "py-16"} flex items-center justify-center text-center ${bgColorClass || ""}`}
      style={hasBgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      <div className={`${hasBgImage ? "bg-black/50 w-full h-full" : ""} flex flex-col items-center justify-center px-4`}>
        {heading && (
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-2">{heading}</h2>
        )}
        {subheading && (
          <h1 className="text-yellow-300 text-4xl md:text-6xl font-extrabold mb-4">
            {subheading}
          </h1>
        )}
        {description && (
          <p className="text-white text-lg md:text-xl max-w-3xl">{description}</p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
