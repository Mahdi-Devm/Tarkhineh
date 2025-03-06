import React from 'react'

interface SliderDotsProps {
  totalSlides: number
  currentIndex: number
  onChange: (index: number) => void
}

const SliderDots: React.FC<SliderDotsProps> = ({
  totalSlides,
  currentIndex,
  onChange,
}) => {
  return (
    <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 transform space-x-2 sm:bottom-4">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          onClick={() => onChange(index)}
          className={`h-2 w-2 cursor-pointer rounded-full transition-all sm:h-3 sm:w-3 ${
            index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export default SliderDots
