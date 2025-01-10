import React, { useState, useEffect } from "react";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            src: "https://masculine.com.bd/cdn/shop/files/Black_jacket.jpg?v=1731143951",
            label: "Taffeta High Neck Jacket - Black",
            description: "High-quality, stylish jackets for every occasion.",
        },
        {
            src: "https://masculine.com.bd/cdn/shop/files/23_683c360c-53c5-4d9e-8ced-2d3063b73270.jpg?v=1728366401",
            label: "Exclusive Winter Collection",
            description: "Stay warm and fashionable with our winter wear.",
        },
        {
            src: "https://masculine.com.bd/cdn/shop/files/Salman.jpg?v=1729709034",
            label: "Cozy Long Sleeve Flannel Shirt - Red",
            description: "Comfort and style combined for your daily wear.",
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

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval); // Clear interval on unmount
    }, [slides.length]);

    return (
        <div className="relative w-full">
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-8 ${activeIndex === index ? "bg-white" : "bg-gray-400"
                            } rounded-full`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>

            {/* Slides */}
            <div className="relative h-[280px] sm:h-[450px] overflow-hidden w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ${activeIndex === index ? "brightness-80 z-10" : "opacity-0 z-0"
                            }`}
                    >
                        {/* Image */}
                        <img
                            src={slide.src}
                            alt={slide.label}
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay Text */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
                            <h2 className="text-2xl sm:text-4xl font-bold mb-2">{slide.label}</h2>
                            <p className="text-sm sm:text-lg">{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            {/* <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 z-20"
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
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 z-20"
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
            </button> */}
        </div>
    );
};

export default Carousel;
