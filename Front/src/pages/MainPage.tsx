import Restaurantmenu from '../components/HomePgae/Restaurantmenu'
import SliderNext from '../components/SLider/SliderNext'
import ArticleSkeleton from '../components/HomePgae/ArticleSkeleton'
import Supporters from '../components/HomePgae/Supporters'
import SiteExplanation from '../components/HomePgae/SiteExplanation'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { BASEURL } from '../api'
import axios from 'axios'
import Productsmainpage from '../components/HomePgae/Productsmainpage'

import Productsmainpage2 from '../components/HomePgae/Productsmainpage2'
interface Product {
  id: number
  name: string
  price: number
  rating: number
  image_url: string
}

const fetchProducts = async (): Promise<Product[]> => {
  const token = Cookies.get('accessToken')
  try {
    const res = await axios.get(`${BASEURL}/client/products/5?page=1`, {
      method: 'GET',
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
      },
    })
    console.log(res.data.products)

    return res.data.products
  } catch (err) {
    console.error(err)
    throw new Error('Failed to fetch products')
  }
}
const fetchProduct = async (): Promise<Product[]> => {
  const token = Cookies.get('accessToken')
  try {
    const res = await axios.get(`${BASEURL}/client/products/5?page=1`, {
      method: 'GET',
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
      },
    })
    console.log(res.data.products)

    return res.data.products
  } catch (err) {
    console.error(err)
    throw new Error('Failed to fetch products')
  }
}

function MainPage() {
  const { data, isLoading } = useQuery<Product[]>({
    queryKey: ['fetchProductsmainpage'],
    queryFn: fetchProducts,
  })
  const { data: fetchProducts2, isLoading: fetchProducts2isLoading } = useQuery<
    Product[]
  >({
    queryKey: ['fetchProductsmainpage2'],
    queryFn: fetchProduct,
  })
  const safeData =
    data?.map((product) => ({
      ...product,
      TotalStars: product.rating * 3,
    })) ?? []
  const safeData2 =
    fetchProducts2?.map((product) => ({
      ...product,
      TotalStars: product.rating * 3,
    })) ?? []
  return (
    <div className="flex flex-col">
      <SliderNext />
      <Restaurantmenu />
      <Supporters />
      <Productsmainpage data={safeData} isLoading={isLoading} />
      <SiteExplanation />
      <Productsmainpage2 data={safeData2} isLoading={fetchProducts2isLoading} />

      <ArticleSkeleton />
    </div>
  )
}

export default MainPage
