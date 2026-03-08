import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/pagination"; 
import "swiper/css/effect-fade";

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
            label: "Cozy Long Sleeve Flannel",
            description: "Comfort and style combined for your daily wear.",
            buttonText: "Buy Now",
            buttonLink: "/categories/1"
        },
    ];

    return (
        <div className="relative w-full pt-20 sm:pt-24 bg-white">
            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                effect="fade"
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true, bulletClass: 'swiper-custom-bullet', bulletActiveClass: 'swiper-custom-bullet-active' }} 
                className="w-full h-[60vh] sm:h-[80vh]"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <img
                                src={slide.src}
                                alt={slide.label}
                                className="w-full h-full object-cover object-center"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-dark/60 to-transparent sm:w-1/2"></div>
                            
                            <div className="absolute inset-0 flex flex-col justify-end items-center sm:items-start p-8 sm:p-16 md:p-24 text-white z-10 h-full">
                                <div className="max-w-2xl text-center sm:text-left transform translate-y-[-10%]">
                                    <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-medium tracking-widest uppercase mb-4 backdrop-blur-sm bg-white/10">New Arrival</span>
                                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-outfit font-bold mb-4 leading-tight tracking-tight">{slide.label}</h2>
                                    <p className="text-sm sm:text-lg text-gray-200 mb-8 font-light max-w-lg mx-auto sm:mx-0 leading-relaxed">{slide.description}</p>
                                    
                                    <a
                                        href={slide.buttonLink}
                                        className="inline-block px-8 py-3.5 bg-white text-dark font-semibold tracking-wide rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
                                    >
                                        {slide.buttonText}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            {/* Custom Pagination Style Overrides */}
            <style jsx>{`
                .swiper-custom-bullet {
                    display: inline-block;
                    width: 32px;
                    height: 3px;
                    background: rgba(255, 255, 255, 0.4);
                    margin: 0 4px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border-radius: 4px;
                }
                .swiper-custom-bullet-active {
                    background: #fff;
                    width: 48px;
                }
                .swiper-pagination {
                    bottom: 30px !important;
                    z-index: 20;
                }
                @media (max-width: 640px) {
                    .swiper-pagination {
                        bottom: 20px !important;
                    }
                    .swiper-custom-bullet {
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                    }
                    .swiper-custom-bullet-active {
                        width: 24px;
                        border-radius: 4px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Carousel;
