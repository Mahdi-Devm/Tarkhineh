import { images } from '../../constants/ItemMenuRes'

function Restaurantmenu() {
  return (
    <div className="relative flex h-[400px] items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 h-1/2 w-full"></div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="mb-4 text-center text-2xl font-semibold text-[rgba(53,53,53,1)]">
          منوی رستوران
        </h1>
        <div className="flex gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative h-[160px] w-[287.5px] overflow-hidden rounded-lg bg-white shadow-lg"
            >
              <img
                src={img}
                alt={`Food item ${index + 1}`}
                className="absolute -top-8 left-1/2 h-auto w-[180px] -translate-x-1/2 transform object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Restaurantmenu
