import { DataDelegate } from '../../constants/Datadelegate'
import { motion } from 'framer-motion'

function DelegateGrid() {
  return (
    <motion.div
      className="mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="mx-auto grid max-w-[1224px] grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
        {DataDelegate.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
          >
            <motion.img
              src={item.image}
              alt={item.title}
              className="mb-4 h-[100px] w-[100px] rounded-lg object-cover sm:h-[100px] sm:w-[100px]"
              whileHover={{ scale: 1.1 }} // Zoom effect on hover
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * index, duration: 1 }}
            />
            <h3 className="text-center text-lg font-semibold text-[#353535] sm:text-sm">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default DelegateGrid
