import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isEventPage = location.pathname.includes("/event/");

  // Disable scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="bg-blue-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8" />
          <span className="text-xl font-bold">Eventia</span>
        </Link>

        {/* Hamburger button */}
        <button className="md:hidden z-50" onClick={() => setIsOpen(true)}>
          <FaBars size={24} />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          {!isEventPage && (
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-blue-500/80 text-white z-[100] flex flex-col items-center justify-center space-y-6 transition-all duration-300 ease-in-out">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white"
          >
            <FaTimes size={28} />
          </button>

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold"
          >
            Home
          </Link>
          {!isEventPage && (
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold"
            >
              Contact
            </a>
          )}
        </div>
      )}
    </nav>
  );
}
