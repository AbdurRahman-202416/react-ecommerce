import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiRequest from "../Axios"; 
import logo from "../assets/logo.jpeg";
import useCartStore from "../store/useCartStore";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const cartItems = useCartStore((state) => state.cart);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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
    
    // Check scroll for shadow styling
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleCategories = (e) => {
    e.stopPropagation();
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsCategoriesOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-md py-2' : 'py-4 shadow-sm'}`}>
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-10 sm:h-14 w-auto rounded-[10px] object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10 font-medium text-gray-700">
          <Link to="/" className="hover:text-dark transition-colors tracking-wide">Home</Link>
          
          {/* Categories Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center hover:text-dark focus:outline-none transition-colors tracking-wide"
              onMouseEnter={() => setIsCategoriesOpen(true)}
              onMouseLeave={() => setIsCategoriesOpen(false)}
            >
              Categories
              <svg
                className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                  isCategoriesOpen ? 'rotate-180 text-dark' : 'text-gray-400'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Invisible hover bridge */}
            <div className="absolute top-full left-0 w-full h-4"></div>
            
            <div 
              className={`absolute top-[120%] left-0 w-56 bg-white rounded-xl shadow-xl py-2 z-50 transition-all duration-200 transform origin-top border border-gray-100 max-h-80 overflow-y-auto ${isCategoriesOpen ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}`}
              onMouseEnter={() => setIsCategoriesOpen(true)}
              onMouseLeave={() => setIsCategoriesOpen(false)}
            >
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/categories/${category.id}`}
                  className="block px-5 py-2.5 text-sm text-gray-600 hover:text-dark hover:bg-gray-50 transition-colors"
                  onClick={() => setIsCategoriesOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/about" className="hover:text-dark transition-colors tracking-wide">About</Link>
          <Link to="/contact" className="hover:text-dark transition-colors tracking-wide">Contact</Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
           {/* Cart Icon */}
           <Link to="/cart" className="relative text-gray-600 hover:text-dark p-2 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
           </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleSidebar} className="lg:hidden text-dark p-2 -mr-2 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-dark/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}
      
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden flex flex-col`}
      >
        <div className="p-6 flex-1 overflow-y-auto">
          <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
            <span className="font-outfit font-bold text-xl text-dark">Menu</span>
            <button onClick={closeSidebar} className="text-gray-400 hover:text-dark transition-colors rounded-full p-1 hover:bg-gray-100">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-1">
            <Link to="/" className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-dark hover:bg-gray-50 rounded-lg transition-colors" onClick={closeSidebar}>
              Home
            </Link>

            {/* Categories Mobile Dropdown */}
            <div>
              <button
                onClick={toggleCategories}
                className="flex items-center justify-between px-4 py-3 text-lg font-medium text-gray-700 hover:text-dark hover:bg-gray-50 rounded-lg w-full transition-colors"
              >
                <span>Categories</span>
                <svg
                  className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
                    isCategoriesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`transition-all duration-300 ${isCategoriesOpen ? 'opacity-100 my-1' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="pl-8 pr-4 space-y-1 border-l-2 border-gray-100 ml-6 py-2 max-h-64 overflow-y-auto">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`/categories/${category.id}`}
                      className="block py-2 text-base text-gray-500 hover:text-dark transition-colors"
                      onClick={closeSidebar}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/about" className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-dark hover:bg-gray-50 rounded-lg transition-colors" onClick={closeSidebar}>
              About
            </Link>
            <Link to="/contact" className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-dark hover:bg-gray-50 rounded-lg transition-colors" onClick={closeSidebar}>
              Contact
            </Link>
            <Link to="/cart" className="flex items-center justify-between px-4 py-3 text-lg font-medium text-gray-700 hover:text-dark hover:bg-gray-50 rounded-lg transition-colors" onClick={closeSidebar}>
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
