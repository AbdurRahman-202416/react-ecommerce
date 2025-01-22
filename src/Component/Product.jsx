import React, { useEffect, useState } from "react";
import apiRequest from "../Axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [Product, setProduct] = useState([]);
  const [showAll, setShowAll] = useState(false); // To manage the visibility of all products

  const GetProduct = async () => {
    try {
      const response = await apiRequest.get("/products");
      const data = response.data;
      if(data){
        window.scrollTo({
          top: 2,
          behavior: 'smooth',
        });
      }
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetProduct();
  }, []);

  const filteredProducts = showAll ? Product : Product.slice(0, 18); // If showAll is true, show all products

  const handleViewAll = () => {
    setShowAll(true); // Show all products when the button is clicked
  };

  return (
    <div className="container mx-auto pt-2">
      <div className="text-center">
        <h2 className="text-3xl shadow-md shadow-gray-300 py-2 sm:mx-36 text-center font-bold">
          Our <span className="text-blue-600">Products</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 px-2 lg:grid-cols-3 gap-2">
        {filteredProducts?.map((product, index) => {
          // Determine the column span and height based on the `2 2 1` pattern
          const isLargeItem = index % 5 === 4; // 5th, 10th, 15th, etc.

          return (
            <div
              key={product.id}
              className={`${
                isLargeItem
                  ? "col-span-2 sm:col-span-2"
                  : "col-span-1 sm:col-span-1"
              } overflow-hidden hover:shadow-lg transition-shadow`}
            >
              <Link to={`/order/${product.id}`}>
                <div className="relative py-2 group">
                  <div className="mx-auto w-full transform overflow-hidden dark:bg-slate-800 duration-300 hover:scale-105 hover:shadow-lg">
                    <img
                      className={`${
                        isLargeItem
                          ? "h-[200px] sm:h-[350px]"
                          : "h-[250px] sm:h-[350px]"
                      } w-full object-fill object-center`}
                      src={product.images[0]}
                      alt="Product Image"
                    />
                    <div className="p-4">
                      <h2 className="mb-2 text-[13] sm:text-[16px] font-medium dark:text-white text-warp text-gray-900">
                        {product.title}
                      </h2>
                      <p className="text-[11px] sm:text-[15px] font-semibold text-gray-500">
                        Available Size: S, M, L, XL, XXL. {product.size}
                      </p>
                      <div className="flex items-center">
                        <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                          <strong>৳</strong>
                          {product.price}
                        </p>
                        <p className="text-base text-red-400 line-through dark:text-gray-300">
                          <strong>৳</strong>&nbsp;{product.originalPrice}
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

      {/* Show View All Products button only if not showing all products */}
      {!showAll && (
        <div className="text-center mt-10">
          <button
            onClick={handleViewAll}
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            View All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
