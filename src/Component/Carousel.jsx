
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Import pagination module
import "swiper/css"; // Import core Swiper styles
import "swiper/css/pagination"; // Import pagination styles

const Carousel = () => {
    const slides = [
        {
            src: "https://masculine.com.bd/cdn/shop/files/Black_jacket.jpg?v=1731143951",
            label: "Taffeta High Neck Jacket - Black",
            description: "High-quality, stylish jackets for every occasion.",
            buttonText: "Shop Now",
            buttonLink: "categories/3"
        },
        {
            src: "https://masculine.com.bd/cdn/shop/files/23_683c360c-53c5-4d9e-8ced-2d3063b73270.jpg?v=1728366401",
            label: "Exclusive Winter Collection",
            description: "Stay warm and fashionable with our winter wear.",
            buttonText: "Explore Collection",
            buttonLink: "categories/2"
        },
        {
            src: "https://masculine.com.bd/cdn/shop/files/Salman.jpg?v=1729709034",
            label: "Cozy Long Sleeve Flannel Shirt - Red",
            description: "Comfort and style combined for your daily wear.",
            buttonText: "Buy Now",
            buttonLink: "/categories/1"
        },
    ];

    return (
        <div className="relative w-full">
            {/* Swiper container */}
            <Swiper
                modules={[Pagination]} // Enable pagination module
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }} // Enable clickable dots
                className="carousel-container"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-[280px] sm:h-[450px] w-full">
                            <img
                                src={slide.src}
                                alt={slide.label}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white">
                                <h2 className="text-lg sm:text-4xl font-bold mb-2">{slide.label}</h2>
                                <p className="text-sm sm:text-lg">{slide.description}</p>

                                {/* Custom Stylish Button */}
                                <a
                                    href={slide.buttonLink}
                                    className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300"
                                >
                                    {slide.buttonText}
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {slides.map((_, index) => (
                    <span key={index} className="h-2 w-2 sm:w-3 sm:h-3 bg-gray-400 rounded-full"></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
