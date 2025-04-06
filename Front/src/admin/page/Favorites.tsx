import HeroTitle from '../components/HeroTitle'
import MyApexChart from '../components/home/MyApexChart'
import Stats from '../components/home/Stats'

export default function Favorites() {
  return (
    <div>
      <HeroTitle name="Dashboard" />
      <Stats />
      <MyApexChart />
    </div>
  )
}
