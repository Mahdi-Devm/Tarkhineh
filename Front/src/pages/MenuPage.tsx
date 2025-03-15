import { FiChevronDown } from 'react-icons/fi'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import SimpleSlider from '../components/SLider/SliderNext'
import { CiShoppingCart } from 'react-icons/ci'
interface Category {
  id: number
  title: string
}

interface SubCategory {
  id: number
  title: string
}

const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch('/api/v1/admin/category?page=1')
  if (!response.ok) {
    throw new Error('خطا در دریافت داده‌ها')
  }
  const data = await response.json()
  return data.categories
}

const fetchSubCategories = async (
  categoryId: number,
): Promise<SubCategory[]> => {
  const response = await fetch(
    `/api/v1/admin/subcategory/category/${categoryId}?page=1`,
  )
  if (!response.ok) {
    throw new Error('خطا در دریافت ساب‌کاتگوری‌ها')
  }
  const data = await response.json()
  console.log('subs',data)
  return data.subCategories
}

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(5)
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('')


  const {
    data: categories,
    isLoading,
    error,
  } = useQuery<Category[], Error>({
    queryKey: ['main category'],
    queryFn: fetchCategories,
  })

  const { data: subCategories, isLoading: subCategoryLoading } = useQuery<
    SubCategory[],
    Error
  >({
    queryKey: ['subcategory', selectedCategory],
    queryFn: () => fetchSubCategories(selectedCategory),
    enabled: !!selectedCategory,
  })

  if (isLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-b-4 border-[#417F56]"></div>
      </div>
    )

  if (error) return <p>خطا در دریافت داده‌ها</p>

  const filteredCategories = categories?.slice(0, 4)

  return (
    <>
      <SimpleSlider />

      <div className="container mx-auto px-5">
        <div className="mt-5 flex flex-wrap items-center justify-end gap-4 rounded-2xl bg-[#F8F8F8] p-7 shadow-md sm:flex-row sm:gap-8">
          {filteredCategories?.map((item) => (
            <div
              key={item.id}
              className={`cursor-pointer text-lg font-medium text-[#5A5A5A] transition-all duration-300 ease-in-out hover:scale-110 hover:font-bold hover:text-[#417F56] ${
                item.id === selectedCategory
                  ? 'scale-110 border-b-2 border-[#417F56] font-bold text-[#417F56]'
                  : ''
              }`}
              onClick={() => setSelectedCategory(item.id)}
            >
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 flex w-full max-w-3xl flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <form className="flex-1">
            <input
              className="h-12 w-full rounded-full bg-[#ECECEC] px-5 text-black transition-all duration-300 outline-none focus:bg-white focus:ring-2 focus:ring-[#417F56]"
              type="text"
              placeholder="جستجو..."
            />
          </form>

          <div className="relative w-full sm:w-52">
            <select
              value={selectedSubCategory}
              onChange={(e) => setSelectedSubCategory(e.target.value)}
              className="h-12 w-full cursor-pointer appearance-none rounded-full bg-[#417F56] px-6 pr-10 text-white shadow-md transition-all duration-300 outline-none hover:bg-[#355E44] hover:shadow-lg focus:ring-2 focus:ring-[#2E5E3A] sm:w-50"
            >
              <option value="">
                {filteredCategories?.find(
                  (category) => category.id === selectedCategory,
                )?.title || 'همه ساب‌کاتگوری‌ها'}
              </option>
              {subCategoryLoading ? (
                <option value="" className="text-gray-500">
                  در حال بارگذاری...
                </option>
              ) : (
                subCategories?.map((subcategory) => (
                  <option
                    key={subcategory.id}
                    value={subcategory.id}
                    className="text-black"
                  >
                    {subcategory.title}
                  </option>
                ))
              )}
            </select>

            <FiChevronDown className="absolute top-1/2 right-5 -translate-y-1/2 text-xl text-white transition-transform duration-300 ease-in-out" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button className="flex h-10 w-44 cursor-pointer items-center justify-center gap-3 rounded-2xl border border-[#417F56] bg-white p-2 text-[#417F56] shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#417F56] hover:text-white">
            <p className="text-base font-medium">تکمیل خرید</p>
            <CiShoppingCart className="h-6 w-6" />
          </button>

          <div>
            <p className="text-2xl font-semibold tracking-wide text-[#353535] capitalize">
              غذاهای ایرانی
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuPage
