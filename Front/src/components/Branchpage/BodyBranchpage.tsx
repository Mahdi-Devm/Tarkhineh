import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'
import Cookies from 'js-cookie'
import Populardishes from './Populardishes'
import Iraniancuisine from './Iraniancuisine'
import Preferences from './Preferences'
import { BASEURL } from '../../api'
import { Product } from '../../types/Product'

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
    return res.data.products
  } catch (err) {
    console.error(err)
    throw new Error('Failed to fetch products')
  }
}

const BodyBranchpage: React.FC = () => {
  const { data, isLoading } = useQuery<Product[]>({
    queryKey: ['fetchProducts'],
    queryFn: fetchProducts,
  })
  const safeData: Product[] = data ?? []
  return (
    <section className="flex flex-col items-center justify-center">
      <Preferences data={safeData} isLoading={isLoading} />

      <Populardishes data={safeData} isLoading={isLoading} />
      <Iraniancuisine data={safeData} isLoading={isLoading} />
    </section>
  )
}

export default BodyBranchpage
