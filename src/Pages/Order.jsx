import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import apiRequest from "../Axios";
import TakeOrder from "../Component/TakeOrder";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const addToCart = useCartStore((state) => state.addToCart);

  const fetchProductDetails = async () => {
    try {
      setIsLoading(true);
      const response = await apiRequest.get(`/products/${Number(id)}`);
      setProduct(response.data);
      if (response?.data) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, 1);
      toast.success(`${product.title.slice(0, 15)}... added to cart!`, {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-white flex justify-center items-center">
        <div className="animate-pulse flex flex-col items-center">
           <div className="w-12 h-12 border-4 border-gray-200 border-t-dark rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex text-sm text-gray-500 mb-8 font-medium">
          <Link to="/" className="hover:text-dark transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/" className="hover:text-dark transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-dark truncate max-w-[200px]">{product?.title}</span>
        </nav>

        <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
          {/* Image Slider */}
          <div className="w-full md:w-1/2">
            <div className="sticky top-28">
              <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-gray-100 aspect-[4/5] sm:aspect-square md:aspect-[4/5] lg:aspect-square mb-4">
                <img
                  src={product?.images[activeImage]}
                  alt="Product"
                  className="w-full h-full object-cover object-center"
                />
                {product?.discount > 0 && (
                   <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider shadow-sm">
                     -{product.discount}% Sale
                   </div>
                )}
              </div>
              
              {/* Product Gallery Thumbnails */}
              {product?.images?.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative flex-shrink-0 w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImage === index
                          ? "border-dark shadow-md"
                          : "border-transparent opacity-60 hover:opacity-100 bg-slate-50"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 flex flex-col">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-dark mb-4 leading-tight">
              {product?.title}
            </h1>
            
            <div className="flex items-end gap-3 mb-6 pb-6 border-b border-gray-100">
              <span className="text-3xl font-bold text-dark">৳{product?.price}</span>
              {product?.originalPrice && (
                <span className="text-lg text-gray-400 line-through mb-1">৳{product.originalPrice}</span>
              )}
            </div>

            <div className="prose prose-sm sm:prose-base text-gray-600 mb-8 max-w-none">
              <p className="leading-relaxed">{product?.description}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-white border-2 border-dark text-dark font-bold py-4 px-8 rounded-full hover:bg-dark hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add to Cart
              </button>
            </div>
            
            <div className="bg-slate-50 border border-gray-100 rounded-2xl p-6 sm:p-8 mb-8">
               <h3 className="font-outfit font-bold text-dark text-lg mb-4">Order Details</h3>
               <TakeOrder />
            </div>

            {/* Additional Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
               <div className="flex items-start gap-4 p-4 rounded-xl bg-green-50/50 border border-green-100">
                 <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                   </svg>
                 </div>
                 <div>
                   <h4 className="font-semibold text-dark text-sm">Authentic Product</h4>
                   <p className="text-xs text-gray-500 mt-1">100% genuine guaranteed</p>
                 </div>
               </div>
               
               <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                     <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                     <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1.121a2 2 0 011.586-1.961l1.62-.324A3 3 0 0016 9.65V7a1 1 0 00-1-1H3z" />
                   </svg>
                 </div>
                 <div>
                   <h4 className="font-semibold text-dark text-sm">Fast Delivery</h4>
                   <p className="text-xs text-gray-500 mt-1">Quick shipping nationwide</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
