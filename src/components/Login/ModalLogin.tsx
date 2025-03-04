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
      <div className="w-[90%] rounded-lg bg-white p-4 shadow-lg md:w-[400px]">
        <h2>مدال</h2>
        <button
          onClick={toggleModal}
          className="mt-4 text-red-500 hover:text-red-700"
        >
          بستن
        </button>
      </div>
    </div>
  )
}

export default Modal
