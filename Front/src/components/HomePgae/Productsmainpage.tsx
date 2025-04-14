import React from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/shopCard/shopCardSlice'
import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { CiShoppingCart } from 'react-icons/ci'
import { useMutation } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { Alert, Snackbar } from '@mui/material'
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Add custom CSS for Swiper pagination
import './swiper-custom.css'

interface Product {
  id: number
  name: string
  price: number
  rating: number
  image_url: string
  TotalStars: number
  CountStar: number
}

interface PopulardishesProps {
  data: Product[]
  isLoading: boolean
}

const Productsmainpage: React.FC<PopulardishesProps> = ({
  data,
  isLoading,
}) => {
  const dispatch = useDispatch()
  const [productsPerPage, setProductsPerPage] = useState(
    window.innerWidth >= 1300 ? 5 : 4,
  )
  const [currentIndex, setCurrentIndex] = useState(0)
  const Token = Cookies.get('accessToken') || ''
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

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

  const skeletonArray = Array.from({ length: productsPerPage })

  const likeProduct = useMutation({
    mutationFn: (id: number) => fetch(`https://tarkhine-app.onrender.com/api/v1/client/likes/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Token}`,
      },
      method: 'POST'
    }).then(res => res.json())
  })

  useEffect(() => {

    if (likeProduct.data?.message == 'Product liked !') {

      setAlertMessage('محصول به علاقه‌مندی‌ها اضافه شد')
      setAlertOpen(true)

    } else if (likeProduct.data?.message == 'product disliked !') {

      setAlertMessage('محصول از علاقه مندی ها برداشته شد')
      setAlertOpen(true)

    } else if (likeProduct.isError) {

      setAlertMessage('خطا در افزودن محصول به علاقه‌مندی‌ها')
      setAlertOpen(true)
    }

  }, [likeProduct.isSuccess, likeProduct.isError])

  const handleCloseAlert = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setAlertOpen(false)
  }

  console.log(likeProduct.data)

  // Swiper breakpoints configuration
  const swiperBreakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1300: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  }

  return (
    <section className="mx-auto my-10 flex w-full flex-col items-center justify-center">
      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: '100%', bgcolor: '#417F56', color: 'white' }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>

      <div className="mx-auto w-full rounded-2xl">
        <div className="flex justify-end">
          <h1 className="mr-8 mb-4 border-b-1 border-[#417F56] py-2 text-right text-2xl font-semibold text-[#313231]">
            غذای ایرانی
          </h1>
        </div>

        <div className="relative mx-auto w-full max-w-full">
          {isLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skeletonArray.map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse overflow-hidden rounded-lg border border-gray-200 bg-[#f0f0f0] shadow-lg"
                >
                  <div className="h-60 w-full bg-gray-300"></div>
                  <div className="p-4">
                    <div className="mb-2 h-4 w-3/4 rounded bg-gray-300"></div>
                    <div className="mb-2 h-3 w-1/2 rounded bg-gray-300"></div>
                    <div className="mt-4 h-8 w-full rounded bg-gray-300"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="slider-container">
              <Swiper
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                spaceBetween={20}
                slidesPerView={productsPerPage}
                navigation
                pagination={{ 
                  clickable: true,
                  el: '.swiper-pagination'
                }}
                mousewheel={true}
                keyboard={true}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                breakpoints={swiperBreakpoints}
                className="mySwiper"
              >
                {data.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-transform duration-300 hover:scale-105">
                      <img
                        className="h-60 w-full rounded-t-xl object-cover"
                        src={`${product.image_url}`}
                        alt={product.name}
                      />
                      <div className="flex flex-col justify-between gap-2 p-3">
                        <div className="flex justify-between">
                          <div className="flex space-x-1">
                          </div>
                          <div className="text-right text-xs font-semibold">
                            {product.name}
                          </div>
                        </div>

                        <div className="flex items-center justify-between gap-1">
                          <button
                            onClick={() =>
                              likeProduct.mutate(product.id)
                            }
                            className="flex items-center gap-1 rounded-md border border-gray-300 px-1.5 py-0.5 text-xs text-gray-600 transition hover:bg-gray-100"
                          >
                            ❤️ <span>علاقه‌مندی</span>
                          </button>

                          <button
                            onClick={() => {
                              dispatch(addProduct(product))
                              setAlertMessage('محصول با موفقیت به سبد خرید اضافه شد!')
                              setAlertOpen(true)
                            }}
                            className="group flex-1 cursor-pointer rounded-md border border-transparent bg-[#417F56] px-4 py-0.5 text-xs text-white transition-all duration-300 hover:border-[#417F56] hover:bg-white"
                          >
                            <CiShoppingCart className="mx-auto text-xl transition-all duration-300 group-hover:text-[#417F56]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-pagination mt-8"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Productsmainpage
