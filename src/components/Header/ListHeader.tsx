import { FaAngleDown } from 'react-icons/fa6'
import { useState } from 'react'

type ItemHeader = {
  label: string
  icon: React.ReactNode
  dropdownItems?: string[]
}

const itemHeader: {
  name: string
  name1: string
  name2: string
  name3: ItemHeader
  name4: ItemHeader
  name5: string
} = {
  name: 'تماس با ما',
  name1: 'درباره ما',
  name2: 'اعطای نمایندگی',
  name3: {
    label: 'منو',
    icon: <FaAngleDown />,
    dropdownItems: ['آیتم ۱', 'آیتم ۲', 'آیتم ۳'],
  },
  name4: {
    label: 'شعبه',
    icon: <FaAngleDown />,
    dropdownItems: ['شعبه ۱', 'شعبه ۲'],
  },
  name5: 'صفحه اصلی',
}

function ListHeader() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)

  const handleDropdownClick = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  return (
    <div className="flex gap-4">
      {Object.entries(itemHeader).map(([key, item], index) => (
        <div
          key={key}
          className={`relative flex cursor-pointer items-center pb-1 transition-all duration-300 ${
            activeDropdown === index
              ? 'border-b-2 border-[#417F56] font-semibold text-[#417F56]'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveDropdown(index)}
        >
          {typeof item === 'object' ? (
            <div className="flex items-center justify-center space-x-2">
              <div
                className={`ml-2 transition-all ${
                  activeDropdown === index ? 'rotate-180' : ''
                }`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleDropdownClick(index)
                }}
              >
                {item.icon}
              </div>
              <span className="text-xl transition-all duration-300 hover:scale-105 hover:text-[#417F56]">
                {item.label}
              </span>

              {activeDropdown === index && item.dropdownItems && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                  {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                    <div
                      key={dropdownIndex}
                      className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-[#417F56] hover:text-white"
                    >
                      {dropdownItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <span
              className={`text-xl transition-all duration-300 hover:scale-105 hover:text-[#417F56]`}
            >
              {item}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

export default ListHeader
