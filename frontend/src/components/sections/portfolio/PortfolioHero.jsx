import React from 'react'

function PortfolioHero() {
    return (
      <section
        className="bg-gradient-to-r from-red-500 to-yellow-500 py-16 px-4 text-white text-center"
      >
        <div className="w-full h-full flex flex-col items-center justify-center px-4">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-2">OurService & </h2>
          <h1 className="text-yellow-300 text-4xl md:text-6xl font-extrabold mb-4">
          Portfolio
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl">
Comprehensive construction and interior solutions tailored to meet your specific needs and exceed expectations.
          </p>
        </div>
      </section>
    );
}

export default PortfolioHero