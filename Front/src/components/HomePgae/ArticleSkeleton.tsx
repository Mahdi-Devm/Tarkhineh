import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import iamgebg from '../../assets/imagemenures/main-cta-bg-1.jpg'
import iamgedelivery from '../../assets/imagemenures/delivery-man-1.png'
import { CiDeliveryTruck } from 'react-icons/ci'
import { useEffect, useRef, useState } from 'react'

function ArticleSkeleton() {
  const nav = useNavigate()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  function handelchangeur() {
    nav('/menu')
  }

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative mx-auto mt-10 flex h-auto w-[90%] max-w-[1280px] flex-col items-center justify-between rounded-2xl p-6 text-white sm:mt-15 sm:h-106 sm:flex-row sm:p-10"
      style={{
        backgroundImage: `url(${iamgebg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-0 hidden w-48 sm:relative sm:-left-16 sm:block sm:w-200"
      >
        <img src={iamgedelivery} alt="Delivery Man" className="w-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-6 flex w-full flex-col items-center justify-center text-center sm:mt-0 sm:ml-auto sm:w-2/3 sm:items-end sm:text-right"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl font-semibold text-[#FFB936] sm:text-2xl"
        >
          ترد، هر لقمه‌ای
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: 20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-2xl font-bold sm:text-[60px]"
        >
          ۳۰ دقیقه سریع <br />
          <span className="text-[#FFB936]">چالش</span> تحویل
        </motion.h1>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          onClick={handelchangeur}
          className="group mt-6 flex h-14 w-52 items-center justify-center rounded-lg bg-white px-5 py-2 text-lg font-semibold text-black shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#FFB936] hover:shadow-xl sm:h-15 sm:w-60 sm:text-lg"
        >
          <span className="transition-all duration-300 group-hover:translate-x-1">
            اکنون سفارش دهید
          </span>
          <CiDeliveryTruck
            size={24}
            className="ml-2 text-[#417F56] transition-all duration-300 group-hover:translate-x-1"
          />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default ArticleSkeleton
