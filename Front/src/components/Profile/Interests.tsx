import HeaderListProfile from './HeaderListProfile'
import Cookies from 'js-cookie'
import { useQuery } from '@tanstack/react-query'
import { BASEURL } from '../../api'
import { addProduct } from '../../redux/shopCard/shopCardSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

interface Interest {
  name: string
}

interface Product {
  name: string
  price: number
  image_url: string
}

interface Like {
  product: Product
}

const dataInterests: Interest[] = [
  { name: 'همه' },
  { name: 'غذاهای اصلی' },
  { name: 'پیش‌غذا' },
  { name: 'دسر' },
  { name: 'نوشیدنی' },
]

const token = Cookies.get('accessToken') || ''

const fetchData = async (): Promise<Like[]> => {
  const response = await fetch(`${BASEURL}/client/likes`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error('خطا در دریافت اطلاعات')
  }

  return response.json()
}

function Interests() {
  const { data, isLoading, error } = useQuery<Like[]>({
    queryKey: ['client'],
    queryFn: fetchData,
  })

  const [filterData, setFilterData] = useState(data)
  
  const handleFilter = (e: any) => {
    const filteredData = data?.filter((item) => item.product.name.toLowerCase().includes(e.target.value.toLowerCase()))

    if (e.target.value === '') {
      setFilterData(data)
      return
    }
    
    setFilterData(filteredData)
  }

  const dispatch = useDispatch()

  if (isLoading) return <p>در حال بارگذاری...</p>
  if (error) return <p>مشکلی پیش آمده است!</p>

  return (
    <div className="p-4">
      <HeaderListProfile title="علاقمندی‌ها" />

      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
        <input
          className="h-[41px] w-full max-w-md rounded-2xl bg-stone-100 p-2"
          type="text"
          placeholder="جستجو"
          onChange={(e) => handleFilter(e)}
        />
        <div className="flex w-full gap-2 overflow-x-auto md:justify-center">
          {dataInterests.map((item) => (
            <p
              key={item.name}
              className="cursor-pointer rounded-2xl bg-[#EDEDED] px-4 py-2 text-sm whitespace-nowrap hover:bg-[#417F56] hover:text-white"
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filterData?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 rounded-2xl bg-white p-4 shadow-md transition hover:scale-105 hover:shadow-lg"
          >
            <img
              src={item.product.image_url}
              alt={item.product.name}
              className="h-[180px] w-full max-w-xs rounded-lg object-cover"
            />
            <h2 className="text-lg font-semibold">{item.product.name}</h2>
            <p className="text-[#717171]">تومان {item.product.price}</p>
            <button
              onClick={() => {
                dispatch(addProduct(item.product))
              }}
              className="h-[40px] w-[80%] rounded-md bg-[#417F56] text-white hover:bg-[#315A3D]"
            >
              افزودن به سبد خرید
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Interests
