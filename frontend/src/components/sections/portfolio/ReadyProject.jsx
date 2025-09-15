import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

function ReadyProject() {
  return (
    <section className="bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500 py-20 px-4 text-white text-center">
      <h2 className="text-5xl font-bold mb-4">
 Ready to Start <br/> <span className="font-bold text-white">Your Project?</span>
      </h2>

      <p className="text-lg mb-10 max-w-3xl mx-auto">
Let's discuss your construction or interior project and bring your vision to life
      </p>

      <div className="flex justify-center items-center gap-6 flex-wrap">
        <a
          href="tel:+971501234567"
          className="flex items-center gap-3 bg-white text-gray-800 py-4 px-6 rounded-xl shadow-lg text-lg font-semibold transition-all hover:bg-orange-600 hover:text-white"
        >
          <FaPhoneAlt className="text-xl" />
          <span>
            Get Free Construction
          </span>
        </a>

        <a
          href="#work"
          className="border border-white text-white py-4 px-6 rounded-xl text-lg font-semibold hover:bg-white hover:text-orange-700 transition-all"
        >
          Learn About Us
        </a>
      </div>
    </section>
  );
}

export default ReadyProject;


