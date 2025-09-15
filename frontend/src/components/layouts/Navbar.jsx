import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routes/routes"; // Adjust path if needed
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../ui/Button";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false); // Auto-close menu on route change
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 border-b border-gray-200 shadow-sm h-[72px] md:h-[80px]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-gray-900">
          <Link to="/">CSC</Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center space-x-8">
          {routes
            .filter((r) => r.showInNavbar)
            .map((route) => {
              const isActive = location.pathname === route.path;
              return (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-yellow-100 text-yellow-700"
                        : "text-gray-700 hover:text-yellow-700"
                    }`}
                  >
                    {route.name}
                  </Link>
                </li>
              );
            })}
        </ul>

        {/* CTA Button (always visible) */}
        <div className="hidden md:block">
          <Button>Get Quote</Button>
        </div>

        {/* Hamburger (mobile only) */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <FaBars size={22} className="text-gray-800" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
          <span className="text-xl font-extrabold text-gray-900">CSC</span>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <FaTimes size={24} className="text-gray-800" />
          </button>
        </div>

        <ul className="flex flex-col items-start space-y-4 px-6 py-6">
          {routes
            .filter((r) => r.showInNavbar)
            .map((route) => {
              const isActive = location.pathname === route.path;
              return (
                <li key={route.path}>
                  <Link
                    to={route.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? "bg-yellow-100 text-yellow-700"
                        : "text-gray-700 hover:text-yellow-700"
                    }`}
                  >
                    {route.name}
                  </Link>
                </li>
              );
            })}
          <li className="pt-4">
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-base px-4 py-2 rounded-md shadow-md transition-all duration-200">
              Get Quote
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
