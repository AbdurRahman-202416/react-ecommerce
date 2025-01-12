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
    <div className="container bg-white mx-auto py-2 ">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Place Your Order
      </h2>
      <form
        className=" rounded-sm p-2 w-full mx-auto grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-6"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>

        {/* Address */}
        <div className="sm:col-span-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            rows="3"
          ></textarea>
        </div>

    

        {/* Size */}
        <div>
          <label htmlFor="size" className="block text-sm font-medium text-gray-700">
            Size
          </label>
          <select
            id="size"
            name="size"
            value={formData.size}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
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
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
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
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-2 ">
          <button
            type="submit"
            className={`w-full bg-blue-600 text-white py-3 px-4 rounded-lg ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
              } transition duration-300`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Placing Order..." : "Submit Order"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
