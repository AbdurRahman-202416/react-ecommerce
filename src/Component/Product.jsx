import React, { useEffect, useState } from "react";
import apiRequest from "../Axios";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";

const Products = ({ searchTerm = "" }) => {
  const [Product, setProduct] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);

  const GetProduct = async () => {
    try {
      const response = await apiRequest.get("/products");
      const data = response.data;
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetProduct();
  }, []);

  // Filter products based on search term (case-insensitive)
  const searchFilteredProducts = Product.filter((p) => 
    p.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredProducts = showAll ? searchFilteredProducts : searchFilteredProducts.slice(0, 12); 

  const handleViewAll = () => {
    setShowAll(true);
  };

  const handleAddToCart = (e, product) => {
    e.preventDefault(); // Prevent navigating to product details
    addToCart(product, 1);
    toast.success(`Added ${product.title.slice(0, 15)}... to cart!`, {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 py-16">
      <div className="flex flex-col items-center mb-12">
         <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm mb-2">Our Collection</span>
         <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-dark text-center">Featured Products</h2>
         <div className="w-16 h-1 bg-dark mt-4 rounded-full"></div>
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500 py-10 text-lg">
          No products found {searchTerm && `for "${searchTerm}"`}
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {filteredProducts?.map((product) => {
            return (
              <div key={product.id} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100 relative">
                
                {/* Discount Badge */}
                {product.discount > 0 && (
                  <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                    -{product.discount}%
                  </div>
                )}

                <Link to={`/order/${product.id}`} className="block relative overflow-hidden h-[240px] sm:h-[320px] bg-slate-50">
                  <img
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={product.images[0]}
                    alt="Product"
                    loading="lazy"
                  />
                  
                  {/* Hover Add to Cart Action */}
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    <button 
                      onClick={(e) => handleAddToCart(e, product)}
                      className="w-full bg-white text-dark font-medium py-2.5 rounded-full shadow-lg hover:bg-dark hover:text-white transition-colors flex items-center justify-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                      <span className="text-sm">Add to Cart</span>
                    </button>
                  </div>
                </Link>

                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  {/* Product Title and Category */}
                  <div className="mb-2">
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1 block">Fashion</span>
                    <Link to={`/order/${product.id}`}>
                      <h3 className="text-sm sm:text-base font-medium text-dark line-clamp-2 hover:text-indigo-600 transition-colors leading-snug">
                        {product.title}
                      </h3>
                    </Link>
                  </div>

                  <div className="mt-auto pt-3 flex items-center justify-between border-t border-gray-50">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-dark">৳{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">৳{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-emerald-500">
                      Instock
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!showAll && searchFilteredProducts.length > filteredProducts.length && (
        <div className="text-center mt-12">
          <button
            onClick={handleViewAll}
            className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-dark text-dark font-medium rounded-full hover:bg-dark hover:text-white transition-colors uppercase tracking-wide text-sm"
          >
            Load More Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
