import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';
import { images, texts } from '../../constants/ItemSlider';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './swiper-custom.css';

const SimpleSlider: React.FC = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto overflow-hidden relative">
      <div className="h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px]">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          slidesPerView={1}
          loop={true}
          className="w-full h-full rounded-lg shadow-md"
          spaceBetween={0}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <img
                  src={image}
                  alt={`Slide`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center px-2">
                    {texts[index]}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <button 
        onClick={goPrev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-all"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-sm sm:text-base" />
      </button>
      
      <button 
        onClick={goNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-all"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-sm sm:text-base" />
      </button>
    </div>
  );
};

export default SimpleSlider;
