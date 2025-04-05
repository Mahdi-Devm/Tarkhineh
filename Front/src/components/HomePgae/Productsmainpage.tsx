import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/shopCard/shopCardSlice'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { BASEURL, BASEURLFORIMAGE } from '../../api'
import { CiShoppingCart } from 'react-icons/ci'
import { CiStar } from 'react-icons/ci'
import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useQueryClient } from '@tanstack/react-query'

interface Product {
  id: number
  name: string
  price: number
  rating: number
  image_url: string
  TotalStars: number
}

interface PopulardishesProps {
  data: Product[]
  isLoading: boolean
}

const Productsmainpage: React.FC<PopulardishesProps> = ({
  data,
  isLoading,
}) => {
  const queryClient = useQueryClient()
  const Token = Cookies.get('accessToken')
  const dispatch = useDispatch()
  const [productsPerPage, setProductsPerPage] = useState(
    window.innerWidth >= 1300 ? 5 : 4,
  )
  const [currentIndex, setCurrentIndex] = useState(0)

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
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const showNext = () => {
    if (currentIndex < Math.ceil(data.length / productsPerPage) - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const showPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }
  const setRate = useMutation<void, Error, [number, number]>({
    mutationFn: ([id, rate]) => {
      return fetch(`${BASEURL}/client/star`, {
        headers: {
          'content-Type': 'application/json',
          authorization: `Bearer ${Token}`,
        },
        method: 'POST',
        body: JSON.stringify({
          product_id: id,
          star: rate,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
  })
  const skeletonArray = Array.from({ length: productsPerPage })

  return (
    <section className="mx-auto my-10 flex  w-full flex-col items-center justify-center">
      <div className="mx-auto  rounded-2xl w-full">
        <div className="flex justify-end">
          <h1 className=" mr-8 mb-4 py-2 border-b-1 border-[#417F56] text-right text-2xl font-semibold text-[#313231]">
            غذای ایرانی
          </h1>
        </div>

        <div className="relative mx-auto w-full max-w-full ">
          <div className="overflow-hidden">
            <div
              className="flex   transition-transform duration-500 ease-in-out"
              style={{
                width: `${(isLoading ? skeletonArray.length : data.length) * (100 / productsPerPage)}%`,
                transform: `translateX(-${(currentIndex * 100) / productsPerPage}%)`,
              }}
            >
              {isLoading
                ? skeletonArray.map((_, index) => (
                    <div
                      key={index}
                      className={`w-65 sm:w-1/${productsPerPage} box-border flex-shrink-0 p-2`}
                    >
                      <div className="animate-pulse overflow-hidden rounded-lg border border-gray-200 bg-[#f0f0f0] shadow-lg">
                        <div className="h-48 w-full bg-gray-300"></div>
                        <div className="p-4">
                          <div className="mb-2 h-4 w-3/4 rounded bg-gray-300"></div>
                          <div className="mb-2 h-3 w-1/2 rounded bg-gray-300"></div>
                          <div className="mt-4 h-8 w-full rounded bg-gray-300"></div>
                        </div>
                      </div>
                    </div>
                  ))
                : data.map((product) => (
                    <div
                      key={product.id}
                      className={` mx-3 box-border flex-shrink-0 w-65 sm:w-1/${productsPerPage}`}
                    >
                      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-transform duration-300 hover:scale-105">
                        <img
                          className="h-58 w-full rounded-t-xl object-cover"
                          src={`${BASEURLFORIMAGE}${product.image_url}`}
                          alt={product.name}
                        />
                        <div className="flex flex-col justify-between gap-3 p-4">
                          <div className="flex justify-between">
                            {[...Array(5)].map((_, index) => (
                              <CiStar
                                key={index}
                                className={`w-[25px] cursor-pointer transition-all duration-300 sm:h-[24px] sm:w-[22px] ${index ? 'text-yellow-400' : 'text-gray-500'}`}
                                onClick={() => {
                                  console.log(typeof product.id, typeof index)
                                  setRate.mutate([+product.id, +(index + 1)])
                                }}
                              />
                            ))}
                            <div className="text-right text-sm font-semibold">
                              {product.name}
                            </div>
                          </div>

                          <div className="flex items-center justify-between gap-2">
                            <button
                              onClick={() =>
                                console.log(
                                  'افزودن به علاقه‌مندی‌ها:',
                                  product.id,
                                )
                              }
                              className="flex items-center gap-1 rounded-md border border-gray-300 px-2 py-1 text-sm text-gray-600 transition hover:bg-gray-100"
                            >
                              ❤️ <span>علاقه‌مندی</span>
                            </button>

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
                              className="group flex-1 cursor-pointer rounded-md border border-transparent bg-[#417F56] px-6 py-1 text-sm text-white transition-all duration-300 hover:border-[#417F56] hover:bg-white"
                            >
                              <CiShoppingCart className="mx-auto text-2xl transition-all duration-300 group-hover:text-[#417F56]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
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
    </section>
  )
}

export default Productsmainpage
