import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const CategoriesSlider = ({ categories }) => {
  return (
    <div className="relative w-full py-4 group">
      <Swiper
        modules={[Pagination, EffectCoverflow, Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: -10,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        centeredSlides={true}
        loop={true}
        className="w-full pb-14 pt-4 px-10 sm:px-14"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id} className="transform transition-all duration-500">
            <Link
              to={`/categories/${category.id}`}
              className="flex flex-col group rounded-2xl overflow-hidden bg-white shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 transform group-hover:-translate-y-1 h-full"
            >
              <div className="relative overflow-hidden w-full h-[180px] sm:h-[280px]">
                <img
                  src={`${category.image}`}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/10 group-hover:bg-dark/0 transition-colors duration-300"></div>
              </div>
              <div className="p-4 sm:p-5 flex flex-col items-center justify-center bg-white border-t border-gray-100">
                <h3 className="sm:text-lg text-sm font-outfit font-bold text-dark text-center group-hover:text-indigo-600 transition-colors">
                  {category.name}
                </h3>
                <span className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Explore
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Styling */}
      <style jsx="true">{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #4f46e5 !important;
          background-color: white;
          width: 44px !important;
          height: 44px !important;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          opacity: 0;
          transition: all 0.3s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: #4f46e5;
          color: white !important;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px !important;
          font-weight: bold;
        }
        /* Reveal buttons on hover of parent group */
        .group:hover .swiper-button-next,
        .group:hover .swiper-button-prev {
          opacity: 1;
        }
        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CategoriesSlider;
