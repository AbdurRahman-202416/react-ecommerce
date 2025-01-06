import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import Carousel from '../Component/Carousel';
import apiRequest from '../Axios';
import { Link, useNavigate } from 'react-router-dom';
import Products from '../Component/Product';
import Footer from '../Component/Footer';

export const Home = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // Fetch categories from the API
  const getCategories = async () => {
    try {
      const response = await apiRequest.get('/categories');
      const data = response.data;
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  // Filter top 6 categories safely
  const filteredProducts = categories?.slice(0, 6);



  return (
    <div>
      <div>
        <Navbar />
        <Carousel />
      </div>
      <div className="w-full max-full mx-2 py-2 ">
        <div className="relative">
          <input
            className="w-full mx-10 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Search"
          />
          <button
            className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
            Search
          </button>
        </div>
      </div>


      <div>
        <section className="py-10">


          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts?.map((category) => (
                <Link to={`/categories/${category.id}`} key={category.id} >
                  <div
                    key={Math.random() * 10}

                    className="cursor-pointer flex flex-col items-center  rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <img
                      className=" rounded-md border border-indigo-400  w-[70%] sm:h-[250px]"
                      src={category.image}
                      alt={category.name}
                    />
                    <h3 className="text-lg font-semibold mt-2">{category.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>


        </section>
      </div>
      <div className='w-full px-2 '>
        <img className='w-full h-[70px] rounded-md sm:h-[150px]' src="https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" alt="" />
      </div>
      <div>
        <Products />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
