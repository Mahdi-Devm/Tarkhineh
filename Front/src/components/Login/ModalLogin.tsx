import React from 'react'
import { IoIosClose, IoIosArrowBack } from 'react-icons/io'
import Logo from '../Logo/Logo'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import axios, { AxiosError } from 'axios'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuth } from '../../Context/AuthContext'
import { useNumber } from '../../Context/NumberUserForProfile'
interface OtpResponse {
  otp: string
  expiresIn: number
}
interface ModalProps {
  isMobile: boolean
  isModalOpen: boolean
  toggleModal: () => void
}

interface FormData {
  mobile: string
  otpCode: string
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
    setValue,
  } = useForm<FormData>()

  const queryClient = useQueryClient()
  const { setIsAuthenticated } = useAuth()
  const { setMobile } = useNumber()
  const [timer, setTimer] = React.useState<number>(120)

  React.useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [timer])

  const loginMutation = useMutation({
    mutationFn: async (data: { mobile: string }): Promise<OtpResponse> => {
      const payload = JSON.stringify({ mobile: data.mobile })

      const res = await fetch(
        'http://localhost:3000/api/v1/client/auth/getOtp',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: payload,
        },
      )

      if (!res.ok) {
        throw new Error('مشکلی پیش آمد 1')
      }

      const dataResponse = await res.json()
      return dataResponse
    },
    onSuccess: (data) => {
      toast.success(`OTP ارسال شد: ${data}`)
      queryClient.invalidateQueries({ queryKey: ['getOtp'] })
      setTimer(120)
    },
  })

  const otpVerificationMutation = useMutation({
    mutationFn: async (data: { mobile: string; otpCode: string }) => {
      const res = await axios.post(
        'http://localhost:3000/api/v1/client/auth/SignIn',
        { mobile: data.mobile, otpCode: data.otpCode },
        { headers: { 'Content-Type': 'application/json' } },
      )
      return res.data
    },
    onSuccess: (data) => {
      if (data?.access_token) {
        Cookies.set('accessToken', data.access_token, { expires: 30 })
        toast.success('ورود موفقیت‌آمیز بود.')
        queryClient.invalidateQueries({ queryKey: ['getOtp'] })
        toggleModal()

        if (setIsAuthenticated) {
          setIsAuthenticated(true)
        } else {
          console.error('setIsAuthenticated مقداردهی نشده است!')
        }
      }
    },
    onError: (error: AxiosError) => {
      console.error('Error Object:', error)
      if (error.response) {
        toast.error('مشکلی پیش آمد')
      } else if (error.request) {
        toast.error(
          'مشکلی در اتصال به سرور وجود دارد. لطفاً اینترنت را بررسی کنید.',
        )
      } else {
        toast.error('یک خطای ناشناخته رخ داد. لطفاً دوباره تلاش کنید.')
      }
    },
  })

  const onSubmit = (data: { mobile: string }) => {
    setMobile(data.mobile)
    loginMutation.mutate({ mobile: data.mobile })
  }

  const onOtpSubmit = (data: { mobile: string; otpCode: string }) => {
    otpVerificationMutation.mutate(data)
  }

  if (!isModalOpen) return null

  return (
    <div
      className={`fixed h-full w-full backdrop-blur-sm ${
        isMobile
          ? 'bg-opacity-50 bottom-0'
          : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform'
      } z-100 flex items-center justify-center transition-all duration-500`}
    >
      <div className="relative w-[90%] max-w-[400px] transform rounded-2xl bg-white p-8 shadow-lg transition-all duration-500">
        <h2 className="mb-6 text-center text-2xl font-bold text-[#417F56]">
          ورود به ترخینه
        </h2>
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex justify-center">
            <Logo />
          </div>
          <p className="mb-6 text-sm text-gray-600">
            با وارد کردن شماره موبایل، کد تایید برای شما ارسال خواهد شد.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <input
              type="text"
              placeholder="شماره تلفن"
              {...register('mobile', {
                required: 'شماره تلفن اجباری است',
                pattern: {
                  value: /^09[0-9]{9}$/,
                  message: 'شماره تلفن باید با 09 شروع و ۱۰ رقم باشد',
                },
              })}
              className="mb-4 w-full rounded-xl border border-gray-200 p-3 transition-all duration-300 focus:border-[#417F56] focus:ring-2 focus:ring-[#417F56]/50 focus:outline-none"
            />
            {errors.mobile && (
              <p className="mb-2 text-xs text-red-500">
                {errors.mobile.message}
              </p>
            )}
            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-[#417F56] py-3 text-white transition-colors duration-300 hover:bg-[#365E42] focus:ring-2 focus:ring-[#417F56]/50 focus:outline-none"
            >
              دریافت کد تایید
            </button>
          </form>
          {loginMutation.isSuccess && (
            <form onSubmit={handleSubmit(onOtpSubmit)} className="mt-6 w-full">
              <input
                type="text"
                placeholder="کد تایید"
                {...register('otpCode', {
                  required: 'کد تایید اجباری است',
                  minLength: {
                    value: 5,
                    message: 'کد تایید باید حداقل ۵ رقم باشد',
                  },
                })}
                className="mb-4 w-full rounded-xl border border-gray-200 p-3 transition-all duration-300 focus:border-[#417F56] focus:ring-2 focus:ring-[#417F56]/50 focus:outline-none"
              />
              {errors.otpCode && (
                <p className="mb-2 text-xs text-red-500">
                  {errors.otpCode.message}
                </p>
              )}
              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-[#417F56] py-3 text-white transition-colors duration-300 hover:bg-[#365E42] focus:ring-2 focus:ring-[#417F56]/50 focus:outline-none"
              >
                تایید کد
              </button>
            </form>
          )}
          {timer > 0 && (
            <p className="mt-4 text-xs text-gray-500">
              زمان باقی‌مانده: {Math.floor(timer / 60)}:{timer % 60}
            </p>
          )}
          <p className="mt-6 text-xs text-gray-500">
            ورود و عضویت در ترخینه به منزله{' '}
            <span className="text-[#417F56]">قبول قوانین و مقررات</span> است.
          </p>
        </div>
        <button
          onClick={toggleModal}
          className="absolute top-4 right-4 p-2 text-gray-500 transition-all duration-300 hover:text-gray-700"
        >
          <IoIosClose className="h-6 w-6" />
        </button>
        <button
          onClick={() => setValue('mobile', '')}
          className="absolute top-4 left-4 p-2 text-gray-500 transition-all duration-300 hover:text-gray-700"
        >
          <IoIosArrowBack className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}

export default Modal
