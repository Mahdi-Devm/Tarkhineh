import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

type Inputs = {
  message: string
  fullName: string
  phoneNumber: string
  email?: string
}

function FooterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>()

  const handleClick = (data: Inputs) => {
    console.log(data)
    toast.success('پیام شما با موفقیت ارسال شد.')
    reset()
  }

  return (
    <form className="space-y-4 " onSubmit={handleSubmit(handleClick)}>
      <div className="flex flex-col gap-4 md:flex-row">
        <textarea
          {...register('message', { required: 'پیام نمی‌تواند خالی باشد' })}
          placeholder="پیام شما"
          className={`w-full rounded-lg border p-2 text-right text-white placeholder-gray-400 focus:ring-2 focus:outline-none ${
            errors.message ? 'border-red-500' : 'border-gray-600'
          } text-sm md:text-base`} // کاهش سایز فونت در موبایل
        />
        {errors.message && (
          <span className="text-sm text-red-500">{errors.message.message}</span>
        )}

        <div className="flex w-full flex-col gap-4 md:w-[40%]">
          <input
            {...register('fullName', {
              required: 'نام و نام خانوادگی الزامی است',
            })}
            type="text"
            placeholder="نام و نام خانوادگی"
            className={`h-[40px] rounded-lg border p-2 text-right text-white placeholder-gray-400 focus:ring-2 focus:outline-none ${
              errors.fullName ? 'border-red-500' : 'border-gray-600'
            } text-sm md:text-base`} // کاهش سایز فونت در موبایل
          />
          {errors.fullName && (
            <span className="text-sm text-red-500">
              {errors.fullName.message}
            </span>
          )}

          <input
            {...register('phoneNumber', { required: 'شماره تماس الزامی است' })}
            type="number"
            placeholder="شماره تماس"
            className={`h-[40px] rounded-lg border p-2 text-right text-white placeholder-gray-400 focus:ring-2 focus:outline-none ${
              errors.phoneNumber ? 'border-red-500' : 'border-gray-600'
            } text-sm md:text-base`} // کاهش سایز فونت در موبایل
          />
          {errors.phoneNumber && (
            <span className="text-sm text-red-500">
              {errors.phoneNumber.message}
            </span>
          )}

          <input
            {...register('email')}
            type="text"
            placeholder="آدرس ایمیل (اختیاری)"
            className="h-[40px] rounded-lg border border-gray-600 p-2 text-right text-sm text-white placeholder-gray-400 focus:ring-2 focus:outline-none md:text-base" // کاهش سایز فونت در موبایل
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 h-[40px] w-full rounded-lg border border-gray-600 text-sm text-white hover:border-[#417F56] md:w-[183px] md:text-base" // کاهش سایز فونت در موبایل
      >
        ارسال پیام
      </button>
    </form>
  )
}

export default FooterForm
