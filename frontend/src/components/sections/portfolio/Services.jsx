import ConstructionCard from "../../shared/ConstructionCard";
const Services = ({services}) => {
  
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-7xl text-center">
        

        
 <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold text-black">
            Our <br/>
          <span className="text-orange-500">Services</span>
        </h2>
        <p className="text-gray-600 mt-2">          Showcasing our expertise across different project types
</p>
      </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
         <ConstructionCard
  key={service._id}
  data={{
    id: service._id,
    image: service.images?.[0] || "", // fallback image
    title: service.heading,
    description: service.description,
    services: service.features,
    linkText: "Learn More",
    accentColor: "text-orange-500", // optional
  }}
/>

         ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
