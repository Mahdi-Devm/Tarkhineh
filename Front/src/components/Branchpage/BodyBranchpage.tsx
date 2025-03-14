import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchProducts = async function () {
  try {
    const res = await axios.get(
      'http://localhost:3000/api/v1/admin/products/subCategory/28?page=1',
    )
    console.log(res.data.products)
    return res.data.products
  } catch (err) {
    console.error(err)
    throw new Error('Failed to fetch products')
  }
}

function BodyBranchpage() {
  const { data, isLoading } = useQuery({
    queryKey: ['fetchProducts'],
    queryFn: fetchProducts,
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {data.map((Product) => (
        <div key={Product.id}>
          {Product.name}
          {Product.price}
          <img
            className="w-50"
            src={`http://localhost:3000/${Product.image_url}`}
          />
        </div>
      ))}
    </div>
  )
}

export default BodyBranchpage
