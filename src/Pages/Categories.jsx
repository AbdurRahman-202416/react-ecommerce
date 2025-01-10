import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiRequest from "../Axios";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Products = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductsByCategory = async () => {
      try {
        setLoading(true);
        const response = await apiRequest.get(`/categories/${Number(id)}/products`);
        setProducts(response.data);
        console.log(response.data)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    getProductsByCategory();
  }, [id]);


  const [categories, setCategories] = useState([]);


  const getCategories = async () => {
    try {
      const response = await apiRequest.get('/categories');
      const data = response.data;
      if (data) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }

      // Find and set the current category based on the id parameter
      const category = data.find(cat => cat.id === Number(id));
      console.log(categories)
      setCategories(category);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container  py-10 my-10">
        <div className="text-left mb-8">

          {categories && (

            <h2 className="text-3xl shadow-2xl shadow-gray-400 sm:mx-36 text-center font-bold">
              <span className="text-blue-600">{categories?.name}</span>

            </h2>
          )}


        </div>


        <div className="grid grid-cols-2  sm:grid-cols-3 px-2 lg:grid-cols-3 gap-1">
          {products.map((product) => (
            <div
              key={product.id}
              className="  overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link to={`/order/${product.id}`}>
                <div className="relative group">
                  <div className="mx-auto w-full transform overflow-hidden   dark:bg-slate-800  duration-300 hover:scale-105 hover:shadow-lg">
                    <img
                      className="h-[250px] sm:h-[350px] w-full object-cover object-center"
                      src={product.images[0]}
                      alt="Product Image"
                    />
                    <div className="p-4">
                      <h2 className="mb-2 text-[13] sm:text-[16px] font-medium dark:text-white text-warp text-gray-900">
                        {product.title}
                      </h2>

                      <div className="flex items-center">
                        <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                          <strong>৳</strong>{product.price}
                        </p>
                        <p className="text-base  text-red-400 line-through dark:text-gray-300">
                          <strong >৳ &nbsp;300</strong> &nbsp;{product.originalPrice}
                        </p>
                        <p className="ml-auto text-[10px] sm:text-[15px]  font-semibold text-green-500">
                          20{product.discount}% off
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>

    </div>

  );
};

export default Products;
