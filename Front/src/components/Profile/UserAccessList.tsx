import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
  CiUser,
  CiHeart,
  CiLocationOn,
  CiBoxList,
  CiLogout,
} from 'react-icons/ci'

function UserAccessList() {
  const location = useLocation()
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  const menuItems = [
    { title: 'پروفایل', icon: <CiUser />, path: '/profile' },
    {
      title: 'پیگیری سفارشات',
      icon: <CiBoxList />,
      path: '/profile/Trackingorders',
    },
    { title: 'علاقمندی‌ها', icon: <CiHeart />, path: '/profile/Interests' },
    {
      title: 'آدرس‌های من',
      icon: <CiLocationOn />,
      path: '/profile/Addresses',
    },
  ]

  const handleLogout = () => {
    setShowModal(true)
  }

  const confirmLogout = () => {
    setShowModal(false)
    navigate('/')
  }

  return (
    <div className="mt-2 h-auto w-full space-y-1 sm:w-full">
      {menuItems.map((item, index) => {
        const isActive = location.pathname === item.path

        return (
          <NavLink
            to={item.path}
            key={index}
            className={`flex h-[38px] w-full cursor-pointer items-center justify-between rounded-md p-2 transition duration-300 ${
              isActive ? 'bg-[#417F56] text-white' : 'hover:bg-[#E5F2E9]'
            }`}
          >
            <h1 className="text-[16px] sm:text-sm">{item.title}</h1>
            <div
              className={`h-[20px] w-[20px] text-[25px] ${isActive ? 'text-white' : 'text-[#417F56]'}`}
            >
              {item.icon}
            </div>
          </NavLink>
        )
      })}

      <div
        onClick={handleLogout}
        className="flex h-[38px] w-full cursor-pointer items-center justify-between rounded-md bg-[#FFF2F2] p-2 text-red-600 transition duration-300"
      >
        <h1 className="text-[16px] sm:text-sm">خروج</h1>
        <div className="h-[20px] w-[20px] text-[25px] text-white">
          <CiLogout className="text-red-600" />
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
          <div className="scale-in rounded-lg bg-white p-8 shadow-lg transition-transform duration-300">
            <h1 className="mb-10 text-center text-3xl text-[#0C0C0C]">خروح</h1>
            <h2 className="mb-4 text-lg font-semibold text-[#353535]">
              آیا مایل به خروج از حساب کاربری خود هستید؟
            </h2>
            <div className="flex justify-around">
              <button
                className="w-[117px] rounded-md bg-[#FFF2F2] px-4 py-2 text-xl text-red-600 shadow-sm transition-transform duration-200 hover:scale-105"
                onClick={() => setShowModal(false)}
              >
                خیر
              </button>
              <button
                className="w-[117px] rounded-md bg-[#417F56] px-4 py-2 text-xl text-white shadow-sm transition-transform duration-200 hover:scale-105"
                onClick={confirmLogout}
              >
                بله
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserAccessList
