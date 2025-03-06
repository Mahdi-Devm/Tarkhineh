import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface SliderArrowProps {
  direction: 'left' | 'right'
  onClick: () => void
}

const SliderArrow: React.FC<SliderArrowProps> = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 ${
        direction === 'left' ? 'left-2 sm:left-4' : 'right-2 sm:right-4'
      } z-20 flex -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border-none bg-black/50 p-2 text-xl text-white transition-all hover:bg-black/70 sm:p-3 sm:text-2xl`}
    >
      {direction === 'left' ? <FaArrowLeft /> : <FaArrowRight />}
    </button>
  )
}

export default SliderArrow
