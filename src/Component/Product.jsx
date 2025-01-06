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
    <div className="container mx-auto py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          Our <span className="text-blue-600">Products</span>
          <hr className="bg-gray-500 py-1 rounded-xl px-12" />
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 px-2 lg:grid-cols-3 gap-1">
        {filteredProducts?.map((product) => (
          <div
            key={product.id}
            className="  overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Link to={`/order/${product.id}`}>
              <div className="relative group">
                <div className="mx-auto w-full transform overflow-hidden   dark:bg-slate-800  duration-300 hover:scale-105 hover:shadow-lg">
                  <img
                    className="h-[200px] sm:h-[300px] w-full object-cover object-center"
                    src={product.images[0]}
                    alt="Product Image"
                  />
                  <div className="p-4">
                    <h2 className="mb-2 text-[13] sm:text-[16px] font-medium dark:text-white text-warp text-gray-900">
                      {product.title}
                    </h2>

                    <div className="flex items-center">
                      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                        ${product.price}
                      </p>
                      <p className="text-base font-medium text-gray-500 line-through dark:text-gray-300">
                        ${product.originalPrice}
                      </p>
                      <p className="ml-auto text-base font-medium text-green-500">
                        {product.discount}% off
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
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
