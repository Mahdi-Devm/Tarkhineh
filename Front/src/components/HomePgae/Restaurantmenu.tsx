import { useState, useEffect } from 'react'
import { descriptions, images } from '../../constants/ItemMenuRes'
import MenuGrid from './MenuGrid'

const RestaurantMenu: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 640)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="my-10 relative flex  items-center justify-center">
      <div className="relative w-full z-10 flex flex-col items-center">
        <h1 className=" w-full mb-30 text-center text-[20px] font-bold text-[rgba(53,53,53,1)] sm:mt-0 sm:mb-31 sm:border-b-amber-500 sm:text-3xl">
          منوی رستوران
        </h1>

        <MenuGrid
          images={images}
          descriptions={descriptions}
          isMobile={isMobile}
        />
      </div>
    </div>
  )
}

export default RestaurantMenu
