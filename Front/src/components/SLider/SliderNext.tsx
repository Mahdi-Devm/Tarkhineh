import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const images: string[] = [
  'https://s3-alpha-sig.figma.com/img/5bed/659e/53a6ec15fe6e2b7e0720ac84c1398215?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KJ29g-YhTqSZDRWSKRPq~RhWtdMric4xS~L1OqBIOcap~H9icOMzTiGCjHgth3nPKv6Uzb4Q5F~65o4SI5-3DPlTgb8IXWfd7EO39VCz5GqDGBLA4~RpHT8ZD23AjJ7Nl8YXVaW4AdmCtk~FovQU~auuyNhNpj5r1ttbgSwp-XoeMyWy07GBztTOMac9rJOV3501mi~RCBsuWfUZssC3M7jQNTUO9Rl07yxvKqAHf6Pk9NsLWbJMIsWeKQl9wz5HFR2~hXYLbB4Cwxvt1yuXKDlf0YDUQAJcI-pKhPapr~btxXgYsoh5zhUE27fW1cOhg9BZu42TrPNvca1kwtK~Og__',
  'https://s3-alpha-sig.figma.com/img/e373/a5bb/739135ae71a692fcff8ef5bd2e9bc39e?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OCem64Ef~AvRGq-jRT-9M9pillUHTiw6FXz81pN2P~FkiGxdtOfqLiYkLFIDNcoGdivnm98O4qpfIj65qtjtpyT8mlk3O89OiclU4Ab5-h0uNsfJA7xbCFhNwpLGJwtTH0N4M1u6TG0BJN306pjqyUTHlVbsYUhMmG3CiNSxnO~Q5mDIK6pxYDtyqB1O6BJy9XyBsHb8-syOvs8hLqsgyD3aSmTu4zfjzU58n4YBhXvlyaoAoGt9ejYbC3Z8vkCzof5ukvMvPzN8kOIvDkPIvf80eMXaaKvOCDILdOtSrRouGrth8GuhyoBXPmhnnWS3lwgR7SxbG134GbY-HKLAFg__',
  'https://s3-alpha-sig.figma.com/img/c0a6/3243/23879f9f8eb72cd3ec37eb55f5c078b5?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AKWx8DnUn7PB8XQgtG3v-o0t8-aXxCDmCQjcPa9lqHpl348qD4KHqN2CsBbmjtCmvMRnO1WCsqze7~jWrP92st2oTsukrQwubWAt3o7gzpIUf86727aD4atOfFf7qD6xTxUgfc26c3S28sF9NbNMVcO1xWILHXGF6-BRasNQ~BYeA62-i6inUPvdCSDqhCBjU6ZXxSedosjx4zZfRU9SlzWXb5SfD8e54DJYyn6p-yBzvmSGLdoTav-ALb0dQleJJ0olx-evgebqL3D9arKilKmsUUBo6MV3iC0gR5gpyg0CDXrTffgAYSt6GLVUrzqEnWouvQutHharD7gF6xK0Mw__',
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
      <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg shadow-lg sm:h-[400px] md:h-[500px] lg:h-[336px]">
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-2 z-10 flex -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border-none bg-black/50 p-2 text-xl text-white transition-all hover:bg-black/70 sm:left-4 sm:p-3 sm:text-2xl"
        >
          <FaArrowLeft />
        </button>

        <div className="relative h-full w-full">
          {images.map((image, index) => (
            <div key={index} className="relative h-full w-full">
              <img
                src={image}
                alt={`Slide ${index}`}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
              {index === currentIndex && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 p-4 text-center text-white">
                  <h2 className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
                    متن دلخواه شما
                  </h2>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={goToNext}
          className="absolute top-1/2 right-2 z-10 flex -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border-none bg-black/50 p-2 text-xl text-white transition-all hover:bg-black/70 sm:right-4 sm:p-3 sm:text-2xl"
        >
          <FaArrowRight />
        </button>

        <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 transform space-x-2 sm:bottom-4">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 cursor-pointer rounded-full transition-all sm:h-3 sm:w-3 ${
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
