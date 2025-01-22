import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiRequest from "../Axios";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";

const Products = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products by category
    const getProductsByCategory = async () => {
      try {
        setLoading(true);
        const response = await apiRequest.get(`/categories/${Number(id)}/products`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    // Fetch all categories and find the current one
    const getCategories = async () => {
      try {
        const response = await apiRequest.get('/categories');
        const data = response.data;
        const category = data.find((cat) => cat.id === Number(id));
        setCategories(category);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getProductsByCategory();
    getCategories();
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="container py-10 my-10">
        <div className="text-center mb-8">
          {categories && (
            <h2 className="text-3xl shadow-2xl shadow-gray-400 sm:mx-36 text-center font-bold">
              <span className="text-blue-600">{categories?.name}</span>
            </h2>
          )}
        </div>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 px-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => {
              const isLargeItem = index % 5 === 4; // Determine if the product spans two columns
              return (
                <div
                  key={product.id}
                  className={`${
                    isLargeItem ? "col-span-2 sm:col-span-2" : "col-span-1"
                  } overflow-hidden hover:shadow-lg transition-shadow`}
                >
                  <Link to={`/order/${product.id}`}>
                    <div className="relative group">
                      <div className="mx-auto w-full transform overflow-hidden dark:bg-slate-800 duration-300 hover:scale-105 hover:shadow-lg">
                        <img
                          className={`${
                            isLargeItem
                              ? "h-[120px] sm:h-[350px]"
                              : "h-[250px] sm:h-[350px]"
                          } w-full object-cover object-center`}
                          src={product.images[0]}
                          alt="Product"
                        />
                        <div className="p-4">
                          <h2 className="mb-2 text-[13px] sm:text-[16px] font-medium dark:text-white text-gray-900">
                            {product.title}
                          </h2>
                          <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                              <strong>৳</strong>{product.price}
                            </p>
                            <p className="text-base text-red-400 line-through dark:text-gray-300">
                              <strong>৳</strong> {product.originalPrice}
                            </p>
                            <p className="ml-auto text-[10px] sm:text-[15px] font-semibold text-green-500">
                              {product.discount}% off
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
