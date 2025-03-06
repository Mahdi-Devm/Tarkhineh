import React, { useState } from 'react'
import SliderArrow from './SliderArrow'
import SliderDots from './SliderDots'
import Slide from './Slide'
import { images, texts } from '../../constants/ItemSlider'

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
      <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg shadow-lg sm:h-[400px] md:h-[500px] lg:h-[336px]">
        <SliderArrow direction="left" onClick={goToPrevious} />
        <div className="relative h-full w-full">
          {images.map((image, index) => (
            <Slide
              key={index}
              image={image}
              text={texts[index]}
              isActive={index === currentIndex}
            />
          ))}
        </div>
        <SliderArrow direction="right" onClick={goToNext} />
        <SliderDots
          totalSlides={images.length}
          currentIndex={currentIndex}
          onChange={setCurrentIndex}
        />
      </div>
    </div>
  )
}

export default SimpleSlider
