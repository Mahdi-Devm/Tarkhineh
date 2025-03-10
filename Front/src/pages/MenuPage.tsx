import { useParams, useNavigate } from 'react-router-dom'
import SimpleSlider from '../components/SLider/SliderNext'

const MenuPage = () => {
  const { category } = useParams<{ category: string }>()
  const navigate = useNavigate()

  const categories: string[] = ['غذای اصلی', 'پیش غذا', 'دسر', 'نوشیدنی']

  const handleCategoryClick = (category: string) => {
    navigate(`/menu/${category}`)
  }

  return (
    <div>
      <SimpleSlider />

      <ul className="mt-2 flex items-center justify-end gap-2 rounded-2xl bg-[#EDEDED] p-4">
        {categories.map((cat) => (
          <li
            className="cursor-pointer text-[20px] font-medium transition-all duration-300 hover:scale-105 hover:text-blue-500"
            key={cat}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>

      {/* نمایش دسته‌بندی انتخابی */}
      <div>{category && <p>دسته‌بندی انتخابی: {category}</p>}</div>
    </div>
  )
}

export default MenuPage
