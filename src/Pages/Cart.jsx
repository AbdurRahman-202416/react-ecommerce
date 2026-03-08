import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useCartStore from '../store/useCartStore';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCartStore();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-300 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <h2 className="text-3xl font-outfit font-bold text-dark mb-4">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-8 text-center max-w-md">Looks like you haven't added anything to your cart yet. Discover our latest collections.</p>
        <Link to="/" className="bg-dark text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-800 transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl font-outfit font-bold text-dark mb-8">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items List */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 overflow-hidden">
              <div className="hidden sm:grid grid-cols-12 gap-4 p-6 bg-slate-50 border-b border-gray-100 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              <div className="divide-y divide-gray-100">
                {cart.map((item) => (
                  <div key={item.id} className="grid grid-cols-1 sm:grid-cols-12 gap-4 p-6 items-center">
                    <div className="sm:col-span-6 flex items-center gap-4">
                      <div className="w-20 h-24 shrink-0 rounded-lg overflow-hidden bg-slate-50 border border-gray-100">
                        <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <Link to={`/order/${item.id}`} className="font-medium text-dark hover:text-indigo-600 transition-colors line-clamp-2">
                          {item.title}
                        </Link>
                        {item.size && <span className="text-sm text-gray-500 mt-1">Size: {item.size}</span>}
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 text-sm font-medium mt-2 hover:text-red-600 text-left self-start flex items-center gap-1"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="sm:col-span-2 text-center font-bold text-dark hidden sm:block">
                      ৳{item.price}
                    </div>

                    <div className="sm:col-span-2 flex justify-center items-center gap-2">
                      <div className="flex items-center border border-gray-200 rounded-lg">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-dark hover:bg-gray-100 transition-colors rounded-l-lg"
                        >
                          -
                        </button>
                        <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-dark hover:bg-gray-100 transition-colors rounded-r-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="sm:col-span-2 text-right font-bold text-indigo-600">
                      <span className="sm:hidden text-gray-500 text-sm font-normal mr-2">Total:</span>
                      ৳{item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 flex justify-between items-center">
              <Link to="/" className="text-gray-600 hover:text-dark font-medium flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Continue Shopping
              </Link>
              <button 
                onClick={clearCart}
                className="text-red-500 hover:text-red-600 text-sm font-medium underline"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-gray-100 sticky top-28">
              <h3 className="text-xl font-outfit font-bold text-dark mb-6 pb-4 border-b border-gray-200">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-dark">৳{getTotalPrice()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping expected</span>
                  <span className="font-semibold text-dark">Calculated at checkout</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-8">
                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold text-dark">Total</span>
                  <span className="text-2xl font-bold text-indigo-600">৳{getTotalPrice()}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-right">VAT included where applicable</p>
              </div>

              <Link 
                to="/order/checkout" 
                className="w-full bg-dark text-white font-semibold py-4 px-6 rounded-full flex justify-center items-center gap-2 hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200"
              >
                Proceed to Checkout
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              
              <div className="mt-6 flex justify-center gap-4 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
