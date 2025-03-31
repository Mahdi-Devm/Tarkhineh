import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Dropdown from './Dropdown'

type ItemHeader = {
  label: string
  icon: React.ReactNode
  dropdownItems?: string[]
}

type MenuItemProps = {
  label: string | ItemHeader
  index: number
  path: string
  activeDropdown: number | null
  onClick: (index: number) => void
}
const MenuItem = ({
  label,
  index,
  path,
  activeDropdown,
  onClick,
}: MenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = (index: number) => {
    onClick(index)
    setIsOpen(!isOpen)
    navigate(path)
  }

  const isActive = location.pathname === path

  const isItemHeader = (label: string | ItemHeader): label is ItemHeader => {
    return (
      typeof label === 'object' &&
      label !== null &&
      'dropdownItems' in label &&
      Array.isArray(label.dropdownItems)
    )
  }

  const hasDropdown =
    typeof label === 'object' &&
    label !== null &&
    'dropdownItems' in label &&
    Array.isArray(label.dropdownItems) &&
    label.dropdownItems.length > 0

  return (
    <div
      className={`relative flex cursor-pointer flex-col pb-2 sm:flex-row sm:items-center ${
        isActive
          ? 'border-b-1 border-[#417F56] text-[24px] font-semibold text-[#417F56]'
          : 'text-[18px] text-[#717171]'
      } text-right hover:text-[#417F56] sm:text-left`}
      onClick={() => handleClick(index)}
    >
      {isItemHeader(label) ? (
        <Dropdown
          label={label.label}
          icon={label.icon}
          dropdownItems={label.dropdownItems}
          activeDropdown={activeDropdown}
          index={index}
          onClick={onClick}
        />
      ) : (
        <span className="rounded-md px-3 py-1 text-xl font-black sm:px-5 sm:py-2 sm:text-[20px]">
          {label}
        </span>
      )}

      {isOpen && hasDropdown && (
        <div
          className="bg-opacity-50 fixed inset-0 z-40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default MenuItem
