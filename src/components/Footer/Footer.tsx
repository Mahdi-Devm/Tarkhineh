import { CiInstagram, CiTwitter, CiLinkedin } from 'react-icons/ci'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
type Inputs = {
  message: string
  fullName: string
  phoneNumber: string
  email?: string
}

function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>()

  const handelclick = (data: Inputs) => {
    console.log(data)
    toast.success('پیام شما با موفقیت ارسال شد.')
    reset()
  }

  return (
    <div className="w-full bg-[url(https://s3-alpha-sig.figma.com/img/85b4/9d91/9346f0ad088135a337fb916e224331cf?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QsufMwy1UAx1D0yDZTe5VcNTKcWqlydWXy8MaFHYSSyfoEgu46Y-mDix2VicDMlA871kZR7gCABFCHHzVjTJ-1vYwzCwfjTRb28i-SvozfIUDy8Xec1BhM48W1AST7hfr9U4dpy~BLrUwuzfwMlOLcKDlBl~uyum5rluYequwZyYPv2GA7HGFpUIIFoPDMSw4-l-3XmFaxNWdph9GV27jLM-4kKBkI97YpsfRXiuJjyw2JvgX7A0VMU9tqLDklgGRbXdpe4pXAtyNbglbJgJLUNzwXBOOPMDhL022KYiA-tfRr-jAQCLC9a7DTx7MuG~nCd8tXZ-UxU4eHiLhTAYxw__)] bg-cover bg-center px-5 py-12 text-white sm:px-10">
      <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
        <div className="h-[204px] w-150">
          <h3 className="mb-3 text-right text-2xl font-bold">پیام به ترخینه</h3>
          <form className="space-y-4" onSubmit={handleSubmit(handelclick)}>
            <div className="flex gap-3">
              <textarea
                {...register('message', {
                  required: 'پیام نمی‌تواند خالی باشد',
                })}
                placeholder="پیام شما"
                className={`w-full rounded-lg border border-gray-600 p-2 text-right text-white placeholder-gray-400 transition duration-300 ease-in-out focus:text-[#417F56] focus:ring-2 focus:outline-none ${errors.message ? 'border-red-500' : ''}`}
              />
              {errors.message && (
                <span className="text-sm text-red-500">
                  {errors.message.message}
                </span>
              )}

              <div className="flex h-[144px] w-[275px] flex-col gap-[12px]">
                <input
                  {...register('fullName', {
                    required: 'نام و نام خانوادگی الزامی است',
                  })}
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  className={`h-[40px] w-[276px] rounded-lg border border-gray-600 p-2 text-right text-white placeholder-gray-400 transition duration-300 ease-in-out focus:text-[#417F56] focus:ring-2 focus:outline-none ${errors.fullName ? 'border-red-500' : ''}`}
                />
                {errors.fullName && (
                  <span className="text-sm text-red-500">
                    {errors.fullName.message}
                  </span>
                )}

                <input
                  {...register('phoneNumber', {
                    required: 'شماره تماس الزامی است',
                  })}
                  type="number"
                  placeholder="شماره تماس"
                  className={`h-[40px] w-[276px] rounded-lg border border-gray-600 p-2 text-right text-white placeholder-gray-400 transition duration-300 ease-in-out focus:text-[#417F56] focus:ring-2 focus:outline-none ${errors.phoneNumber ? 'border-red-500' : ''}`}
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
                  className="h-[40px] w-[276px] rounded-lg border border-gray-600 p-2 text-right text-white placeholder-gray-400 transition duration-300 ease-in-out focus:text-[#417F56] focus:ring-2 focus:outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-1 h-[40px] w-[183px] rounded-lg border-1 border-gray-600 py-2 text-white transition duration-300 ease-in-out hover:border-[#417F56]"
            >
              ارسال پیام
            </button>
          </form>
        </div>

        <div className="w-50 text-right">
          <h3 className="mb-3 text-2xl font-bold">شعبه‌های ترخینه</h3>
          <div className="mr-3">
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="text-lg font-semibold">شعبه اکباتان</li>
              <li className="text-lg font-semibold">شعبه چالوس</li>
              <li className="text-lg font-semibold">شعبه اقدسیه</li>
              <li className="text-lg font-semibold">شعبه ونک</li>
            </ul>
          </div>
        </div>

        <div className="w-50 text-right">
          <h3 className="mb-3 text-2xl font-bold">دسترسی آسان</h3>
          <div className="mr-3">
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="text-lg font-semibold">پرسش‌های متداول</li>
              <li className="text-lg font-semibold">قوانین ترخینه</li>
              <li className="text-lg font-semibold">حریم خصوصی</li>
            </ul>
          </div>
          <div className="mt-4 flex justify-end gap-4 text-2xl text-gray-400">
            <CiInstagram className="transform cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:text-orange-500" />
            <CiTwitter className="transform cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:text-blue-500" />
            <CiLinkedin className="transform cursor-pointer transition duration-300 ease-in-out hover:scale-110 hover:text-blue-700" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Footer
