import { motion } from 'framer-motion'

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
      <motion.div
        className={`ml-2 transition-all`}
        animate={{ rotate: activeDropdown === index ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 300 }}
        onClick={(e) => {
          e.stopPropagation()
          onClick(index)
        }}
      >
        {icon}
      </motion.div>
      <span className="text-xl transition-all duration-300 hover:scale-105 hover:text-[#417F56]">
        {label}
      </span>

      {activeDropdown === index && dropdownItems && (
        <motion.div
          className="absolute top-full left-0 mt-2 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {dropdownItems.map((dropdownItem, dropdownIndex) => (
            <div
              key={dropdownIndex}
              className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-[#417F56] hover:text-white"
            >
              {dropdownItem}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default Dropdown
