import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const GetStartedSection = ({
  heading,
  subheading,
  description,
  buttonOne = {
    show: true,
    text: "Get Free Construction",
    link: "tel:+971501234567",
    icon: true,
  },
  buttonTwo = {
    show: true,
    text: "Learn About Us",
    link: "#work",
  },
}) => {
  return (
    <section className="bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500 py-20 px-4 text-white text-center">
      <h2 className="text-5xl font-bold mb-4">
        {heading} <br />
        <span className="font-bold text-white">{subheading}</span>
      </h2>

      <p className="text-lg mb-10 max-w-3xl mx-auto">
        {description}
      </p>

      <div className="flex justify-center items-center gap-6 flex-wrap">
        {buttonOne?.show && (
          <a
            href={buttonOne.link}
            className="flex items-center gap-3 bg-white text-gray-800 py-4 px-6 rounded-xl shadow-lg text-lg font-semibold transition-all hover:bg-orange-600 hover:text-white"
          >
            {buttonOne.icon && <FaPhoneAlt className="text-xl" />}
            <span>{buttonOne.text}</span>
          </a>
        )}

        {buttonTwo?.show && (
          <a
            href={buttonTwo.link}
            className="border border-white text-white py-4 px-6 rounded-xl text-lg font-semibold hover:bg-white hover:text-orange-700 transition-all"
          >
            {buttonTwo.text}
          </a>
        )}
      </div>
    </section>
  );
};

export default GetStartedSection;

