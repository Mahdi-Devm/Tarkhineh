import { FaAngleDown } from 'react-icons/fa6'
import { useState } from 'react'

const itemHeader: {
  [key: string]: string | { label: string; icon: React.ReactNode }
} = {
  name: 'تماس با ما',
  name1: 'درباره ما',
  name2: 'اعطای نمایندگی',
  name3: { label: 'منو', icon: <FaAngleDown /> },
  name4: { label: 'شعبه', icon: <FaAngleDown /> },
  name5: 'صفحه اصلی',
}

function ListHeader() {
  const [activeItem, setActiveItem] = useState<number | null>(null)

  return (
    <div className="flex gap-4">
      {Object.values(itemHeader).map((item, index) => (
        <div
          key={index}
          className={`flex cursor-pointer items-center pb-1 ${
            activeItem === index
              ? 'border-b-2 border-[#417F56] font-bold text-[#417F56]'
              : 'text-gray-500'
          } transition-all duration-300`}
          onClick={() => setActiveItem(index)}
        >
          {typeof item === 'object' ? (
            <div className="flex items-center justify-center">
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ) : (
            <span>{item}</span>
          )}
        </div>
      ))}
    </div>
  )
}

export default ListHeader
