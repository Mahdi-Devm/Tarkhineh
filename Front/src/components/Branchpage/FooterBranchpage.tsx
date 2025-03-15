import { useState, useEffect } from 'react'
import { testimonials } from '../../constants/testimonials'

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    )
  }

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000)
    return () => clearInterval(autoSlide)
  }, [])

  return (
    <div className="mx-auto h-[300px] w-[350px] rounded-xl bg-gradient-to-br from-white to-[#326141] p-4 text-white shadow-2xl sm:h-[400px] sm:w-[370px] md:h-[300px] md:w-[1100px]">
      <div className="relative h-[300px] overflow-hidden rounded-lg sm:h-[400px] md:h-[300px]">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex min-w-full flex-col items-center justify-center px-4"
            >
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
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 transform rounded-full bg-[#326141] p-2 text-white shadow-lg transition-transform duration-300 hover:scale-125 hover:bg-orange-600 sm:p-1 md:p-2"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full bg-[#326141] p-2 text-white shadow-lg transition-transform duration-300 hover:scale-125 hover:bg-orange-600 sm:p-1 md:p-2"
        >
          ❯
        </button>

        <div className="mt-10 flex justify-center space-x-1 sm:mt-4 md:mt-10">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'scale-150 bg-[#326141] shadow-md'
                  : 'bg-gray-500 hover:bg-orange-400'
              } sm:h-2 sm:w-2 md:h-3 md:w-3`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSlider
