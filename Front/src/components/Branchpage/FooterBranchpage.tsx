import { useState, useEffect } from 'react'

const TestimonialsSlider = () => {
  const testimonials = [
    {
      name: 'محمد رضایی',
      text: 'واقعا از خدمات شما راضی بودم. تجربه‌ای بی‌نظیر!',
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'سارا احمدی',
      text: 'پشتیبانی عالی و ارسال سریع! حتماً دوباره خرید می‌کنم.',
      img: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      name: 'علی کریمی',
      text: 'محصولات باکیفیت و قیمت مناسب. عالی بود!',
      img: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      name: 'نسترن رضوی',
      text: 'بهترین فروشگاه آنلاین که دیدم، همه‌چیز عالی بود!',
      img: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
  ]

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
    const autoSlide = setInterval(nextSlide, 4000)
    return () => clearInterval(autoSlide)
  }, [])

  return (
    <div className="mx-auto max-w-4xl rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 p-6 text-white shadow-2xl">
      <h2 className="mb-6 text-center text-3xl font-bold text-orange-400">
        نظرات کاربران
      </h2>

      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex min-w-full flex-col items-center justify-center p-6"
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="mb-4 h-28 w-28 transform rounded-full border-4 border-orange-500 shadow-lg transition-transform duration-500 hover:scale-110"
              />
              <h4 className="text-2xl font-bold">{testimonial.name}</h4>
              <p className="mt-3 max-w-md text-center text-lg leading-relaxed text-gray-300">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 transform rounded-full bg-orange-500 p-3 text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-orange-600"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full bg-orange-500 p-3 text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-orange-600"
        >
          ❯
        </button>

        <div className="mt-4 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'scale-125 bg-orange-500'
                  : 'bg-gray-500 hover:bg-orange-400'
              }`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSlider
