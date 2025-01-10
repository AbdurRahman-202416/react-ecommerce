import React, { useState } from "react";
import axios from "axios";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    product: "",
    quantity: 1,
    size: "", // Add size to formData
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

      const response = await axios.post("https://your-server-api.com/orders", formData);
      console.log("Order response:", response.data);
      alert("Order placed successfully!");

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
      alert("Failed to place the order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Place Your Order</h2>
      <form
        className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div className="mb-4">
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Other fields here */}

        {/* Size */}
        <div className="mb-4">
          <label htmlFor="size" className="block text-sm font-medium text-gray-700">
            Select Size
          </label>
          <select
            id="size"
            name="size"
            value={formData.size}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
        <div className="mb-4">
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            } transition duration-300`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Placing Order..." : "Submit Order"}
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
