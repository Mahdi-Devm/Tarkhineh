import { CiUser } from 'react-icons/ci'
function UserAccessList() {
  return (
    <div className="h-[206px] w-[272px] gap-y-2">
      <div className="flex h-[38px] w-[264px] items-center justify-end">
        <h1 className="text-[16px]">پروفایل</h1>
        <CiUser className="h-[20px] w-[20px] text-[#417F56]" />
      </div>
      <div className="flex h-[38px] w-[264px] items-center justify-end">
        <h1 className="text-[16px]">پیگیری سفارشات</h1>
        <CiUser className="h-[20px] w-[20px] text-[#417F56]" />
      </div>
      <div className="flex h-[38px] w-[264px] items-center justify-end">
        <h1 className="text-[16px]">علاقمندی‌ها</h1>
        <CiUser className="h-[20px] w-[20px] text-[#417F56]" />
      </div>
      <div className="flex h-[38px] w-[264px] items-center justify-end">
        <h1 className="text-[16px]">آدرس‌های من</h1>
        <CiUser className="h-[20px] w-[20px] text-[#417F56]" />
      </div>
      <div className="flex h-[38px] w-[264px] items-center justify-end">
        <h1 className="text-[16px]">خروج</h1>
        <CiUser className="h-[20px] w-[20px] text-[#417F56]" />
      </div>
    </div>
  )
}

export default UserAccessList
