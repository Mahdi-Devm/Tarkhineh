import { useState } from 'react'
import Logo from '../Logo/Logo'
import IconHeader from './IconHeader'
import ListHeader from './ListHeader'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

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
        <div
          className="bg-opacity-50 fixed inset-0 z-20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-30 h-full w-[70%] bg-white shadow-xl transition-all duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
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
      </div>
    </header>
  )
}

export default Header
