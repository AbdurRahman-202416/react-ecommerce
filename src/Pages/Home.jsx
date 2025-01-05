import React, { useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import Carousel from '../Component/Carousel';
import apiRequest from '../Axios';
import { useNavigate } from 'react-router-dom';
import Products from '../Component/Product';

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

  const handleCategoryClick = (id) => {
    navigate(`/category/${id}`);
  };

  return (
    <div>
      <div>
        <Navbar />
        <Carousel />
      </div>
    
      <div>
        <section className="py-10">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts?.map((category) => (
                <div
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className="cursor-pointer flex flex-col items-center  rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img
                    className=" rounded-md border border-indigo-400  w-[70%] sm:h-[250px]"
                    src={category.image}
                    alt={category.name}
                  />
                  <h3 className="text-lg font-semibold mt-2">{category.name}</h3>
                </div>
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
    </div>
  );
};
