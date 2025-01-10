import React, { useState } from "react";
import { Link } from "react-router-dom";

const CategoriesSlider = ({ categories }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Group categories into slides of 3
    const slides = [];
    for (let i = 0; i < categories?.length; i += 3) {
        slides.push(categories.slice(i, i + 3));
    }

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
    return (
        <div className="relative w-full overflow-hidden">
          {/* Slides Wrapper */}
          <div
            className="grid transition-transform duration-500 ease-in-out"
            style={{
              gridTemplateColumns: `repeat(${slides.length}, 100%)`,
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="grid grid-cols-3 gap-1 px-2 w-full">
                {slide.map((category) => (
                  <Link
                    to={`/categories/${category.id}`} 
                    key={category.id}
                    className="flex flex-col items-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-[55%] h-[80px] sm:h-[150px] object-cover rounded-md"
                    />
                    <h3 className="mt-2 text-lg font-semibold text-center">
                      {category.name}
                    </h3>
                  </Link>
                ))}
              </div>
            ))}
          </div>
      
          {/* Controls */}
          <button
            onClick={handlePrev}
            className="absolute top-2/4 left-4 transform -translate-y-1/2 bg-gray-400 text-white p-1 sm:p-2 rounded-full hover:bg-gray-700"
          >
            &larr;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-2/4 right-4 transform -translate-y-1/2 bg-gray-400 text-white p-1 sm:p-2 rounded-full hover:bg-gray-700"
          >
            &rarr;
          </button>
        </div>
      );
};

export default CategoriesSlider;
