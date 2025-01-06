import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiRequest from "../Axios";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import TakeOrder from "../Component/TakeOrder";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const fetchProductDetails = async () => {
    try {
      const response = await apiRequest.get(`/products/${Number(id)}`);
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
   <div>
    <Navbar/>
     <div className="container mx-auto py-10 px-4">
      <div className="flex py-10 flex-wrap items-center">
        {/* Image Slider */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <img
              src={product?.images[activeImage]}
              alt="Product"
              className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg"
            />
            <div className="flex justify-center mt-4">
              {product?.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Thumbnail"
                  onClick={() => setActiveImage(index)}
                  className={`w-16 h-16 mx-2 border rounded-lg object-cover cursor-pointer ${
                    activeImage === index
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 px-4 mt-6 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
          <TakeOrder/>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="flex items-center mb-6">
            <p className="text-xl font-semibold text-gray-900 mr-4">
              ${product.price}
            </p>
            <p className="text-base font-medium text-gray-500 line-through">
              $25.00
            </p>
            <p className="ml-4 text-base font-medium text-green-500">
              20% off
            </p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  
    
    <Footer/>
   </div>
   
  );
};

export default ProductDetails;
