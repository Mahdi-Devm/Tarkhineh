import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const images: string[] = [
  'https://i.imgur.com/Gu5Cznz.jpg',
  'https://i.imgur.com/idjXzVQ.jpg',
  'https://i.imgur.com/8DYumaY.jpg',
  'https://i.imgur.com/8IuucQZ.jpg',
]

const SimpleSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    <div className="relative mx-auto flex w-full max-w-[1400px] flex-col items-center justify-center">
      <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden rounded-lg shadow-lg">
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 z-10 flex -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border-none bg-black/50 p-3 text-2xl text-white transition-all hover:bg-black/70"
        >
          <FaArrowLeft />
        </button>

        <div className="relative h-full w-full">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 z-10 flex -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border-none bg-black/50 p-3 text-2xl text-white transition-all hover:bg-black/70"
        >
          <FaArrowRight />
        </button>

        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 transform space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 cursor-pointer rounded-full transition-all ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SimpleSlider
