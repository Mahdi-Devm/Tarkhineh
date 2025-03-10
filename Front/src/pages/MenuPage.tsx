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

  console.log(data)

  if (data && data.length > 0) {
    data.forEach((category) => {
      console.log(category.title)
    })
  }

  const limitedData = data.slice(0, 4)

  return (
    <div>
      <SimpleSlider />
      <div className="gap mt-5 flex h-[64px] w-full items-center justify-end gap-[32px] rounded-2xl bg-[#EDEDED] p-7 shadow-lg">
        {limitedData.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer text-[20px] text-[#717171] transition-all duration-300 ease-in-out hover:scale-105 hover:text-[#417F56] hover:shadow-md"
          >
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuPage
