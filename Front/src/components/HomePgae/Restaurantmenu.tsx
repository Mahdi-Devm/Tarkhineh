import { descriptions, images } from '../../constants/ItemMenuRes'

function Restaurantmenu() {
  return (
    <div className="relative flex h-[500px] items-center justify-center">
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="mb-6 text-center text-3xl font-bold text-[rgba(53,53,53,1)]">
          منوی رستوران
        </h1>
        <div className="mt-25 flex flex-wrap justify-center gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative flex h-[220px] w-[280px] flex-col items-center justify-center rounded-lg bg-[#417F56] shadow-xl"
            >
              <img
                src={img}
                alt={`Food item ${index + 1}`}
                className={`absolute left-1/2 z-20 -translate-x-1/2 transform object-cover transition-all duration-300 ${
                  index === 0 ? '-top-40 w-[260px]' : '-top-25 w-[260px]'
                }`}
              />

              <div className="absolute -bottom-6 h-[48px] w-[180px] rounded-[4px] bg-[#F9F9F9] p-[8px] text-center text-[20px] font-medium font-semibold text-gray-700 shadow-md">
                {descriptions[index]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Restaurantmenu
