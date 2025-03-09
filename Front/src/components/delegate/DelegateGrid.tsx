import { DataDelegate } from '../../constants/Datadelegate'

function DelegateGrid() {
  return (
    <div className="mt-8">
      <div className="mx-auto grid max-w-[1224px] grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
        {DataDelegate.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center rounded-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="mb-4 h-[100px] w-[100px] rounded-lg object-cover sm:h-[100px] sm:w-[100px]"
            />
            <h3 className="text-center text-lg font-semibold text-[#353535] sm:text-sm">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DelegateGrid
