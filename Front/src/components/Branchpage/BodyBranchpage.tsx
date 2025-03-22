import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import 'react-toastify/dist/ReactToastify.css'
import Cookies from 'js-cookie'
import Populardishes from './Populardishes'
import Iraniancuisine from './Iraniancuisine'
import Preferences from './Preferences'

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
      'http://localhost:3000/api/v1/admin/products/subCategory/28?page=1',
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

interface BodyBranchpageProps {
  FaChevronLeft: React.ComponentType
  FaChevronRight: React.ComponentType
}

const BodyBranchpage: React.FC<BodyBranchpageProps> = () => {
  const { data, isLoading } = useQuery<Product[]>({
    queryKey: ['fetchProducts'],
    queryFn: fetchProducts,
  })

  if (isLoading) return <p>Loading...</p>

  return (
    <section className="flex flex-col items-center justify-center">
      <Preferences
        FaChevronRight={FaChevronRight}
        FaChevronLeft={FaChevronLeft}
        data={data ?? []}
      />
      <Populardishes
        FaChevronRight={FaChevronRight}
        FaChevronLeft={FaChevronLeft}
        data={data ?? []}
      />
      <Iraniancuisine
        FaChevronRight={FaChevronRight}
        FaChevronLeft={FaChevronLeft}
        data={data ?? []}
      />
    </section>
  )
}

export default BodyBranchpage
