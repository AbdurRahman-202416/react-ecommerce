import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Carousel from "../Component/Carousel";
import apiRequest from "../Axios";
import { Link } from "react-router-dom";
import Products from "../Component/Product";
import Footer from "../Component/Footer";
import CategoriesSlider from "../Component/CategorisSlider";

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
  const filteredProducts = categories?.slice(0, 6);

  return (
    <div>
      <Carousel/>

      {/* Categories Section */}
      <section className="py-10 bg-gray-50">
        <div className=" mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Categories</h2>
          <CategoriesSlider categories={categories} />
        </div>
      </section>


      {/* Promotional Banner */}
      <section className="w-full px-2 mb-10">
        <img
          className="w-full h-[70px] sm:h-[150px] rounded-md object-cover"
          src="https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
          alt="Promotional Banner"
        />
      </section>

      {/* Products Section */}
      <section className="py-10">
        <Products />
      </section>


    </div>
  );
};
