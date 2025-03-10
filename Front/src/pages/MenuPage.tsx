import { useQuery } from '@tanstack/react-query'
import SimpleSlider from '../components/SLider/SliderNext'

const fetchCategories = async () => {
  const response = await fetch(
    'http://localhost:3000/api/v1/admin/category?page=1',
  )
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

  return (
    <div>
      <SimpleSlider />
    </div>
  )
}

export default MenuPage
