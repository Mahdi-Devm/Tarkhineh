import { motion } from 'framer-motion'
import { imageSupporters } from '../../constants/datapagemainforprouducts'

const Supporters = () => {
  return (
    <div className="mx-auto flex w-60 flex-col rounded-2xl sm:w-280">
      <p className="mx-auto rounded-lg p-4 text-center text-sm font-semibold text-black sm:w-90 sm:text-xl md:mb-4 md:w-120">
        سراسری 5+ هزار<span className="text-[#FFB936]"> حامیان مالی</span> با ما
        خوشحال هستند
      </p>

      <div className="mx-auto mt-5 grid w-full grid-cols-2 items-center justify-center gap-4 rounded-2xl bg-[#74aa86] p-4 sm:grid-cols-3 md:grid-cols-5">
        {imageSupporters.map((item, index) => (
          <motion.div
            key={index}
            className={`px-2 py-2 text-center ${
              index > 3 ? 'hidden sm:block' : ''
            }`}
            whileHover={{
              scale: 1.1,
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
              borderRadius: '12px',
              transition: { duration: 0.3 },
              cursor: 'pointer',
            }}
          >
            <p className={`${item.font}`}>{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Supporters
