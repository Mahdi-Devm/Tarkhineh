type DropdownProps = {
  label: string
  icon: React.ReactNode
  dropdownItems?: string[]
  activeDropdown: number | null
  index: number
  onClick: (index: number) => void
}

const Dropdown = ({
  label,
  icon,
  dropdownItems,
  activeDropdown,
  index,
  onClick,
}: DropdownProps) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div
        className={`ml-2 transition-all ${
          activeDropdown === index ? 'rotate-180' : ''
        }`}
        onClick={(e) => {
          e.stopPropagation()
          onClick(index)
        }}
      >
        {icon}
      </div>
      <span className="text-xl transition-all duration-300 hover:scale-105 hover:text-[#417F56]">
        {label}
      </span>

      {activeDropdown === index && dropdownItems && (
        <div className="absolute top-full left-0 mt-2 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
          {dropdownItems.map((dropdownItem, dropdownIndex) => (
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
  )
}

export default Dropdown
