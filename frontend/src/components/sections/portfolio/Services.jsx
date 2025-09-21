// import ConstructionCard from "../../shared/ConstructionCard";
// const Services = ({services}) => {
  
//   return (
//     <section className="px-4 py-20">
//       <div className="mx-auto max-w-7xl text-center">
        

        
//  <div className="max-w-6xl mx-auto text-center mb-12">
//         <h2 className="text-5xl font-bold text-black">
//             Our <br/>
//           <span className="text-orange-500">Services</span>
//         </h2>
//         <p className="text-gray-600 mt-2">          Showcasing our expertise across different project types
// </p>
//       </div>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service, index) => (
//          <ConstructionCard
//   key={service._id}
//   data={{
//     id: service._id,
//     image: service.images?.[0] || "", // fallback image
//     title: service.heading,
//     description: service.description,
//     services: service.features,
//     linkText: "Learn More",
//     accentColor: "text-orange-500", // optional
//   }}
// />

//          ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;




import { useEffect, useRef } from "react";
import ConstructionCard from "../../shared/ConstructionCard";
import { usePortfolio } from "../../../hook/usePortfolio";
// Accept props from parent
const Services = ({ services = [], isLoading, isError, fetchNextPage, hasNextPage }) => {
  const loaderRef = useRef(null);

  // Infinite scroll
  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  if (isError) return <p className="text-center text-red-500">Something went wrong...</p>;

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl text-center">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-bold text-black">
            Our <br />
            <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Showcasing our expertise across different project types
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ConstructionCard
              key={service._id}
              data={{
                id: service._id,
                image: service.images?.[0] || "",
                title: service.heading,
                description: service.description,
                subheading: service.subheading,
                services: service.features,
                linkText: "Learn More",
                accentColor: "text-orange-500",
              }}
            />
          ))}
        </div>

        {hasNextPage && (
          <div ref={loaderRef} className="mt-8 text-center">
            <p>Loading more services...</p>
          </div>
        )}

        {isLoading && services.length === 0 && (
          <p className="text-center mt-4">Loading services...</p>
        )}
      </div>
    </section>
  );
};

export default Services;
