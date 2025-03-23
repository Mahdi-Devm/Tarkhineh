import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CiUser, CiWifiOn, CiMemoPad } from 'react-icons/ci'
import { TiChartAreaOutline } from 'react-icons/ti'

function IconsMainPageServices() {
  const [inView, setInView] = useState(false)
  const [animationCompleted, setAnimationCompleted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && !animationCompleted) {
          setInView(true)
          setAnimationCompleted(true)
        }
      },
      { threshold: 0.1 },
    )
    const target = document.getElementById('services')
    if (target) {
      observer.observe(target)
    }
    return () => observer.disconnect()
  }, [animationCompleted])

  return (
    <div id="services" className="grid grid-cols-2 gap-4 text-center sm:gap-8">
      <motion.div
        className="flex flex-col items-center transition-all duration-300 hover:scale-105 hover:text-gray-500/80"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.95 }}
        transition={{ duration: 0.5 }}
      >
        <CiUser className="text-4xl sm:text-6xl" />
        <p className="text-sm font-medium sm:text-[18px]">
          پرسنلی مجرب و حرفه‌ای
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center transition-all duration-300 hover:scale-105 hover:text-gray-500/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <CiWifiOn className="text-4xl transition-all duration-300 hover:cursor-pointer sm:text-6xl" />
        <p className="text-sm font-medium sm:text-[18px]">
          محیطی دلنشین و آرام
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center transition-all duration-300 hover:scale-105 hover:text-gray-500/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <TiChartAreaOutline className="text-4xl transition-all duration-300 hover:cursor-pointer sm:text-6xl" />
        <p className="text-sm font-medium sm:text-[18px]">کیفیت بالای غذاها</p>
      </motion.div>

      <motion.div
        className="flex flex-col items-center transition-all duration-300 hover:scale-105 hover:text-gray-500/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <CiMemoPad className="text-4xl transition-all duration-300 hover:cursor-pointer sm:text-6xl" />
        <p className="text-sm font-medium sm:text-[18px]">منو متنوع</p>
      </motion.div>
    </div>
  )
}

export default IconsMainPageServices
