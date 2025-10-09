import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-2">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Left Column (Company Info) */}
        <div className="p-6 rounded-lg">
          <h3 className="text-3xl font-bold text-yellow-500 mb-4">Excellence interior & contracting llc</h3>
          <p className="text-lg mb-4">
            Leading construction and interior maintenance company in Dubai, delivering excellence in every project since 2010.
          </p>
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://www.facebook.com/profile.php?id=61581460251945"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 p-2 rounded-full transition-all"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/excellence6089/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500 p-2 rounded-full transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/excellence-technical-services-l-l-c-890206387/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 p-2 rounded-full transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.pinterest.com/excellenceservices2024/?actingBusinessId=1075727198402691955"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 p-2 rounded-full transition-all"
            >
              <FaPinterest />
            </a>
          </div>
        </div>

        {/* Middle Column (Quick Links) */}
        <div className=" p-6 rounded-lg">
          <h4 className="text-xl font-semibold text-yellow-500 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500 transition-all">Home</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-all">About Us</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-all">Our Services</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-all">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Column (Contact Info) */}
        <div className="p-6 rounded-lg">
          <h4 className="text-xl font-semibold text-yellow-500 mb-4">Contact Info</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-orange-500">📍</span>
              <span>Business Bay, Dubai, United Arab Emirates</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-orange-500">📞</span>
              <a href="tel:+971501234567" className="hover:text-orange-500 transition-all">+971552146089</a>
            </li>
            {/* <li className="flex items-center space-x-2">
              <span className="text-orange-500">📧</span>
              <a href="mailto:info@excellenceinteriors.com" className="hover:text-orange-500 transition-all">info@excellenceinteriors.com</a>
                <a href="mailto:excellenceservices2024@gmail.com" className="hover:text-orange-500 transition-all">excellenceservices2024@gmail.com</a>
            </li> */}

            <li className="flex items-start space-x-2">
              <span className="text-orange-500">📧</span>
              <div className="flex flex-col space-y-1">
                <a href="mailto:info@excellenceinteriors.com" className="hover:text-orange-500 transition-all">
                  info@excellenceinteriors.com
                </a>
                <a href="mailto:excellenceservices2024@gmail.com" className="hover:text-orange-500 transition-all">
                  excellenceservices2024@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-orange-500">⚡</span>
              <span>24/7 Emergency Service</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-8 text-sm text-gray-400">
        <p>&copy; 2025 Excellence interior & contracting llc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
