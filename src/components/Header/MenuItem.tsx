import { useState } from 'react'
import Dropdown from './Dropdown'

type ItemHeader = {
  label: string
  icon: React.ReactNode
  dropdownItems?: string[]
}

type MenuItemProps = {
  label: string | ItemHeader
  index: number
  activeDropdown: number | null
  onClick: (index: number) => void
}

const MenuItem = ({ label, index, activeDropdown, onClick }: MenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (index: number) => {
    onClick(index)
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={`relative flex cursor-pointer items-center pb-1 transition-all duration-300 ${
        activeDropdown === index
          ? 'border-b-2 border-[#417F56] font-semibold text-[#417F56]'
          : 'text-gray-500'
      }`}
      onClick={() => handleClick(index)}
    >
      {typeof label === 'object' ? (
        <Dropdown
          label={label.label}
          icon={label.icon}
          dropdownItems={label.dropdownItems}
          activeDropdown={activeDropdown}
          index={index}
          onClick={onClick}
        />
      ) : (
        <span className="text-xl transition-all duration-300 hover:scale-105 hover:text-[#417F56]">
          {label}
        </span>
      )}
      {isOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default MenuItem
