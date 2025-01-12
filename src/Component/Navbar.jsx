import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiRequest from "../Axios"; 
import logo from "../assets/logo.jpeg"

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  // Fetch categories from the API
  const getCategories = async () => {
    try {
      const response = await apiRequest.get('/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleCategories = (e) => {
    e.stopPropagation(); // Prevent closing the sidebar when toggling the dropdown
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsCategoriesOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white font-bold fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-2 sm:px-4 ">
        <Link to="/" className="">
        <img src={logo} alt="logo"className=" h-[50px] sm:h-[65px]  rounded-full  backdrop-filter backdrop-saturate-110 w-full" /></Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          {/* Categories Dropdown */}
          <div className="relative">
            <button
              className="flex items-center hover:text-yellow-400 focus:outline-none"
              onClick={toggleCategories}
            >
              Categories
              <svg
                className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${
                  isCategoriesOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isCategoriesOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/categories/${category.id}`}
                    className="block px-4 py-2 text-gray-800 rounded-sm  hover:bg-indigo-300"
                    onClick={() => setIsCategoriesOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className="hover:text-yellow-400">About</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleSidebar} className="lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] sm:w-[30%] bg-gray-800 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="p-6">
          <div className="flex justify-end">
            <button onClick={closeSidebar} className="text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-8 space-y-4">
            <Link to="/" className="block text-white hover:text-yellow-400" onClick={closeSidebar}>
              Home
            </Link>

            {/* Categories Dropdown */}
            <div>
              <button
                onClick={toggleCategories}
                className="flex items-center text-white hover:text-yellow-400 w-full"
              >
                Categories
                <svg
                  className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${
                    isCategoriesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isCategoriesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/categories/${category.id}`}
                      className="block text-white hover:text-yellow-400"
                      onClick={closeSidebar}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="block text-white hover:text-yellow-400" onClick={closeSidebar}>
              About
            </Link>
            <Link to="/contact" className="block text-white hover:text-yellow-400" onClick={closeSidebar}>
              Contact
            </Link>
          </div>
        </div>
      </div>

     
    </nav>
  );
};

export default Navbar;
