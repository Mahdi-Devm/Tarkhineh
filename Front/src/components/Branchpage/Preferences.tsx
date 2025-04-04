import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/shopCard/shopCardSlice'
import { toast } from 'react-toastify'
import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { BASEURL } from '../../api'

interface Product {
  id: number
  name: string
  price: number
  rating: number
  image_url: string
}

interface PreferencesProps {
  data: Product[]
  isLoading: boolean
}

const SkeletonCard = () => (
  <div className="box-border w-65 flex-shrink-0 p-2 sm:w-1/4">
    <div className="flex h-[455px] animate-pulse flex-col justify-between rounded-lg border border-gray-200 bg-gray-100 p-4 shadow-md">
      <div className="h-48 w-full rounded-md bg-gray-200" />
      <div className="mt-4 space-y-3">
        <div className="h-6 w-2/3 rounded-md bg-gray-200" />
        <div className="h-4 w-1/2 rounded-md bg-gray-200" />
        <div className="h-4 w-full rounded-md bg-gray-200" />
        <div className="mt-6 h-10 w-full rounded-md bg-gray-200" />
      </div>
    </div>
  </div>
)

const Preferences: React.FC<PreferencesProps> = ({ data, isLoading }) => {
  const dispatch = useDispatch()
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [productsPerPage, setProductsPerPage] = useState<number>(
    window.innerWidth >= 1300 ? 5 : 4,
  )

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

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const showNext = () => {
    if (currentIndex < data.length - productsPerPage) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const showPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className="h-[455px] w-93 max-w-[1400px] rounded-2xl sm:w-[90%] md:w-[80%] lg:w-[90%]">
      <h1 className="mt-5 mr-8 text-right text-2xl font-semibold text-black">
        غذاهای محبوب
      </h1>

      <div className="relative mx-auto w-full max-w-full p-5">
        <div className="overflow-hidden">
          {isLoading ? (
            <div className="flex w-full overflow-hidden">
              {[...Array(productsPerPage)].map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          ) : (
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / productsPerPage)}%)`,
                width: `${data.length * (100 / productsPerPage)}%`,
              }}
            >
              {data.map((product) => (
                <div
                  key={product.id}
                  className={`w-65 sm:w-1/${productsPerPage} box-border flex-shrink-0 p-2`}
                >
                  <div className="overflow-hidden rounded-lg border border-gray-200 bg-[#e5e5e5] shadow-lg transition-transform hover:scale-105">
                    <img
                      className="h-48 w-full object-cover"
                      src={`${BASEURL}/${product.image_url}`}
                      alt={product.name}
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-gray-600">${product.price}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400">⭐4</span>
                          <span className="text-gray-700">
                            {product.rating}
                          </span>
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
                        className="mt-3 w-full rounded bg-[#417F56] py-1 text-white transition-all duration-300 hover:bg-[#326141] sm:w-[210px]"
                      >
                        افزودن به سبد
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {!isLoading && (
          <>
            <button
              onClick={showPrev}
              className="absolute top-1/2 left-2 -translate-y-1/2 transform rounded-full bg-white/80 p-2 text-black/40 shadow-lg backdrop-blur-sm"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            <button
              onClick={showNext}
              className="absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full bg-white/80 p-2 text-black/40 shadow-lg backdrop-blur-sm"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Preferences
