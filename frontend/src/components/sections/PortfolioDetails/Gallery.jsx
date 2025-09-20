import React from "react";
import Heading from '../../shared/Heading';

const Gallery = ({ image }) => {
  const isTwoImages = image.length === 2;
  const isOneImage = image.length === 1;

  return (
    <section className="w-full bg-[var(--color-background)] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block bg-gradient-to-r from-orange-400 to-yellow-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 shadow-md">
          PROJECT GALLERY
        </div>

        <Heading
          title="See Our Work"
          highlight="In Action"
          description="See our work in action"
          addBreakLine={true}
        />

        <div
          className={`grid gap-10 ${
            isOneImage
              ? 'grid-cols-1 place-items-center'
              : isTwoImages
              ? 'grid-cols-1 sm:grid-cols-2 justify-center'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {image.map((img, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-[500px]"
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
