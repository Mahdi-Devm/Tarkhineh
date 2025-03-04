import { CiUser } from 'react-icons/ci'
import { CiShoppingCart } from 'react-icons/ci'
import { CiSearch } from 'react-icons/ci'
function IconHeader() {
  return (
    <div className="flex w-[154px] gap-2">
      <div className="h-[40px] w-[40px] rounded-md bg-[#E5F2E9] p-[8px]">
        <CiUser className="h-[24px] w-[24px]" />
      </div>
      <div className="h-[40px] w-[40px] rounded-md bg-[#E5F2E9] p-[8px]">
        <CiShoppingCart className="h-[24px] w-[24px]" />
      </div>
      <div className="hidden h-[40px] w-[40px] rounded-md bg-[#E5F2E9] p-[8px] md:flex">
        <CiSearch className="h-[24px] w-[24px]" />
      </div>
    </div>
  )
}

export default IconHeader
