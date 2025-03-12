import { useState, useEffect } from 'react'
import { CiUser, CiShoppingCart, CiSearch, CiLogin } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import Modal from '../Login/ModalLogin'
import Cookies from 'js-cookie'

const IconHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const token = Cookies.get('accessToken')
    if (token) {
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev)
  }

  const handleUserClick = () => {
    if (isAuthenticated) {
      navigate('/profile')
    } else {
      toggleModal()
    }
  }

  return (
    <div>
      <div className="flex w-[154px] gap-2">
        <div
          className="h-[40px] w-[40px] cursor-pointer rounded-md bg-[#E5F2E9] p-[8px]"
          onClick={handleUserClick}
        >
          {isAuthenticated ? (
            <CiUser className="h-[24px] w-[24px]" />
          ) : (
            <CiLogin className="h-[24px] w-[24px]" />
          )}
        </div>
        <div className="h-[40px] w-[40px] cursor-pointer rounded-md bg-[#E5F2E9] p-[8px]">
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
