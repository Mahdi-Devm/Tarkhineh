import HeaderListProfile from './HeaderListProfile'
import Cookies from 'js-cookie'
import { useQuery } from '@tanstack/react-query'

const dataInterests = [
  { name: 'همه' },
  { name: 'غذاهای اصلی' },
  { name: 'پیش‌غذا' },
  { name: 'دسر' },
  { name: 'نوشیدنی' },
]

const token = Cookies.get('accessToken')

const fetchData = async () => {
  let response = await fetch('http://localhost:3000/api/v1/client/likes', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  return response.json()
}


function Interests() {

  const data = useQuery({
    queryKey: ["client"],
    queryFn: fetchData
  })

  console.log(data.data[0].product.image_url)

  return (
    <div className="p-4">
      <HeaderListProfile tilte="علاقمندی‌ها" />

      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
        <input
          className="h-[41px] w-full max-w-md rounded-2xl bg-stone-100 p-2"
          type="text"
          placeholder="جستجو"
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
        {data.data ? data.data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 rounded-2xl bg-white p-4 shadow-md transition hover:scale-105 hover:shadow-lg"
          >
            <img
              src={`http://localhost:3000/${item.product.image_url}`}
              alt={item.product.name}
              className="h-[180px] w-full max-w-xs rounded-lg object-cover"
            />
            <h2 className="text-lg font-semibold">{item.product.name}</h2>
            <p className="text-[#717171]">تومان {item.product.price}</p>
            <button className="h-[40px] w-[80%] rounded-md bg-[#417F56] text-white hover:bg-[#315A3D]">
              افزودن به سبد خرید
            </button>
          </div> 
        )) : ''}
      </div>
    </div>
  )
}

export default Interests
