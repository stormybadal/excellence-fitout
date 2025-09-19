import React from "react";
import Heading from '../../shared/Heading'

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", // Yellow Chair
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20d", // Cozy Living Room
    "https://images.unsplash.com/photo-1578898884541-42b5f3c4be1d", // White Chair
  ];

  return (
    <section className="w-full bg-[var(--color-background)] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Tag */}
        <div className="inline-block bg-gradient-to-r from-orange-400 to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 shadow-md">
          PROJECT GALLERY
        </div>


<Heading  title="See Our Work" highlight="In Action" description="See our work in action"   addBreakLine={true}/> 

        

        {/* Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={`${img}?auto=format&fit=crop&w=800&q=80`}
                alt={`project-${idx + 1}`}
                className="w-full h-[300px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
