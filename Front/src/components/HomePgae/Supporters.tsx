import { motion } from 'framer-motion'
import image1 from '../../assets/imagemenures/pizza-text-2-1.png'
import image2 from '../../assets/imagemenures/pizza.png'
import image3 from '../../assets/imagemenures/pizza-text-2.png'
import image4 from '../../assets/imagemenures/pizza-text-2-1.png'
import image5 from '../../assets/imagemenures/pizza.png'

// Array of images
const imageSupporters = [
  { link: image1 },
  { link: image2 },
  { link: image3 },
  { link: image4 },
  { link: image5 },
]

function Supporters() {
  return (
    <div className="relative mx-auto flex h-50 w-70 flex-col rounded-2xl sm:w-200">
      <p className="absolute top-2 left-1/2 z-10 mx-auto w-82 -translate-x-1/2 rounded-lg p-4 text-sm font-semibold text-black sm:w-90 sm:text-xl md:mb-4 md:w-120">
        سراسری 5+ هزار<span className="text-[#FFB936]"> حامیان مالی</span> با ما
        خوشحال هستند
      </p>

      <div className="mx-auto mt-15 flex w-full space-x-4 overflow-hidden rounded-2xl bg-[#74aa86] p-4 sm:w-1/2 sm:flex-wrap sm:space-x-0 lg:w-full xl:w-full">
        {imageSupporters.map((item, index) => (
          <motion.div
            key={index}
            className="mx-auto flex-shrink-0 sm:w-1/2 lg:w-1/5 xl:w-1/5"
            whileHover={{
              scale: 1.1,
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
              borderRadius: '12px',
              transition: { duration: 0.3 },
              cursor: 'pointer',
            }}
          >
            <img
              src={item.link}
              alt={`Supporter ${index}`}
              className="mx-auto h-12 w-36 rounded-lg p-2 sm:h-16 sm:w-40 md:h-20 md:w-48 lg:h-24 lg:w-56 xl:h-18 xl:w-64"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Supporters
