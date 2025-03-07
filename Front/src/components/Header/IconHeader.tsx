import { useState, useEffect } from 'react'
import { CiUser, CiShoppingCart, CiSearch } from 'react-icons/ci'
import Modal from '../Login/ModalLogin'

const IconHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768)

  const toggleModal = () => setIsModalOpen((prev) => !prev)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div>
      <div className="flex w-[154px] gap-2">
        <div
          className="h-[40px] w-[40px] cursor-pointer rounded-md bg-[#E5F2E9] p-[8px]"
          onClick={toggleModal}
        >
          <CiUser className="h-[24px] w-[24px]" />
        </div>
        <div
          className="h-[40px] w-[40px] cursor-pointer rounded-md bg-[#E5F2E9] p-[8px]"
          onClick={toggleModal}
        >
          <CiShoppingCart className="h-[24px] w-[24px]" />
        </div>
        <div className="hidden h-[40px] w-[40px] cursor-pointer rounded-md bg-[#E5F2E9] p-[8px] md:flex">
          <CiSearch className="h-[24px] w-[24px]" />
        </div>
      </div>

      <Modal
        isMobile={isMobile}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
      />
    </div>
  )
}

export default IconHeader
