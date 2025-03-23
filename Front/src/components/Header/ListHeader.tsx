import { useState } from 'react'
import MenuItem from './MenuItem'
import { itemHeader } from '../../constants/itemHeader'

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
          label={item.label}
          index={index}
          path={item.path}
          activeDropdown={activeDropdown}
          onClick={handleDropdownClick}
        />
      ))}
    </div>
  )
}

export default ListHeader
