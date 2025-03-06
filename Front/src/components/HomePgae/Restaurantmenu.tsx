import { images } from '../../constants/ItemSlider'

function Restaurantmenu() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-[rgba(53, 53, 53, 1)] text-center text-2xl font-semibold">
          منوی رستوران{' '}
        </h1>
        <div className="flex gap-2">
          <div className="bg-[rgba(65, 127, 86, 1)] h-[160px] w-[287.5px]">
            <img src={images} alt="" />
          </div>
          <div className="bg-[rgba(65, 127, 86, 1)] h-[160px] w-[287.5px]">
            <img src={images} alt="" />
          </div>
          <div className="bg-[rgba(65, 127, 86, 1)] h-[160px] w-[287.5px]">
            <img src={images} alt="" />
          </div>
          <div className="bg-[rgba(65, 127, 86, 1)] h-[160px] w-[287.5px]">
            <img src={images} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Restaurantmenu
