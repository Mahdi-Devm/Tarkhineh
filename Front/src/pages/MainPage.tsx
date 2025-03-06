import { CiUser } from 'react-icons/ci'
import { TiChartAreaOutline } from 'react-icons/ti'
import { CiWifiOn } from 'react-icons/ci'
import Restaurantmenu from '../components/HomePgae/Restaurantmenu'
import SliderNext from '../components/SLider/SliderNext'
import { CiMemoPad } from 'react-icons/ci'
import { TiChevronLeftOutline } from 'react-icons/ti'
function MainPage() {
  return (
    <div className="flex flex-col">
      <SliderNext />
      <Restaurantmenu />
      <div className="relative flex h-[390px] w-full items-center justify-center rounded-xl text-center">
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            backgroundImage:
              'url(https://s3-alpha-sig.figma.com/img/6af5/4c51/59b196e28516c1c3e8bc6842aa238885?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GeR224tIdhvMfEL5k~4WnHwkiuS~kJzcDtAxGk~M3RURK0LYU9tgPreSRgmJ~SLbnsko73pt52vuiL2phyGfRfBCsEZAm4U8vmfhNHZPBPWsEfs6rM-h2e26YaOdCDuBrIQFHey0Yv5X6DGGN0OWv-wKPxJuY0SVkjJRRQI1qi6ZRkwRwCC2T~3AhHaCwEV2PlyfQURb5NRlpo3umNd~EFlD1u6CwVwxXWcnZEF9A7nZcaiDZ6ygtWdA43gyIyrxi4HtSqioQthEiS1B0BUSFsXPHmvtE-s0Hg1NFDXhhSIzwB3cFxS4-yXKt7ZNoXAR-d9fXdngoRWVW3U6hYwEXA__)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <div className="absolute inset-0 rounded-xl bg-black/70"></div>

        <div className="relative z-10 flex items-center gap-10 px-6 text-white">
          <div className="grid grid-cols-2 gap-8 text-center">
            <div className="flex flex-col items-center transition-all duration-300 hover:scale-105 hover:text-gray-500/80">
              <CiUser className="text-6xl transition-all duration-300 hover:cursor-pointer" />
              <p className="text-[18px] font-medium">پرسنلی مجرب و حرفه‌ای</p>
            </div>

            <div className="flex flex-col items-center transition-all duration-300 hover:scale-105 hover:text-gray-500/80">
              <CiWifiOn className="text-6xl transition-all duration-300 hover:cursor-pointer" />
              <p className="text-[18px] font-medium">محیطی دلنشین و آرام</p>
            </div>

            <div className="flex flex-col items-center transition-all duration-300 hover:scale-105 hover:text-gray-500/80">
              <TiChartAreaOutline className="text-6xl transition-all duration-300 hover:cursor-pointer" />
              <p className="text-[18px] font-medium">کیفیت بالای غذاها</p>
            </div>

            <div className="flex flex-col items-center transition-all duration-300 hover:scale-105 hover:text-gray-500/80">
              <CiMemoPad className="text-6xl transition-all duration-300 hover:cursor-pointer" />
              <p className="text-[18px] font-medium">منو متنوع</p>
            </div>
          </div>

          <div className="mt-6 flex max-w-2xl flex-col text-justify text-lg font-medium">
            <p className="mb-5 text-right text-3xl font-bold">
              رستوران‌های زنجیره‌ای ترخینه
            </p>
            <p className="font-medium">
              مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
              ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
              رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
              پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
              شان شما عزیزان ارائه دهیم.
            </p>

            <button className="mt-4 flex w-50 items-center justify-center gap-2 rounded border border-white px-4 py-2 text-white transition-all duration-300 hover:cursor-pointer hover:border-stone-300 hover:bg-transparent hover:text-gray-300">
              <TiChevronLeftOutline className="text-2xl hover:text-stone-300" />{' '}
              <p> اطلاعات بیشتر</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
