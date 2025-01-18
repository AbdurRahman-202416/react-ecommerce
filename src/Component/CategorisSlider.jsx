import React, { useState } from "react";
import { Link } from "react-router-dom";

const CategoriesSlider = ({ categories }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

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

  // Handle touch start
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  // Handle touch end
  const handleTouchEnd = (e) => {
    setTouchEndX(e.changedTouches[0].clientX);

    if (touchStartX && touchEndX) {
      const swipeDistance = touchStartX - touchEndX;

      // Detect swipe direction
      if (swipeDistance > 50) {
        // Swipe left
        handleNext();
      } else if (swipeDistance < -50) {
        // Swipe right
        handlePrev();
      }
    }

    // Reset touch positions
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className="relative w-full rounded-sm overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Wrapper */}
      <div
        className="grid transition-transform duration-500 ease-in-out"
        style={{
          gridTemplateColumns: `repeat(${slides.length}, 100%)`,
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="grid grid-cols-3 px-2 gap-1 h-[190px] sm:h-[300px] w-full"
          >
            {slide.map((category) => (
              <Link
                to={`/categories/${category.id}`}
                key={category.id}
                className="flex flex-col items-center border border-indigo-500 rounded-sm hover:shadow-lg transition-shadow"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full sm:h-[250px] h-[150px] object-cover rounded-sm"
                />
                <h3 className="sm:text-lg text-sm font-bold w-full py-2 border bg-gray-300 text-center text-gray-900 ">
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
        className="absolute top-[45%] left-2 transform -translate-y-1/2 bg-gray-400 text-white p-1 sm:p-2 rounded-full hover:bg-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-[45%] right-2 transform -translate-y-1/2 bg-gray-400 text-white p-1 sm:p-2 rounded-full hover:bg-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default CategoriesSlider;
