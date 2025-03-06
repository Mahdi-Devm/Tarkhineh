import Restaurantmenu from '../components/HomePgae/Restaurantmenu'
import SliderNext from '../components/SLider/SliderNext'
import IconsMainPageServices from '../components/HomePgae/IconsMainPageServices'
import ImageMainPageServices from '../components/HomePgae/ImageMainPageServices'
import InformationMAinPageServices from '../components/HomePgae/InformationMAinPageServices'

function MainPage() {
  return (
    <div className="flex flex-col">
      <SliderNext />
      <Restaurantmenu />
      <div className="relative flex h-auto w-full items-center justify-center rounded-xl py-8 text-center sm:h-[390px]">
        <ImageMainPageServices />

        <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-white sm:flex-row sm:gap-10">
          <IconsMainPageServices />

          <InformationMAinPageServices />
        </div>
      </div>
    </div>
  )
}

export default MainPage
