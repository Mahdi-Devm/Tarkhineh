import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import type { SwiperRef } from 'swiper/react'
import { images, texts } from '../../constants/ItemSlider'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import './swiper-custom.css'

const SimpleSlider: React.FC = () => {
  const swiperRef = useRef<SwiperRef>(null)

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  return (
    <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden">
      <div className="h-[180px] rounded-2xl sm:h-[150px] md:h-[180px] lg:h-[350px]">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          slidesPerView={1}
          loop={true}
          className="h-full w-full rounded-lg shadow-md"
          spaceBetween={0}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <img
                  src={image}
                  alt={`Slide`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="rounded-lg bg-black/10 px-4 py-2 text-center text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition-transform duration-300 hover:scale-105 sm:text-base md:text-xl lg:text-3xl"
                  >
                    {texts[index]}
                  </motion.p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        onClick={goPrev}
        className="absolute top-1/2 left-2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-all hover:bg-black/70 sm:left-4 sm:h-10 sm:w-10"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-sm sm:text-base" />
      </button>

      <button
        onClick={goNext}
        className="absolute top-1/2 right-2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-all hover:bg-black/70 sm:right-4 sm:h-10 sm:w-10"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-sm sm:text-base" />
      </button>
    </div>
  )
}

export default SimpleSlider
