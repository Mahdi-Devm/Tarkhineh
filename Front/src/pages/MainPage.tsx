import Restaurantmenu from '../components/HomePgae/Restaurantmenu'
import SliderNext from '../components/SLider/SliderNext'
// import IconsMainPageServices from '../components/HomePgae/IconsMainPageServices'
// import ImageMainPageServices from '../components/HomePgae/ImageMainPageServices'
// import InformationMAinPageServices from '../components/HomePgae/InformationMAinPageServices'
import ArticleSkeleton from '../components/HomePgae/ArticleSkeleton'
import Supporters from '../components/HomePgae/Supporters'
import SiteExplanation from '../components/HomePgae/SiteExplanation'

function MainPage() {
  return (
    <div className="flex flex-col">
      <SliderNext />
      <Restaurantmenu />
      <Supporters />
      <SiteExplanation />
      {/* <div className="relative flex h-auto w-full items-center justify-center rounded-xl py-8 text-center sm:h-[390px]">
        <ImageMainPageServices />
        <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-white sm:flex-row sm:gap-10">
          <IconsMainPageServices />

          <InformationMAinPageServices />
        </div>
      </div> */}
      <ArticleSkeleton />
    </div>
  )
}

export default MainPage
