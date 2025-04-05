import { FC } from 'react'
import { motion } from 'framer-motion'

interface MenuItemProps {
  img: string
  description: string
  index: number
  isMobile: boolean
}

const MenuItem: FC<MenuItemProps> = ({ img, description, index, isMobile }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`relative ${
        isMobile ? 'mb-18 flex h-[130px] w-[140px]' : 'flex h-[220px] w-[220px]'
      } flex-col items-center justify-center rounded-lg bg-[#417F56] shadow-xl`}
    >
      <img
        src={img}
        alt={`Food item ${index + 1}`}
        className={`absolute left-1/2 z-20  -translate-x-1/2 transform object-cover transition-all duration-300 ${
          isMobile
            ? index === 0
              ? '-top-25 w-[140px]'
              : '-top-15 w-[140px]'
            : index === 0
              ? '-top-40 w-[260px]'
              : '-top-25 w-[260px]'
        }`}
      />
      <div
        className={`absolute -bottom-6 ${
          isMobile
            ? 'h-[48px] w-[120px] text-[16px]'
            : 'h-[48px] w-[180px] text-[20px]'
        } rounded-[4px] bg-[#F9F9F9] p-[8px] text-center font-semibold text-gray-700 shadow-md`}
      >
        {description}
      </div>
    </motion.div>
  )
}

export default MenuItem
