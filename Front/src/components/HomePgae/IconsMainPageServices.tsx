import { CiUser, CiWifiOn, CiMemoPad } from 'react-icons/ci'
import { TiChartAreaOutline } from 'react-icons/ti'
function IconsMainPageServices() {
  return (
    <div className="grid grid-cols-2 gap-4 text-center sm:gap-8">
      <div className="flex flex-col items-center transition-all duration-300 hover:scale-105 hover:text-gray-500/80">
        <CiUser className="text-4xl transition-all duration-300 hover:cursor-pointer sm:text-6xl" />
        <p className="text-sm font-medium sm:text-[18px]">
          پرسنلی مجرب و حرفه‌ای
        </p>
      </div>

      <div className="flex flex-col items-center transition-all duration-300 hover:scale-105 hover:text-gray-500/80">
        <CiWifiOn className="text-4xl transition-all duration-300 hover:cursor-pointer sm:text-6xl" />
        <p className="text-sm font-medium sm:text-[18px]">
          محیطی دلنشین و آرام
        </p>
      </div>

      <div className="flex flex-col items-center transition-all duration-300 hover:scale-105 hover:text-gray-500/80">
        <TiChartAreaOutline className="text-4xl transition-all duration-300 hover:cursor-pointer sm:text-6xl" />
        <p className="text-sm font-medium sm:text-[18px]">کیفیت بالای غذاها</p>
      </div>

      <div className="flex flex-col items-center transition-all duration-300 hover:scale-105 hover:text-gray-500/80">
        <CiMemoPad className="text-4xl transition-all duration-300 hover:cursor-pointer sm:text-6xl" />
        <p className="text-sm font-medium sm:text-[18px]">منو متنوع</p>
      </div>
    </div>
  )
}

export default IconsMainPageServices
