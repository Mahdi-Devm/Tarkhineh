import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'
import Cookies from 'js-cookie'
import Populardishes from './Populardishes'
import Iraniancuisine from './Iraniancuisine'
import Preferences from './Preferences'
import { BASEURL } from '../../api'

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
    const res = await axios.get(
      `${BASEURL}/admin/products/subCategory/28?page=1`,
      {
        method: 'GET',
        headers: {
          Accept: '*/*',
          Authorization: `Bearer ${token}`,
        },
      },
    )
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

  if (isLoading) return <p>Loading...</p>

  return (
    <section className="flex flex-col items-center justify-center">
      <Preferences data={data ?? []} />
      <Populardishes data={data ?? []} />
      <Iraniancuisine data={data ?? []} />
    </section>
  )
}

export default BodyBranchpage
