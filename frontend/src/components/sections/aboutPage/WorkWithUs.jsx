import React from 'react';

const WorkWithUs = () => {
  return (
    <section className="bg-gradient-to-r from-red-500 to-yellow-500 py-16 px-4 text-white text-center">
      <h2 className="text-5xl font-bold mb-4">
        Ready to Work <br/> <span className="font-bold text-white">With Us?</span>
      </h2>
      <p className="text-lg mb-6">
        Join hundreds of satisfied clients who have trusted us with their construction and interior projects
      </p>
      <a href="#contact" className="inline-block bg-white text-gray-800 py-3 px-8 rounded-lg text-lg font-semibold transition-all hover:bg-orange-500 hover:text-white">
        Start Your Project Today
      </a>
    </section>
  );
};

export default WorkWithUs;
