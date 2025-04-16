import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/shopCard/shopCardSlice'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { CiShoppingCart } from 'react-icons/ci'
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './swiper-custom.css'

interface Product {
  id: number
  name: string
  price: number
  rating: number
  image_url: string
}

interface PopulardishesProps {
  data: Product[]
  isLoading: boolean
}

const Preferences: React.FC<PopulardishesProps> = ({ data, isLoading }) => {
  const dispatch = useDispatch()
  const [slidesPerView, setSlidesPerView] = useState(
    window.innerWidth >= 1300 ? 5 : 4,
  )

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(2)
      } else if (window.innerWidth < 1300) {
        setSlidesPerView(4)
      } else {
        setSlidesPerView(5)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const skeletonArray = Array.from({ length: slidesPerView })

  return (
    <section className="mx-auto my-10 flex w-full flex-col items-center justify-center">
      <div className="mx-auto w-full rounded-2xl">
        <div className="flex justify-end">
          <h1 className="mr-8 mb-4 border-b-1 border-[#417F56] py-2 text-right text-2xl font-semibold text-[#313231]">
            غذای ایرانی
          </h1>
        </div>

        <div className="relative mx-auto w-full max-w-full">
          {isLoading ? (
            <div className="flex gap-4">
              {skeletonArray.map((_, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
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
              ))}
            </div>
          ) : (
            <div className="slider-container">
              <Swiper
                modules={[Navigation, Pagination, Mousewheel, Autoplay]}
                spaceBetween={20}
                slidesPerView={slidesPerView}
                navigation={true}
                // pagination={{ clickable: true }}
                mousewheel={{
                  forceToAxis: true,
                  sensitivity: 1.5,
                  releaseOnEdges: true,
                }}
                loop={true}
                speed={300}
                className="preferences-swiper"
              >
                {data.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="mx-3 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-transform duration-300 hover:scale-105">
                      <img
                        className="h-58 w-full rounded-t-xl object-cover"
                        src={product.image_url}
                        alt={product.name}
                      />
                      <div className="flex flex-col justify-between gap-3 p-4">
                        <div className="flex justify-between">
                          <div className="border-b-1 border-[#417F56] text-right text-sm font-semibold">
                            {product.price} تومان
                          </div>
                          <div className="text-right text-sm font-semibold">
                            {product.name}
                          </div>
                        </div>

                        <div className="flex items-center justify-between gap-2">
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Preferences
