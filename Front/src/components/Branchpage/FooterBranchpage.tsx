import { useState, useEffect } from 'react'

const TestimonialsSlider = () => {
  const testimonials = [
    {
      name: 'محمد رضایی',
      text: 'واقعا از خدمات شما راضی بودم. تجربه‌ای بی‌نظیر! تحویل سریع و برخورد حرفه‌ای تیم، منو شگفت‌زده کرد. پیشنهاد می‌کنم حتماً امتحان کنید.',
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'سارا احمدی',
      text: 'پشتیبانی عالی و ارسال سریع! محصولی که سفارش داده بودم دقیقا همونی بود که می‌خواستم. حتماً دوباره از این فروشگاه خرید می‌کنم!',
      img: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      name: 'علی کریمی',
      text: 'محصولات باکیفیت و قیمت مناسب. واقعا از کیفیت محصولات راضی‌ام، حتی از چیزی که فکر می‌کردم بهتر بود. تحویل هم بی‌نظیر سریع انجام شد.',
      img: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      name: 'نسترن رضوی',
      text: 'بهترین فروشگاه آنلاین که تا حالا دیدم! طراحی سایت زیبا، روند خرید راحت و محصولات بی‌نظیر. واقعاً تجربه‌ای متفاوت بود.',
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
    const autoSlide = setInterval(nextSlide, 5000)
    return () => clearInterval(autoSlide)
  }, [])

  return (
    <div className="mx-auto h-[300px] w-[1100px] rounded-xl bg-gradient-to-br from-white to-[#326141] p-4 text-white shadow-2xl">
      <div className="relative h-[300px] overflow-hidden rounded-lg">
        {/* اسلایدها */}
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
                className="mb-2 h-24 w-24 transform rounded-full border-2 border-[#326141] shadow-lg transition-transform duration-500 hover:scale-110"
              />
              <h4 className="text-lg font-bold drop-shadow-md">
                {testimonial.name}
              </h4>
              <p className="mt-2 max-w-[700px] text-center text-base leading-relaxed text-gray-800">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 transform rounded-full bg-[#326141] p-2 text-white shadow-lg transition-transform duration-300 hover:scale-125 hover:bg-orange-600"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full bg-[#326141] p-2 text-white shadow-lg transition-transform duration-300 hover:scale-125 hover:bg-orange-600"
        >
          ❯
        </button>

        <div className="mt-10 flex justify-center space-x-1">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'scale-150 bg-[#326141] shadow-md'
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
