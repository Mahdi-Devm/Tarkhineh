import { FiChevronDown } from 'react-icons/fi'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import SimpleSlider from '../components/SLider/SliderNext'

const fakeCategories = [
  'غذاهای ایرانی',
  'غذاهای فست فود',
  'غذاهای دریایی',
  'غذاهای بین‌المللی',
  'پیش‌غذاها',
  'دسرها',
  'نوشیدنی‌ها',
]

const fetchCategories = async () => {
  const response = await fetch('/api/v1/admin/category?page=1')

  if (!response.ok) {
    throw new Error('خطا در دریافت داده‌ها')
  }
  const data = await response.json()
  return data.categories
}

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('غذاهای ایرانی')

  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['main category'],
    queryFn: fetchCategories,
  })

  if (isLoading)
    return <p className="text-center text-gray-500">در حال بارگذاری...</p>
  if (error) {
    console.log(error)
    return <p className="text-center text-red-500">خطا در دریافت داده‌ها</p>
  }

  const limitedData = data.slice(0, 4)

  return (
    <>
      <SimpleSlider />

      <div className="container mx-auto px-5">
        <div className="mt-5 flex h-16 w-full items-center justify-end gap-8 rounded-2xl bg-[#F8F8F8] p-7 shadow-md">
          {limitedData.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer text-lg font-medium text-[#5A5A5A] transition-all duration-300 ease-in-out hover:scale-110 hover:font-bold hover:text-[#417F56]"
            >
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 flex w-full max-w-3xl items-center gap-4">
          <form className="flex-1">
            <input
              className="h-12 w-full rounded-full bg-[#ECECEC] px-5 text-black transition-all duration-300 outline-none focus:bg-white focus:ring-2 focus:ring-[#417F56]"
              type="text"
              placeholder="جستجو..."
            />
          </form>

          <div className="relative w-52">
            <select
              value={selectedCategory}
              onChange={handleChange}
              className="h-12 cursor-pointer appearance-none rounded-full bg-[#417F56] px-6 pr-10 text-white shadow-md transition-all duration-300 outline-none hover:bg-[#355E44] hover:shadow-lg focus:ring-2 focus:ring-[#2E5E3A]"
            >
              {fakeCategories.map((category, index) => (
                <option key={index} value={category} className="text-black">
                  {category}
                </option>
              ))}
            </select>

            <FiChevronDown className="absolute top-1/2 right-10 -translate-y-1/2 text-xl text-white transition-transform duration-300 ease-in-out" />
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuPage
