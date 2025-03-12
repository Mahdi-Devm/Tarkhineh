import { Link } from 'react-router-dom'
import {
  CiUser,
  CiHeart,
  CiLocationOn,
  CiBoxList,
  CiLogout,
} from 'react-icons/ci'

function UserAccessList() {
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
    <div className="mt-2 h-[206px] w-[272px] gap-y-2">
      {menuItems.map((item, index) => (
        <Link
          to={item.path}
          key={index}
          className="flex h-[38px] w-[264px] cursor-pointer items-center justify-between rounded-md p-2 transition duration-300 hover:bg-[#E5F2E9]"
        >
          <h1 className="text-[16px]">{item.title}</h1>
          <div className="h-[20px] w-[20px] text-[25px] text-[#417F56]">
            {item.icon}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default UserAccessList
