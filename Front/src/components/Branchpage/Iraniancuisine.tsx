import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/shopCard/shopCardSlice'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
  rating: number
  image_url: string
}
interface IraniancuisineProps {
  FaChevronRight: React.ComponentType
  FaChevronLeft: React.ComponentType
  data: Product[]
}

const Iraniancuisine: React.FC<IraniancuisineProps> = ({
  FaChevronRight,
  FaChevronLeft,
  data,
}) => {
  const dispatch = useDispatch()
  const [productsPerPage, setProductsPerPage] = useState(
    window.innerWidth >= 1300 ? 5 : 4,
  )
  const [currentIndex3, setCurrentIndex3] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProductsPerPage(2)
      } else if (window.innerWidth < 1300) {
        setProductsPerPage(4)
      } else {
        setProductsPerPage(5)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const showNext = () => {
    if (currentIndex3 < (data.length ?? 0) - productsPerPage) {
      setCurrentIndex3(currentIndex3 + 1)
      const slider = document.getElementById('product-slider-3')
      if (slider) {
        slider.style.transform = `translateX(-${(currentIndex3 + 1) * (100 / productsPerPage)}%)`
      }
    }
  }

  const showPrev = () => {
    if (currentIndex3 > 0) {
      setCurrentIndex3(currentIndex3 - 1)
      const slider = document.getElementById('product-slider-3')
      if (slider) {
        slider.style.transform = `translateX(-${(currentIndex3 - 1) * (100 / productsPerPage)}%)`
      }
    }
  }

  return (
    <div className="relative mx-auto mt-5 w-[1300px] max-w-full p-5">
      <h1 className="mt-5 mr-8 text-right text-2xl font-semibold">
        غذاهای غیر ایرانی
      </h1>
      <div className="overflow-hidden">
        <div
          id="product-slider-3"
          className="flex transition-transform duration-500 ease-in-out"
          style={{ width: `${data.length * (100 / productsPerPage)}%` }}
        >
          {data.map((product: Product) => (
            <div
              key={product.id}
              className={`w-1/${productsPerPage} box-border flex-shrink-0 p-2`}
            >
              <div className="overflow-hidden rounded-lg border border-gray-200 shadow-lg transition-transform hover:scale-105">
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
                      <span className="text-yellow-400">⭐4</span>
                      <span className="text-gray-700">{product.rating}</span>
                    </div>
                    <button
                      className="rounded bg-gray-200 text-[15px] text-gray-700 hover:bg-gray-300"
                      onClick={() =>
                        console.log('افزودن به علاقه‌مندی‌ها:', product.id)
                      }
                    >
                      ❤️ افزودن به علاقه‌مندی‌ها
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      dispatch(addProduct(product))
                      toast.success(
                        '✅ محصول با موفقیت به سبد خرید اضافه شد!',
                        {
                          position: 'top-right',
                          autoClose: 2000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: 'colored',
                        },
                      )
                    }}
                    className="mt-3 w-[210px] rounded bg-[#417F56] py-1 text-white transition-all duration-300 hover:bg-[#326141]"
                  >
                    افزودن به سبد
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={showPrev} // اصلاح اینجا
        className="absolute top-1/2 left-2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white shadow-lg hover:bg-gray-600"
      >
        <FaChevronLeft className="text-xl" />
      </button>
      <button
        onClick={showNext} // اصلاح اینجا
        className="absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white shadow-lg hover:bg-gray-600"
      >
        <FaChevronRight className="text-xl" />
      </button>
    </div>
  )
}

export default Iraniancuisine
