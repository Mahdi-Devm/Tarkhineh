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
    <div className="relative flex h-[500px] items-center justify-center">
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="mt-10 mb-20 text-center text-[20px] font-bold text-[rgba(53,53,53,1)] sm:mt-0 sm:mb-6 sm:text-3xl">
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
