import { FC } from 'react'
import MenuItem from './MenuItem'

interface MenuGridProps {
  images: string[]
  descriptions: string[]
  isMobile: boolean
}

const MenuGrid: FC<MenuGridProps> = ({ images, descriptions, isMobile }) => {
  return (
    <div
      className={`grid ${
        isMobile
          ? 'grid-cols-2 gap-4'
          : 'grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4'
      }`}
    >
      {images.slice(0, isMobile ? 4 : images.length).map((img, index) => (
        <MenuItem
          key={index}
          img={img}
          description={descriptions[index]}
          index={index}
          isMobile={isMobile}
        />
      ))}
    </div>
  )
}

export default MenuGrid
