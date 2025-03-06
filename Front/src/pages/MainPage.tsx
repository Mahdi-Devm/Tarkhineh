import {
  FaUtensils,
  FaConciergeBell,
  FaLeaf,
  FaGlassCheers,
} from 'react-icons/fa'
import Restaurantmenu from '../components/HomePgae/Restaurantmenu'
import SliderNext from '../components/SLider/SliderNext'

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

        <div className="relative z-10 flex flex-col items-center px-6 text-white">
          <div className="flex w-full max-w-lg justify-between gap-4">
            <div className="flex flex-col items-center">
              <FaUtensils className="text-3xl" />
              <p className="text-sm">غذای باکیفیت</p>
            </div>
            <div className="flex flex-col items-center">
              <FaConciergeBell className="text-3xl" />
              <p className="text-sm">خدمات ویژه</p>
            </div>
            <div className="flex flex-col items-center">
              <FaLeaf className="text-3xl" />
              <p className="text-sm">مواد ارگانیک</p>
            </div>
            <div className="flex flex-col items-center">
              <FaGlassCheers className="text-3xl" />
              <p className="text-sm">فضای دوستانه</p>
            </div>
          </div>

          <div className="mt-6 max-w-2xl text-justify text-lg font-medium">
            <p className="text-right text-3xl font-semibold">
              رستوران‌های زنجیره‌ای ترخینه
            </p>
            <p>
              مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
              ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
              رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
              پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
              شان شما عزیزان ارائه دهیم.
            </p>
          </div>

          <button className="mt-4 border border-white px-6 py-2 text-white transition-all duration-300 hover:bg-transparent hover:text-gray-300">
            اطلاعات بیشتر
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainPage
