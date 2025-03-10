import { useQuery } from '@tanstack/react-query'
import SimpleSlider from '../components/SLider/SliderNext'

const fetchCategories = async () => {
  const response = await fetch('/api/v1/admin/category?page=1')

  if (!response.ok) {
    throw new Error('خطا در دریافت داده‌ها')
  }
  const data = await response.json()
  return data.categories
}

const MenuPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['main category'],
    queryFn: fetchCategories,
  })

  if (isLoading) return <p>در حال بارگذاری کاربران...</p>
  if (error) {
    console.log(error)
    return <p>خطا در دریافت داده‌ها</p>
  }

  const limitedData = data.slice(0, 4)

  return (
    <>
      <SimpleSlider />
      <div className="container mx-auto px-5">
        <div className="mt-5 flex h-16 w-full items-center justify-end gap-8 rounded-2xl bg-[#EDEDED] p-7 shadow-lg">
          {limitedData.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer text-lg font-medium text-[#717171] transition-all duration-300 ease-in-out hover:scale-105 hover:font-bold hover:text-[#417F56]"
            >
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 flex w-full max-w-3xl items-center gap-4">
          <form className="flex-1">
            <input
              className="h-12 w-full rounded-full bg-[#CBCBCB] px-5 text-black transition-all duration-300 outline-none focus:bg-white focus:ring-2 focus:ring-[#417F56]"
              type="text"
              placeholder="جستجو..."
            />
          </form>

          <div className="flex h-12 items-center justify-center rounded-full bg-[#417F56] px-5 text-white shadow-md transition-all duration-300 hover:bg-[#355E44] hover:shadow-lg">
            <span className="text-lg font-semibold">🍽 غذاهای ایرانی</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuPage
