import { data, data2 } from '../../constants/Datadelegate'
import { CiMaximize2 } from 'react-icons/ci'
import { motion } from 'framer-motion'

function DelegateBenefits() {
  return (
    <motion.div
      className="mx-auto flex w-full max-w-[925px] flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="mb-10 text-center text-lg text-[24px] font-semibold">
        مزیت دریافت نمایندگی
      </h1>

      <div className="flex w-full flex-col sm:flex-row sm:justify-between">
        <motion.div
          className="mb-4 flex w-full flex-col sm:mb-0 sm:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {data.map((item, index) => (
            <div key={index} className="mb-4 flex items-center">
              <p className="w-full text-right text-[18px] font-normal text-[#353535]">
                {item.name}
              </p>
              <CiMaximize2 className="mr-2 text-xl text-[#417F56]" />
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex w-full flex-col sm:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {data2.map((item, index) => (
            <div key={index} className="mb-4 flex items-center">
              <p className="w-full text-right text-[18px] font-normal text-[#353535]">
                {item.name}
              </p>
              <CiMaximize2 className="mr-2 text-xl text-[#417F56]" />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default DelegateBenefits
