import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FC } from 'react'
interface ConsultationFormProps {
  startDate: Date | null
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>
}
import { motion } from 'framer-motion'

const ConsultationForm: FC<ConsultationFormProps> = ({
  startDate,
  setStartDate,
}) => {
  return (
    <motion.div
      className="my-10 flex w-full flex-col items-center justify-center rounded-lg p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.h1
        className="mb-6 text-center text-2xl font-semibold text-[#417F56]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        دریافت مشاوره
      </motion.h1>
      <motion.form
        className="flex w-full max-w-[925px] flex-col gap-5 sm:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="زمان ایده‌آل"
          className="mb-4 h-[40px] w-full rounded-lg border border-stone-300 p-2 focus:ring-2 focus:ring-[#417F56] focus:outline-none sm:w-[392px]"
          dateFormat="yyyy/MM/dd"
          isClearable
        />
        <motion.input
          type="email"
          placeholder="شماره تماس"
          className="mb-4 h-[40px] w-full rounded-lg border border-stone-300 p-2 focus:ring-2 focus:ring-[#417F56] focus:outline-none sm:w-[392px]"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.input
          placeholder="نام و نام‌خانوادگی"
          className="h-[40px] w-full rounded-lg border border-stone-300 p-2 focus:ring-2 focus:ring-[#417F56] focus:outline-none sm:w-[392px]"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.form>
      <motion.button
        className="transform cursor-pointer rounded-lg border border-[#417F56] bg-[#417F56] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-white hover:text-[#417F56] hover:shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        درخواست مشاوره
      </motion.button>
    </motion.div>
  )
}

export default ConsultationForm
