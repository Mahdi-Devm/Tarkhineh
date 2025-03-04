import { IoIosClose } from 'react-icons/io'
import Logo from '../Logo/Logo'

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
  if (!isModalOpen) return null

  return (
    <div
      className={`fixed ${
        isMobile
          ? 'bg-opacity-50 bottom-0 h-full w-full bg-gray-800'
          : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform'
      } z-50 flex items-center justify-center transition-all duration-300`}
    >
      <div className="relative w-[90%] rounded-lg bg-white p-6 shadow-lg md:w-[400px]">
        <h2 className="mb-4 text-xl font-bold">مدال</h2>

        <div className="flex flex-col items-center text-center">
          <div className="felx items-center justify-center">
            <Logo />
          </div>
          <p className="mb-2 text-sm">ورود / ثبت‌نام</p>
          <p className="mb-4 text-sm text-[#717171]">
            با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.
          </p>

          <input
            type="text"
            placeholder="شماره تلفن"
            className="mb-4 w-full rounded-lg border border-gray-300 p-2 focus:border-black focus:outline-none"
          />

          <button className="w-full rounded-lg bg-[#EDEDED] py-2 text-black transition-colors duration-300 hover:bg-[#e1e0e0]">
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
  )
}

export default Modal
