import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-2">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Left Column (Company Info) */}
        <div className="p-6 rounded-lg">
          <h3 className="text-3xl font-bold text-yellow-500 mb-4">Dubai Construction Pro</h3>
          <p className="text-lg mb-4">
            Leading construction and interior maintenance company in Dubai, delivering excellence in every project since 2010.
          </p>
          <div className="flex space-x-6 text-2xl">
            <a
              href="#"
              className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 p-2 rounded-full transition-all"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500 p-2 rounded-full transition-all"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 p-2 rounded-full transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 p-2 rounded-full transition-all"
            >
              <FaTwitter />
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
              <a href="tel:+971501234567" className="hover:text-orange-500 transition-all">+971 50 123 4567</a>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-orange-500">📧</span>
              <a href="mailto:info@dubaiconstructionpro.com" className="hover:text-orange-500 transition-all">info@dubaiconstructionpro.com</a>
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
        <p>&copy; 2025 Dubai Construction Pro. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
