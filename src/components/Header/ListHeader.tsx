import { useState } from 'react'
import MenuItem from './MenuItem'
import { FaAngleDown } from 'react-icons/fa6'

const itemHeader = {
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
    <div className="flex flex-col gap-4 md:flex-row">
      {Object.entries(itemHeader).map(([key, item], index) => (
        <MenuItem
          key={key}
          label={item}
          index={index}
          activeDropdown={activeDropdown}
          onClick={handleDropdownClick}
        />
      ))}
    </div>
  )
}

export default ListHeader
