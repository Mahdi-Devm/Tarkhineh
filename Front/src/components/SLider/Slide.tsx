import React from 'react'

interface SlideProps {
  image: string
  text: string
  isActive: boolean
}

const Slide: React.FC<SlideProps> = ({ image, text, isActive }) => {
  return (
    <div
      className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
        isActive ? 'z-10 opacity-100' : 'z-0 opacity-0'
      }`}
    >
      <img
        src={image}
        alt={`Slide`}
        loading="lazy"
        className="h-full w-full object-cover"
      />
      {isActive && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 p-4 text-center text-white">
          <h2 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
            {text}
          </h2>
        </div>
      )}
    </div>
  )
}

export default Slide
