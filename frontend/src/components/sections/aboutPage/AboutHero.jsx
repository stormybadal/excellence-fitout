import React from "react";
import bgImage from "../../../assets/aboutPage/aboutHeroBG.webp";

const AboutHero = () => {
  return (
    <section
      className="w-full h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center px-4">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-2">About</h2>
        <h1 className="text-yellow-300 text-4xl md:text-6xl font-extrabold mb-4">
          Dubai Construction Pro
        </h1>
        <p className="text-white text-lg md:text-xl max-w-3xl">
          Building the future of Dubai with innovative construction solutions and exceptional
          craftsmanship since 2010
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
