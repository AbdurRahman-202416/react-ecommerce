import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <div>
      <nav className="bg-gray-800 text-white fixed top-0 w-full z-50 shadow-lg">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a className="text-2xl font-bold" href="/">
            FearStyle
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <ul className="flex items-center space-x-6">
              <li>
                <a href="/" className="hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li className="relative">
                {/* Categories Dropdown */}
                <button
                  onClick={toggleCategories}
                  className="hover:text-yellow-400 flex items-center focus:outline-none"
                >
                  Categories
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isCategoriesOpen && (
                  <ul className="absolute bg-gray-800 text-white rounded-lg shadow-lg mt-2 w-48">
                    <li className="px-4 py-2 hover:bg-gray-700">
                      <a href="/category/1">Men's Clothing</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                      <a href="/category/2">Women's Clothing</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                      <a href="/category/3">Accessories</a>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                      <a href="/category/4">Shoes</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="about" className="hover:text-yellow-400">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-yellow-400">
                  Contact
                </a>
              </li>
            
            </ul>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gray-800 text-white">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <a
                  href="/"
                  className="hover:text-yellow-400"
                  onClick={toggleMobileMenu}
                >
                  Home
                </a>
              </li>
              <li>
                {/* Mobile Categories Dropdown */}
                <button
                  onClick={toggleCategories}
                  className="hover:text-yellow-400"
                >
                  Categories
                </button>
                {isCategoriesOpen && (
                  <ul className="bg-gray-800 text-white rounded-lg px-2 mt-2 w-48">
                    <li className="px-4 py-2 hover:bg-gray-700">
                      <Link to={`/categories/1`}>Men's Clothing</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                      <Link to={`/categories/2`}>Women's Clothing</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                      <Link  to={`/categories/3`}>Accessories</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-700">
                      <Link  to={`/categories/4`}>Shoes</Link>
                    </li>
                  </ul>
                )}
              </li>
             
              <li>
                <a
                  href="#contact"
                  className="hover:text-yellow-400"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </a>
              </li>
              
              <li>
                <a
                  href="#about"
                  className="hover:text-yellow-400"
                  onClick={toggleMobileMenu}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
