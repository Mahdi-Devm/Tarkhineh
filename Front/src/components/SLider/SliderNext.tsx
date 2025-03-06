import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa' // استفاده از آیکون‌های react-icons

// تصاویر
const images: string[] = [
  'https://i.imgur.com/Gu5Cznz.jpg', // bogliasco
  'https://i.imgur.com/idjXzVQ.jpg', // countyClare
  'https://i.imgur.com/8DYumaY.jpg', // craterRock
  'https://i.imgur.com/8IuucQZ.jpg', // giauPass
]

const SimpleSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0) // state برای نگهداری اندیس تصویر فعلی

  // تابع برای رفتن به تصویر قبلی
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    )
  }

  // تابع برای رفتن به تصویر بعدی
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    <div className="relative mx-auto flex w-full max-w-[800px] items-center justify-center">
      {/* دکمه قبلی */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 flex -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border-none bg-black/50 p-2.5 text-2xl text-white"
      >
        <FaArrowLeft />
      </button>

      {/* نمایش تصویر فعلی */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="h-auto w-full rounded-lg shadow-lg"
      />

      {/* دکمه بعدی */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 flex -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border-none bg-black/50 p-2.5 text-2xl text-white"
      >
        <FaArrowRight />
      </button>
    </div>
  )
}

export default SimpleSlider
