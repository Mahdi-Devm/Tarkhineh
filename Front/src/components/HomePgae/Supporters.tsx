import { motion } from 'framer-motion'
const imageSupporters = [
  {
    name: "McDonald's",
    font: 'font-extrabold text-stone-200 text-xl sm:text-2xl lg:text-3xl font-sans',
  },
  {
    name: 'KFC',
    font: 'font-black text-stone-200 text-xl sm:text-2xl lg:text-3xl font-serif',
  },
  {
    name: 'Burger King',
    font: 'font-semibold text-stone-200 text-xl sm:text-2xl lg:text-2xl font-mono',
  },
  {
    name: "Domino's Pizza",
    font: 'font-bold text-stone-200 text-base sm:text-lg lg:text-2xl font-sans',
  },
  {
    name: 'Subway',
    font: 'font-medium text-stone-200 text-xl sm:text-2xl lg:text-3xl font-serif',
  },
]

const Supporters = () => {
  return (
    <div className="mx-auto flex  flex-col w-full rounded-2xl  ">
      <p className="mx-auto rounded-lg p-4 text-sm font-semibold text-black sm:w-90 sm:text-xl text-center md:mb-4 md:w-120">
        سراسری 5+ هزار<span className="text-[#FFB936]"> حامیان مالی</span> با ما
        خوشحال هستند
      </p>

      <div className="mx-auto mt-5 grid grid-cols-2 items-center justify-center gap-4 rounded-2xl bg-[#74aa86] p-4 w-full sm:grid-cols-3 md:grid-cols-5 ">
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
