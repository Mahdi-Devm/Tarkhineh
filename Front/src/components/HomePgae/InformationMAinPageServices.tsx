import { TiChevronLeftOutline } from 'react-icons/ti'
import { motion } from 'framer-motion'

function InformationMAinPageServices() {
  return (
    <div className="mt-6 flex max-w-2xl flex-col text-justify text-sm font-medium sm:text-lg">
      <motion.p
        className="mb-5 text-right text-xl font-bold sm:text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        رستوران‌های زنجیره‌ای ترخینه
      </motion.p>
      <motion.p
        className="font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که
        بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم...
      </motion.p>

      <button className="mt-4 flex w-40 items-center justify-center gap-2 rounded border border-white px-4 py-2 text-white transition-all duration-300 hover:cursor-pointer hover:border-stone-300 hover:bg-transparent hover:text-gray-300 sm:w-50">
        <TiChevronLeftOutline className="text-lg hover:text-stone-300 sm:text-2xl" />
        <p className="text-xs sm:text-base"> اطلاعات بیشتر</p>
      </button>
    </div>
  )
}

export default InformationMAinPageServices
