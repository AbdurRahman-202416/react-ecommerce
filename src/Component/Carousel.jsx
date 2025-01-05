import React, { useState } from "react";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            src: "https://masculine.com.bd/cdn/shop/files/Black_jacket.jpg?v=1731143951",
            label: "Taffeta High Neck Jacket - Black",
            description: "Some representative placeholder content for the first slide.",
        },
        {
            src: "https://masculine.com.bd/cdn/shop/files/23_683c360c-53c5-4d9e-8ced-2d3063b73270.jpg?v=1728366401",
            label: "Second slide label",
            description:
                "Some representative placeholder content for the second slide.",
        },
        {
            src: "https://masculine.com.bd/cdn/shop/files/Salman.jpg?v=1729709034",
            label: "Cozy Long Sleeve Flannel Shirt - Red",
            description: "Some representative placeholder content for the third slide.",
        },
    ];

    const handlePrev = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative   w-full">
            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-8 ${activeIndex === index ? "bg-white" : "bg-gray-500"
                            } rounded-full`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>

            {/* Carousel Items */}
            <div className="relative sm:h-[500px] transition-all duration-300 h-[300px] overflow-hidden w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`${activeIndex === index ? "block" : "hidden"
                            } w-full transition-transform duration-700 ease-in-out`}
                    >
                        <img
                            src={slide.src}
                            alt={slide.label}
                            className="block w-full "
                        />
                        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center text-white">
                            <h5 className="text-lg font-semibold">{slide.label}</h5>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Carousel Controls */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
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
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
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

export default Carousel;
