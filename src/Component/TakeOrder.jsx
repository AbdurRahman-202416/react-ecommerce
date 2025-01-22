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
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12">
      <div className="w-full max-w-3xl shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Place Your Order
        </h2>
        <form className="grid text-black grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Address */}
          <div className="sm:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              placeholder="Enter your delivery address"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            ></textarea>
          </div>

          {/* Size */}
          <div>
            <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
              Size
            </label>
            <select
              id="size"
              name="size"
              value={formData.size}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
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
          </div>

          {/* Quantity */}
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              min="1"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg transition duration-300 ${isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-700"
                }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
