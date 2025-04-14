import { useRef } from 'react'
import { testimonials } from '../../constants/testimonials'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

// Not directly importing CSS to avoid TypeScript issues
import './swiper-custom.css'

const TestimonialsSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <div className="mx-auto h-[300px] w-[350px] rounded-xl bg-gradient-to-br from-white to-[#326141] p-4 text-white shadow-2xl sm:h-[400px] sm:w-[370px] md:h-[300px] md:w-[1100px]">
      <div className="relative h-[300px] overflow-hidden rounded-lg sm:h-[400px] md:h-[300px]">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            bulletClass: 'swiper-pagination-bullet',
          }}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="h-full w-full testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full flex-col items-center justify-center px-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="mb-2 h-24 w-24 transform rounded-full border-2 border-[#326141] shadow-lg transition-transform duration-500 hover:scale-110 sm:h-16 sm:w-16 md:h-24 md:w-24"
                />
                <h4 className="text-lg font-bold drop-shadow-md sm:text-base md:text-lg">
                  {testimonial.name}
                </h4>
                <p className="mt-2 max-w-[700px] text-center text-base leading-relaxed text-gray-800 sm:max-w-[250px] sm:text-sm md:max-w-[700px] md:text-base">
                  "{testimonial.text}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev absolute top-1/2 left-2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-[#326141] p-2 text-white shadow-lg transition-transform duration-300 hover:bg-[#1d3926] sm:p-1 md:p-2">
          ❮
        </div>
        <div className="swiper-button-next absolute top-1/2 right-2 z-10 -translate-y-1/2 transform cursor-pointer rounded-full bg-[#326141] p-2 text-white shadow-lg transition-transform duration-300 hover:bg-[#1d3926] sm:p-1 md:p-2">
          ❯
        </div>

        <div className="swiper-pagination mt-5 flex justify-center space-x-1 sm:mt-4 md:mt-10"></div>
      </div>
    </div>
  )
}

export default TestimonialsSlider
