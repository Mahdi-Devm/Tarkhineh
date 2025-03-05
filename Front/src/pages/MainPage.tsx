import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: (
      <button className="slick-prev absolute top-1/2 left-0 -translate-y-1/2 transform text-white">
        <FiChevronLeft size={24} />
      </button>
    ),
    nextArrow: (
      <button className="slick-next absolute top-1/2 right-0 -translate-y-1/2 transform text-white">
        <FiChevronRight size={24} />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="slider-container relative mx-auto my-10 h-[400px] w-full px-4">
      <h2 className="mb-6 text-center text-2xl font-semibold">
        Swiper with React-Slick
      </h2>
      <Slider {...settings}>
        <div className="swiper-slide">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1552863045-991883e6f59b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80)',
            }}
          />
        </div>
        <div className="swiper-slide">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1505294399615-2479253a4990?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80)',
            }}
          />
        </div>
        <div className="swiper-slide">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1552863045-991883e6f59b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80)',
            }}
          />
        </div>
        <div className="swiper-slide">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1505294399615-2479253a4990?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80)',
            }}
          />
        </div>
      </Slider>
    </div>
  )
}

export default SimpleSlider
