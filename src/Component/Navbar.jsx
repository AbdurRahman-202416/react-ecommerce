import React, { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
    <nav className="bg-gray-800 text-white fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-16 py-4">
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
          <span className="oi oi-menu"></span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            <li>
              <a href="/" className="hover:text-yellow-400">
                Home
              </a>
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
              <a
                href="#about"
                className="hover:text-yellow-400"
                onClick={toggleMobileMenu}
              >
                About
              </a>
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
          </ul>
        </div>
      )}
    </nav>
  </div>
  )
}

export default Navbar