import Restaurantmenu from '../components/HomePgae/Restaurantmenu'
import SliderNext from '../components/SLider/SliderNext'
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

      <ArticleSkeleton />
    </div>
  )
}

export default MainPage
