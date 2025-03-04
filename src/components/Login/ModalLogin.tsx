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
          ? 'bg-opacity-50 bottom-0 h-full w-full bg-gray-800 backdrop-blur-sm'
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

          <input
            type="text"
            placeholder="شماره تلفن"
            className="mb-6 w-full rounded-lg border border-gray-300 p-3 transition-all duration-300 focus:border-blue-500 focus:outline-none"
          />

          <button className="w-full rounded-lg bg-[#417F56] py-3 text-white transition-colors duration-300 hover:bg-[#365E42] focus:outline-none">
            ادامه
          </button>

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
