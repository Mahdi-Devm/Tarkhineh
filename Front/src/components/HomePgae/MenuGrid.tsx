import { FC } from 'react'
import MenuItem from './MenuItem'
import { Link } from 'react-router-dom'

interface MenuGridProps {
  images: string[]
  descriptions: string[]
  isMobile: boolean
}

const MenuGrid: FC<MenuGridProps> = ({ images, descriptions, isMobile }) => {
  return (
    <div
      className={`grid  w-full justify-items-center ${
        isMobile
          ? 'grid-cols-2 gap-6'
          : 'grid-cols-2 gap-y-32 sm:grid-cols-2 md:grid-cols-4'
      }`}
    >
      {images.slice(0, isMobile ? 4 : images.length).map((img, index) => {
        return (
          <Link key={index} to={`/menu/${4 - index}`}>
            <MenuItem
              key={index}
              img={img}
              description={descriptions[index]}
              index={index}
              isMobile={isMobile}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default MenuGrid
