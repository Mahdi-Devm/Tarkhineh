import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FC } from 'react'
interface ConsultationFormProps {
  startDate: Date | null
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>
}

const ConsultationForm: FC<ConsultationFormProps> = ({
  startDate,
  setStartDate,
}) => {
  return (
    <div className="my-10 flex w-full flex-col items-center justify-center rounded-lg p-6">
      <h1 className="mb-6 text-center text-2xl font-semibold text-[#417F56]">
        دریافت مشاوره
      </h1>
      <form className="flex w-full max-w-[925px] flex-col gap-5 sm:flex-row">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="زمان ایده‌آل"
          className="mb-4 h-[40px] w-full rounded-lg border border-stone-300 p-2 focus:ring-2 focus:ring-[#417F56] focus:outline-none sm:w-[392px]"
          dateFormat="yyyy/MM/dd"
          isClearable
        />
        <input
          type="email"
          placeholder="شماره تماس"
          className="mb-4 h-[40px] w-full rounded-lg border border-stone-300 p-2 focus:ring-2 focus:ring-[#417F56] focus:outline-none sm:w-[392px]"
        />
        <input
          placeholder="نام و نام‌خانوادگی"
          className="h-[40px] w-full rounded-lg border border-stone-300 p-2 focus:ring-2 focus:ring-[#417F56] focus:outline-none sm:w-[392px]"
        />
      </form>
      <button className="transform cursor-pointer rounded-lg border border-[#417F56] bg-[#417F56] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-white hover:text-[#417F56] hover:shadow-lg">
        درخواست مشاوره
      </button>
    </div>
  )
}

export default ConsultationForm
