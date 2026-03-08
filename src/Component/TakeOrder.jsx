import React, { useState } from "react";
import apiRequest from "../Axios";
import { notifyError, notifySuccess } from "./Toster";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    product: "",
    quantity: 1,
    size: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);

      if (!formData.product || !formData.size) {
        notifyError("Please select a product and size.");
        return;
      }

      const response = await apiRequest.post("/categories", formData);
      console.log("Order response:", response.data);
      notifySuccess("Order placed successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        product: "",
        quantity: 1,
        size: "",
      });
    } catch (error) {
      console.error("Error submitting order:", error);
      notifyError("Failed to place the order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="John Doe"
            className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 text-sm focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="john@example.com"
            className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 text-sm focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            placeholder="+880 1234 567 890"
            className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 text-sm focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark transition-colors"
          />
        </div>

        {/* Quantity */}
        <div>
          <label htmlFor="quantity" className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            required
            className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 text-sm focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark transition-colors"
          />
        </div>

        {/* Size */}
        <div className="sm:col-span-2">
          <label htmlFor="size" className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
            Select Size
          </label>
          <div className="relative">
            <select
              id="size"
              name="size"
              value={formData.size}
              required
              className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 text-sm focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark transition-colors appearance-none cursor-pointer"
            >
              <option value="" disabled>
                Choose a size
              </option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="sm:col-span-2">
          <label htmlFor="address" className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
            Delivery Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            placeholder="Enter your full delivery address..."
            className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 text-sm focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark transition-colors resize-none"
            rows="3"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 pt-2">
          <button
            type="submit"
            className={`w-full bg-dark text-white font-semibold py-4 px-8 rounded-full transition-colors flex justify-center items-center gap-2 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-800"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
               <>
                 <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                 Processing...
               </>
            ) : "Place Order Manually"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
