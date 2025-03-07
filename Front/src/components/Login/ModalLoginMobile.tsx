import { IoIosClose } from 'react-icons/io'
import Logo from '../Logo/Logo'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import axios, { AxiosError } from 'axios'

interface FormData {
  mobile: string
  otpCode: string
}

const ModalLoginMobile = ({
  isOpen,
  toggleModal,
}: {
  isOpen: boolean
  toggleModal: () => void
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const queryClient = useQueryClient()

  const loginMutation = useMutation({
    mutationFn: async (data: { mobile: string }): Promise<any> => {
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
        throw new Error('مشکلی پیش آمد')
      }

      const dataResponse = await res.json()
      return dataResponse
    },
    onSuccess: (data) => {
      alert(`OTP ارسال شد: ${data}`)
      queryClient.invalidateQueries(['getOtp'])
    },
    onError: (error: AxiosError) => {
      console.log('🔴 خطای سرور:', error.message)
      alert(`خطا: ${error.message || 'مشکلی پیش آمد'}`)
    },
  })

  const otpVerificationMutation = useMutation({
    mutationFn: async (data: {
      mobile: string
      otpCode: string
    }): Promise<any> => {
      const payload = { mobile: data.mobile, otpCode: data.otpCode }
      console.log(payload)
      const res = await axios.post(
        'http://localhost:3000/api/v1/client/auth/SignIn',
        payload,
        {
          headers: { 'Content-Type': 'application/json' },
        },
      )
      return res.data
    },
    onSuccess: () => {
      alert('ورود موفقیت‌آمیز بود.')
      queryClient.invalidateQueries(['getOtp'])
      toggleModal()
    },
    onError: (error: AxiosError) => {
      console.log('🔴 خطای سرور:', error.response?.data)
      alert(`خطا: ${error.response?.data?.message || 'مشکلی پیش آمد'}`)
    },
  })

  const onSubmit = (data: { mobile: string }) => {
    loginMutation.mutate({ mobile: data.mobile })
    console.log(data.mobile)
  }

  const onOtpSubmit = (data: { mobile: string; otpCode: string }) => {
    otpVerificationMutation.mutate(data)
  }

  if (!isOpen) return null

  return (
    <div
      className={`fixed bottom-0 left-0 h-full w-full backdrop-blur-sm transition-all duration-500 ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      } z-50 flex items-center justify-center`}
    >
      <div className="relative mt-100 h-160 w-full max-w-[500px] rounded-t-3xl bg-stone-50 p-6 shadow-lg">
        <div className="mt-5 flex justify-center">
          <Logo />
        </div>

        <div className="mt-10 text-center">
          <p className="mb-2 text-sm">ورود / ثبت‌نام</p>
          <p className="mb-4 text-sm text-[#717171]">
            با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <input
              type="text"
              placeholder="شماره تلفن"
              {...register('mobile', {
                required: 'شماره تلفن اجباری است',
                pattern: {
                  value: /^09[0-9]{9}$/,
                  message: 'شماره تلفن باید با 091 شروع و ۱۰ رقم باشد',
                },
              })}
              className="mb-4 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            />
            {errors.mobile && (
              <p className="text-xs text-red-500">{errors.mobile.message}</p>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-[#365E42] py-2 text-gray-300 transition-colors duration-300 hover:text-gray-400"
            >
              ادامه
            </button>
          </form>

          {loginMutation.isSuccess && (
            <form onSubmit={handleSubmit(onOtpSubmit)} className="mt-4 w-full">
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
                className="mb-4 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              />
              {errors.otpCode && (
                <p className="text-xs text-red-500">{errors.otpCode.message}</p>
              )}

              <button
                type="submit"
                className="w-full rounded-lg bg-[#365E42] py-2 text-gray-300 transition-colors duration-300 hover:text-gray-400"
              >
                تایید کد
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-gray-500">
            ورود و عضویت در ترخینه به منزله{' '}
            <span className="text-[#417F56]">قبول قوانین و مقررات</span> است.
          </p>
        </div>

        <button
          onClick={toggleModal}
          className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700"
        >
          <IoIosClose className="h-[24px] w-[24px]" />
        </button>
      </div>
    </div>
  )
}

export default ModalLoginMobile
