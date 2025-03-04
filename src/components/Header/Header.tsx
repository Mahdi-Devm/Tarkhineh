import { useState } from 'react'
import Logo from '../Logo/Logo'
import IconHeader from './IconHeader'
import ListHeader from './ListHeader'
import { FaBars } from 'react-icons/fa'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="flex h-[115px] items-center justify-around px-4 md:justify-between md:px-8 lg:px-16">
      <div className="hidden md:flex">
        <IconHeader />
      </div>
      <div className="hidden md:block">
        <ListHeader />
      </div>
      <div className="hidden md:block">
        <Logo />
      </div>
      <div className="flex w-full items-center justify-between md:hidden">
        <IconHeader />
        <div className="absolute left-1/2 -translate-x-1/2">
          <Logo />
        </div>
        <button
          className="text-3xl text-[#417F56]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-[115px] left-0 w-full bg-white shadow-lg md:hidden">
          <ListHeader />
        </div>
      )}
    </header>
  )
}

export default Header
