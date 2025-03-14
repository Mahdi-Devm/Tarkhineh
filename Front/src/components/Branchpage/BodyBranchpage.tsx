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
    <div className="flex flex-wrap gap-5 p-5">
      {data.map((product) => (
        <div
          key={product.id}
          className="w-64 overflow-hidden rounded-lg border border-gray-200 shadow-lg transition-transform hover:scale-105"
        >
          <img
            className="h-48 w-full object-cover"
            src={`http://localhost:3000/${product.image_url}`}
            alt={product.name}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">⭐</span>
                <span className="text-gray-700">{product.rating}</span>{' '}
              </div>
              <button
                className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
                onClick={() => console.log('افزودن به سبد خرید:', product.id)}
              >
                افزودن به سبد
              </button>
            </div>
            <button
              className="mt-2 w-full rounded bg-gray-200 px-3 py-1 text-gray-700 hover:bg-gray-300"
              onClick={() =>
                console.log('افزودن به علاقه‌مندی‌ها:', product.id)
              }
            >
              ❤️ افزودن به علاقه‌مندی‌ها
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BodyBranchpage
