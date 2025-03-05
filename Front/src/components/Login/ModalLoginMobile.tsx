import { IoIosClose } from 'react-icons/io'
import Logo from '../Logo/Logo'

const ModalLoginMobile = ({
  isOpen,
  toggleModal,
}: {
  isOpen: boolean
  toggleModal: () => void
}) => {
  return (
    <div>
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

            <input
              type="text"
              placeholder="شماره تلفن"
              className="mb-4 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            />

            <button className="w-full rounded-lg bg-[#365E42] py-2 text-gray-300 transition-colors duration-300 hover:text-gray-400">
              ادامه
            </button>

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
    </div>
  )
}

export default ModalLoginMobile
