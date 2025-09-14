import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#fff] text-black shadow-md h-[70px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="text-sm font-bold text-black">
            <Link to="/">
            <img src="/aptechinfo_logo.png" alt="" className="w-[100px] h-[63px]" /> 
            </Link>
          </div>

          <div className="flex items-center gap-2 animate-leftRight ">
            {/* Live dot */}
            <div className="relative">
              <span className="flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </div>

            {/* Swinging Text */}
            <h3 className="text-xl font-bold text-red-500 animate-pendulum origin-top">
              Live Offers
            </h3>
          </div>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
            <Link to="/services" className="hover:text-yellow-400 transition">
              Services
            </Link>
            <Link to="/about" className="hover:text-yellow-400 transition">
              About Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-yellow-400 focus:outline-none"
            >
              {isOpen ? (
                <span className="text-2xl text-black">✖</span>
              ) : (
                <span className="text-2xl text-black">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-3 text-white pt-2">
          <Link
            to="/"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/about"
            className="block hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
}
