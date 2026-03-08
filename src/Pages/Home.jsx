import React, { useEffect, useState } from "react";
import Carousel from "../Component/Carousel";
import apiRequest from "../Axios";
import { Link } from "react-router-dom";
import Products from "../Component/Product";
import CategoriesSlider from "../Component/CategorisSlider";
import banner from "../assets/banner.png";

export const Home = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch categories from the API
  const getCategories = async () => {
    try {
      const response = await apiRequest.get("/categories");
      setCategories(response.data || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  // Filter top 10 categories
  const filteredProducts = categories?.slice(0, 10);

  return (
    <div className="bg-white min-h-screen pb-16">
      <Carousel />
      
      {/* Search Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center py-8 sm:py-12 justify-center">
          <div className="flex w-full max-w-2xl mx-auto rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 px-2 py-1 relative">
            {/* Input Field */}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex w-full bg-transparent px-6 py-3 text-gray-700 font-medium outline-none placeholder-gray-400"
              placeholder="What are you looking for?"
            />
            {/* Submit Button */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-dark text-white p-3 hover:bg-gray-800 transition-colors"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          {searchTerm && (
            <div className="text-center mt-4 text-gray-500 font-medium">
              Showing results for: <span className="text-indigo-600 font-bold">"{searchTerm}"</span>
            </div>
          )}
        </div>
      </div>

      {/* Categories Section */}
      <section className="pt-4 pb-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center mb-10">
             <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm mb-2">Discover</span>
             <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-dark text-center">Top Categories</h2>
             <div className="w-16 h-1 bg-dark mt-4 rounded-full"></div>
          </div>
          <CategoriesSlider categories={filteredProducts} />
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 py-16">
        <div className="relative rounded-2xl overflow-hidden shadow-lg group">
          <img
            className="w-full h-[180px] sm:h-[260px] md:h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
            src={banner}
            alt="Promotional Banner"
          />
          <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors duration-500"></div>
        </div>
      </section>

      {/* Products Section */}
      <section className="pb-8">
        <Products searchTerm={searchTerm} />
      </section>
    </div>
  );
};
