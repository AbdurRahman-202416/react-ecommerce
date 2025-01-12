import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Carousel from "../Component/Carousel";
import apiRequest from "../Axios";
import { Link } from "react-router-dom";
import Products from "../Component/Product";
import Footer from "../Component/Footer";
import CategoriesSlider from "../Component/CategorisSlider";
import banner from "../assets/banner.png";

export const Home = () => {
  const [categories, setCategories] = useState([]);

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

  // Filter top 6 categories
  const filteredProducts = categories?.slice(0, 10);

  return (
    <div>
      <Carousel />
      <div>
        <div className="flex items-center py-3 sm:py-6 justify-center ">
          <div className="flex w-full mx-2  rounded-md border border-gray-300 border-opacity-65 bg-gray-100 px-2">
            {/* Input Field */}
            <input
              type="text"
              className="flex w-full bg-transparent px-3 text-gray-700 rtl:text-right outline-none"
              placeholder="Search Product..."
            />

            {/* Divider */}
            <div className="border-l border-gray-400 border-opacity-70 my-1"></div>

            {/* Submit Button */}
            <button
              type="submit"
              className="relative rounded-full bg-transparent px-2 py-3"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="#999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-10 bg-gray-50">
        <div className=" mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Categories</h2>
          <CategoriesSlider categories={filteredProducts} />
        </div>
      </section>


      {/* Promotional Banner */}
      <section className="w-full px-1 mb-2">
        <img
          className="w-full h-[130px] sm:h-[170px] object-cover rounded-sm "
          src={banner}
          alt="Promotional Banner"
        />
      </section>

      {/* Products Section */}
      <section className="py-4">
        <Products />
      </section>
    </div>
  );
};
