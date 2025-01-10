import React from "react";

const AboutUs = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl mx-auto px-4 py-10">
      {/* Image Section */}
      <div className="sm:w-1/2 p-5">
        <div className="image object-center text-center">
          <img
            src="https://i.imgur.com/WbQnbas.png"
            alt="About Our Company"
            className="rounded-lg "
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase text-sm">
            About Us
          </span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            Welcome to <span className="text-indigo-600">Our Company</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We are dedicated to providing top-notch solutions tailored to your
            needs. Our mission is to deliver high-quality products and services
            that empower businesses and enrich lives. With a passion for
            innovation and a commitment to excellence, we’re here to help you
            achieve your goals.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Join us on this journey of growth and success. Together, let’s
            create a brighter future, one step at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
