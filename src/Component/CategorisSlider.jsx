import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const CategoriesSlider = ({ categories }) => {
  return (
    <div className="relative w-full rounded-sm overflow-hidden">
      <Swiper
        modules={[Pagination, EffectCoverflow]}
        spaceBetween={30}
        slidesPerView={2}
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        centeredSlides={true}
        loop={true}
        className="w-full"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id} className="transform transition-all duration-500">
            <Link
              to={`/categories/${category.id}`}
              className="flex flex-col items-center border border-indigo-500 rounded-sm hover:shadow-lg transition-shadow"
            >
              <img
                src={`${category.image}`}
                alt={category.name}
                className="w-full sm:h-[250px] h-[150px] object-cover rounded-sm"
              />
              <h3 className="sm:text-lg text-sm font-bold w-full py-4 border bg-gray-300 text-center text-gray-900 mt-[-4px]">
                {category.name}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoriesSlider;
