import React from "react";

const Contact = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 py-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Contact <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We're here to help! Whether you have questions, need assistance, or
            just want to say hello, feel free to reach out to us.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Get In Touch
            </h3>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  rows="5"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="text-gray-700 space-y-6">
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-1">
                Address
              </h4>
              <p>123 E-Commerce Street,</p>
              <p>Cityville, Country 45678</p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-1">
                Phone
              </h4>
              <p>
                <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                  +1 234 567 890
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-1">
                Email
              </h4>
              <p>
                <a
                  href="mailto:support@ecommerce.com"
                  className="text-blue-600 hover:underline"
                >
                  support@ecommerce.com
                </a>
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-1">
                Working Hours
              </h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
