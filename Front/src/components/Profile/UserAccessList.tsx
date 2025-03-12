import {
  CiUser,
  CiHeart,
  CiLocationOn,
  CiBoxList,
  CiLogout,
} from 'react-icons/ci'

function UserAccessList() {
  const menuItems = [
    { title: 'پروفایل', icon: <CiUser /> },
    { title: 'پیگیری سفارشات', icon: <CiBoxList /> },
    { title: 'علاقمندی‌ها', icon: <CiHeart /> },
    { title: 'آدرس‌های من', icon: <CiLocationOn /> },
    { title: 'خروج', icon: <CiLogout /> },
  ]

  return (
    <div className="mt-2 h-[206px] w-[272px] gap-y-2">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex h-[38px] w-[264px] cursor-pointer items-center justify-between rounded-md p-2 transition duration-300 hover:bg-[#E5F2E9]"
        >
          <h1 className="text-[16px]">{item.title}</h1>
          <div className="h-[20px] w-[20px] text-[25px] text-[#417F56]">
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserAccessList
