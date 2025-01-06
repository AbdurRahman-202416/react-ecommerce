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

  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div className="container  py-10 my-10">
      <div className=" text-left mb-8">
        <h2 className="text-3xl text-left font-bold">
          Products in <span className="text-blue-600">Category {id}</span>
          <hr className="bg-gray-500 py-1 rounded-xl px-12" />
        </h2>
      </div>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-2  sm:grid-cols-3 px-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <Link to={`/order/${product.id}`}>
                <div className="relative group">
                  <div className="mx-auto w-full transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                    <img
                      className="h-[200px] sm:h-[300px] w-full object-cover object-center"
                      src={product.images[0]}
                      alt="Product Image"
                    />
                    <div className="p-4">
                      <h2 className="mb-2 text-[13] sm:text-[16px] font-medium dark:text-white text-nowrap text-gray-900">
                        {product.title}
                      </h2>
                      <div className="flex items-center">
                        <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer/>
    </div>
   
  );
};

export default Products;
