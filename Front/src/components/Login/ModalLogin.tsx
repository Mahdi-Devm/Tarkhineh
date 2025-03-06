import { IoIosClose } from 'react-icons/io'
import Logo from '../Logo/Logo'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import axios from 'axios'
interface ModalProps {
  isMobile: boolean
  isModalOpen: boolean
  toggleModal: () => void
}

const Modal: React.FC<ModalProps> = ({
  isMobile,
  isModalOpen,
  toggleModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ phone: string }>()

  const queryClient = useQueryClient()

  const loginMutation = useMutation({
    mutationFn: async (data: { phone: string }) => {
      const res = await axios.post(
        'http://localhost:3000/api/v1/client/auth/SignIn',
        data,
      )
      return res.data
    },
    onSuccess: (data) => {
      alert(`OTP ارسال شد: ${data.otp}`)
      queryClient.invalidateQueries(['getOtp'])
    },
    onError: (error: any) => {
      alert(`خطا: ${error.response?.data?.message || 'مشکلی پیش آمد'}`)
    },
  })

  const onSubmit = (data: { phone: string }) => {
    loginMutation.mutate(data) // مقدار درست را ارسال کن
  }

  if (!isModalOpen) return null

  return (
    <div
      className={`fixed h-full w-full backdrop-blur-sm ${
        isMobile
          ? 'bg-opacity-50 bottom-0'
          : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform'
      } z-50 flex items-center justify-center transition-all duration-500`}
    >
      <div className="relative w-[90%] max-w-[400px] transform rounded-lg bg-white p-8 shadow-lg transition-all duration-500">
        <h2 className="mb-6 text-center text-xl font-bold">مدال</h2>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex justify-center">
            <Logo />
          </div>

          <p className="mb-4 text-sm text-gray-600">
            با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.
          </p>

          {/* فرم ورود */}
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <input
              type="text"
              placeholder="شماره تلفن"
              {...register('phone', {
                required: 'شماره تلفن اجباری است',
                pattern: {
                  value: /^[0-9]{10,11}$/,
                  message: 'شماره معتبر نیست',
                },
              })}
              className="mb-2 w-full rounded-lg border border-gray-300 p-3 transition-all duration-300 focus:border-blue-500 focus:outline-none"
            />
            {errors.phone && (
              <p className="text-xs text-red-500">{errors.phone.message}</p>
            )}

            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-[#417F56] py-3 text-white transition-colors duration-300 hover:bg-[#365E42] focus:outline-none"
            >
              ادامه
            </button>
          </form>

          <p className="mt-4 text-xs text-gray-500">
            ورود و عضویت در ترخینه به منزله{' '}
            <span className="text-[#417F56]">قبول قوانین و مقررات</span> است.
          </p>
        </div>

        <button
          onClick={toggleModal}
          className="absolute top-4 right-4 p-2 text-gray-500 transition-all duration-300 hover:text-gray-700"
        >
          <IoIosClose className="h-[24px] w-[24px]" />
        </button>
      </div>
    </div>
  )
}

export default Modal
