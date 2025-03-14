import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'

const fetchProducts = async () => {
  try {
    const res = await axios.get(
      'http://localhost:3000/api/v1/admin/products/subCategory/28?page=1',
    )
    return res.data.products
  } catch (err) {
    console.error(err)
    throw new Error('Failed to fetch products')
  }
}

function BodyBranchpage() {
  const { data, isLoading } = useQuery({
    queryKey: ['fetchProducts'],
    queryFn: fetchProducts,
  })

  const productsPerPage = window.innerWidth >= 1300 ? 5 : 4
  const [currentIndex1, setCurrentIndex1] = useState(0)
  const [currentIndex2, setCurrentIndex2] = useState(0)
  const [currentIndex3, setCurrentIndex3] = useState(0)

  const showNext = (sliderId, currentIndex, setCurrentIndex) => {
    if (currentIndex < data.length - productsPerPage) {
      setCurrentIndex(currentIndex + 1)
      const slider = document.getElementById(sliderId)
      slider.style.transform = `translateX(-${(currentIndex + 1) * (100 / productsPerPage)}%)`
    }
  }

  const showPrev = (sliderId, currentIndex, setCurrentIndex) => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      const slider = document.getElementById(sliderId)
      slider.style.transform = `translateX(-${(currentIndex - 1) * (100 / productsPerPage)}%)`
    }
  }

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <h1 className="mt-5 mr-8 text-right text-2xl font-semibold">
        پیشنهاد ویژه
      </h1>
      <div className="relative mx-auto w-[1300px] max-w-full p-5">
        <div className="overflow-hidden">
          <div
            id="product-slider-1"
            className="flex transition-transform duration-500 ease-in-out"
            style={{ width: `${data.length * (100 / productsPerPage)}%` }}
          >
            {data.map((product) => (
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
                      className="mt-3 w-[210px] rounded bg-[#417F56] py-1 text-white transition-all duration-300 hover:bg-[#326141]"
                      onClick={() =>
                        console.log('افزودن به سبد خرید:', product.id)
                      }
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
          onClick={() =>
            showPrev('product-slider-1', currentIndex1, setCurrentIndex1)
          }
          className="absolute top-1/2 left-2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white shadow-lg hover:bg-gray-600"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        <button
          onClick={() =>
            showNext('product-slider-1', currentIndex1, setCurrentIndex1)
          }
          className="absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white shadow-lg hover:bg-gray-600"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>

      <div className="h-[455px] w-[1400px] rounded-2xl bg-[#315F41]">
        <h1 className="mt-5 mr-8 text-right text-2xl font-semibold">
          غذاهای محبوب
        </h1>
        <div className="relative mx-auto w-[1300px] max-w-full p-5">
          <div className="overflow-hidden">
            <div
              id="product-slider-2"
              className="flex transition-transform duration-500 ease-in-out"
              style={{ width: `${data.length * (100 / productsPerPage)}%` }}
            >
              {data.map((product) => (
                <div
                  key={product.id}
                  className={`w-1/${productsPerPage} box-border flex-shrink-0 p-2`}
                >
                  <div className="overflow-hidden rounded-lg border border-gray-200 bg-[#e5e5e5] shadow-lg transition-transform hover:scale-105">
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
                        className="mt-3 w-[210px] rounded bg-[#417F56] py-1 text-white transition-all duration-300 hover:bg-[#326141]"
                        onClick={() =>
                          console.log('افزودن به سبد خرید:', product.id)
                        }
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
            onClick={() =>
              showPrev('product-slider-2', currentIndex2, setCurrentIndex2)
            }
            className="absolute top-1/2 left-2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white shadow-lg hover:bg-gray-600"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button
            onClick={() =>
              showNext('product-slider-2', currentIndex2, setCurrentIndex2)
            }
            className="absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white shadow-lg hover:bg-gray-600"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>
      </div>

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
            {data.map((product) => (
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
                      className="mt-3 w-[210px] rounded bg-[#417F56] py-1 text-white transition-all duration-300 hover:bg-[#326141]"
                      onClick={() =>
                        console.log('افزودن به سبد خرید:', product.id)
                      }
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
          onClick={() =>
            showPrev('product-slider-3', currentIndex3, setCurrentIndex3)
          }
          className="absolute top-1/2 left-2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white shadow-lg hover:bg-gray-600"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        <button
          onClick={() =>
            showNext('product-slider-3', currentIndex3, setCurrentIndex3)
          }
          className="absolute top-1/2 right-2 -translate-y-1/2 transform rounded-full bg-gray-700 p-2 text-white shadow-lg hover:bg-gray-600"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>
    </>
  )
}

export default BodyBranchpage
