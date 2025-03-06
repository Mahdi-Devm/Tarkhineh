import { TiChevronLeftOutline } from 'react-icons/ti'

function InformationMAinPageServices() {
  return (
    <div className="mt-6 flex max-w-2xl flex-col text-justify text-sm font-medium sm:text-lg">
      <p className="mb-5 text-right text-xl font-bold sm:text-3xl">
        رستوران‌های زنجیره‌ای ترخینه
      </p>
      <p className="font-medium">
        مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که
        بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های
        زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و
        طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان
        ارائه دهیم.
      </p>

      <button className="mt-4 flex w-40 items-center justify-center gap-2 rounded border border-white px-4 py-2 text-white transition-all duration-300 hover:cursor-pointer hover:border-stone-300 hover:bg-transparent hover:text-gray-300 sm:w-50">
        <TiChevronLeftOutline className="text-lg hover:text-stone-300 sm:text-2xl" />
        <p className="text-xs sm:text-base"> اطلاعات بیشتر</p>
      </button>
    </div>
  )
}

export default InformationMAinPageServices
