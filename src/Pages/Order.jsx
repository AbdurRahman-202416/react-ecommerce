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
      if (response?.data) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  return (
    <div>
      <div className="container mx-auto py-10 px-1">
        <div className="flex py-10 flex-wrap items-center">
          {/* Image Slider */}
          <div className="w-full mx-auto py-1 sm:py-4  md:w-[60%]">
            <div className="relative">
              <img
                src={product?.images[activeImage]}
                alt="Product"
                className="w-full h-[200px] sm:h-[300px] object-cover rounded-lg"
              />
              <div className="flex justify-center mt-4">
                {product?.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="Thumbnail"
                    onClick={() => setActiveImage(index)}
                    className={`w-16 h-16 mx-2 border rounded-lg object-cover cursor-pointer ${activeImage === index
                        ? "border-blue-500"
                        : "border-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full text-white bg-gray-500 sm:w-full px-1 mt-6 md:mt-0">
            <h2 className="sm:text-2xl text-base font-bold mb-4">{product?.title}</h2>
            <p className="sm:text-xl text-base font-semibold  mr-4">
              Product Price : <strong className="text-indigo-500">৳{product?.price}</strong>
            </p>
            <TakeOrder />
            <h1 className="text-center text-xl sm:text-2xl font-bold">Product Details</h1>
            <p className="text-justify mb-6">{product?.description}</p>
            <div className="flex items-center mb-6">
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProductDetails;
