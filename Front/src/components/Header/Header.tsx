import { useState } from 'react'
import Logo from '../Logo/Logo'
import IconHeader from './IconHeader'
import ListHeader from './ListHeader'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { motion } from 'framer-motion'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="flex h-[115px] items-center justify-around px-4 md:justify-between md:px-8 lg:px-16">
      <div className="hidden md:flex">
        <IconHeader />
      </div>
      <div className="hidden md:flex">
        <ListHeader />
      </div>
      <div className="hidden md:flex">
        <Logo />
      </div>
      <div className="flex w-full items-center justify-between md:hidden">
        <IconHeader />
        <div className="absolute left-1/2 -translate-x-1/2">
          <Logo />
        </div>
        <button
          className="text-3xl text-[#417F56] transition-colors duration-300 ease-in-out hover:text-[#3b6d43]"
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>
      </div>
      {isOpen && (
        <motion.div
          className="bg-opacity-50 fixed inset-0 z-20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <motion.div
        className={`fixed top-0 right-0 z-30 h-full w-[70%] transform bg-white shadow-xl transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
        exit={{ opacity: 0, x: '100%' }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-3xl text-gray-700 transition-colors duration-300 ease-in-out hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            <IoClose />
          </button>
        </div>
        <div className="p-6">
          <ListHeader />
        </div>
      </motion.div>
    </header>
  )
}

export default Header
