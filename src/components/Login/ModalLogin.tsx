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
      <div className="relative w-[90%] rounded-lg bg-white p-4 shadow-lg md:w-[400px]">
        <h2>مدال</h2>
        <div>
          <div>
            <Logo />
          </div>
          <p>ورود / ثبت ‌نام</p>
          <p>با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.</p>
          <input type="text" placeholder="شماره تلفن" />
          <button>ادامه</button>
          <p>ورود و عضویت در ترخینه به منزله قبول قوانین و مقررات است.</p>
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
