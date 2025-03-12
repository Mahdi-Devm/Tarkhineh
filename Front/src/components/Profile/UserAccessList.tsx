import { NavLink, useLocation } from 'react-router-dom'
import {
  CiUser,
  CiHeart,
  CiLocationOn,
  CiBoxList,
  CiLogout,
} from 'react-icons/ci'

function UserAccessList() {
  const location = useLocation()

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
    { title: 'خروج', icon: <CiLogout />, path: '/' },
  ]

  return (
    <div className="mt-2 h-[206px] w-[272px] space-y-1">
      {' '}
      {menuItems.map((item, index) => {
        const isActive = location.pathname === item.path

        return (
          <NavLink
            to={item.path}
            key={index}
            className={`flex h-[38px] w-[264px] cursor-pointer items-center justify-between rounded-md p-2 transition duration-300 ${
              isActive ? 'bg-[#417F56] text-white' : 'hover:bg-[#E5F2E9]'
            }`}
          >
            <h1 className="text-[16px]">{item.title}</h1>
            <div
              className={`h-[20px] w-[20px] text-[25px] ${isActive ? 'text-white' : 'text-[#417F56]'}`}
            >
              {item.icon}
            </div>
          </NavLink>
        )
      })}
    </div>
  )
}

export default UserAccessList
