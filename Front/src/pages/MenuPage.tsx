import { FiChevronDown } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import SimpleSlider from '../components/SLider/SliderNext'
import { CiShoppingCart } from 'react-icons/ci'
import { CiHeart } from 'react-icons/ci'
import { CiStar } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { addProduct, removeProduct } from '../redux/shopCard/shopCardSlice'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CiTrash } from 'react-icons/ci'
import Cookies from 'js-cookie'
interface Category {
  id: number
  title: string
}

interface SubCategory {
  id: number
  title: string
}
interface Coupon {
  id:number
  percent:number
}
export interface Product {
  id: number
  name: string
  price: number
  image_url: string
  description: string
  rating: number
  isFavorite: boolean
  qty: number | 0
  coupon: Coupon
}

const fetchCategories = async (): Promise<Category[]> => {
  const token = Cookies.get('accessToken')
  const response = await fetch(
    'http://localhost:3000/api/v1/admin/category?page=1',
    {
      method: 'GET',
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
      },
    },
  )
  if (!response.ok) {
    throw new Error('خطا در دریافت داده‌ها')
  }
  const data = await response.json()
  return data.categories
}

const fetchSubCategories = async (
  page: number,
  categoryId: number,
): Promise<any> => {
  const token = Cookies.get('accessToken')
  if (!token) {
    throw new Error('توکن یافت نشد. لطفاً وارد شوید.')
  }

  const response = await fetch(
    `http://localhost:3000/api/v1/client/subCategories/category/${categoryId}`,
    {
      method: 'GET',
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
      },
    },
  )

  if (!response.ok) {
    throw new Error('خطا در دریافت زیرشاخه‌ها')
  }

  const data = await response.json()
  return data.subCategories || []
}

const fetchProduct = async (subCategoryId: string): Promise<Product[]> => {
  const token = Cookies.get('accessToken')
  const response = await fetch(
    `http://localhost:3000/api/v1/client/products/${subCategoryId}?page=1`,
    {
      method: 'GET',
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
      },
    },
  )
  if (!response.ok) {
    throw new Error('خطا در دریافت محصولات')
  }
  const data = await response.json()
  return data.products
}

const MenuPage = () => {
  // add redux
  const cardItems = useSelector(
    (state: RootState) => state.cardReducer.products,
  )
  console.log(cardItems)
  const dispatch = useDispatch()

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

  const { data: subCategories, refetch: refetchSubCategories } = useQuery<
    SubCategory[],
    Error
  >({
    queryKey: ['subcategory', selectedCategory],
    queryFn: () => fetchSubCategories(1, selectedCategory),
    enabled: !!selectedCategory,
  })

  const {
    data: products,
    isLoading: productsLoading,
    refetch: refetchProducts,
  } = useQuery<Product[], Error>({
    queryKey: ['products', selectedSubCategory],
    queryFn: () => fetchProduct(selectedSubCategory),
    enabled: !!selectedSubCategory,
  })

  useEffect(() => {
    if (subCategories && subCategories.length > 0 && !selectedSubCategory) {
      setSelectedSubCategory(subCategories[0].id.toString())
    }
  }, [subCategories])

  useEffect(() => {
    if (selectedCategory) {
      refetchSubCategories()
    }
  }, [selectedCategory, refetchSubCategories])

  useEffect(() => {
    if (selectedSubCategory) {
      refetchProducts()
    }
  }, [selectedSubCategory, refetchProducts])
  const productsInCart = useSelector((state: any) => state.cardReducer.products)
  const isProductInCart = (productId: number) => {
    return productsInCart.some((product: Product) => product.id === productId)
  }
  console.log(subCategories)
  if (isLoading || productsLoading)
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-b-4 border-[#417F56]"></div>
      </div>
    )

  if (error) return <p>خطا در دریافت داده‌ها</p>

  const filteredCategories = categories?.slice(0, 4)

  const toggleFavorite = (productId: number) => {
    const updatedProducts = products?.map((product) =>
      product.id === productId
        ? { ...product, isFavorite: !product.isFavorite }
        : product,
    )
    console.log(updatedProducts)
  }

  const handleStarClick = (productId: number, rating: number) => {
    const updatedProducts = products?.map((product) =>
      product.id === productId ? { ...product, rating: rating } : product,
    )
    console.log(updatedProducts)
  }
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
              value={selectedSubCategory || ''}
              onChange={(e) => setSelectedSubCategory(e.target.value)}
              className="h-12 w-full cursor-pointer appearance-none rounded-full bg-[#417F56] px-6 pr-10 text-white shadow-md transition-all duration-300 outline-none hover:bg-[#355E44] hover:shadow-lg focus:ring-2 focus:ring-[#2E5E3A] sm:w-50"
            >
              {subCategories &&
                Array.isArray(subCategories) &&
                subCategories.map((subcategory) => (
                  <option key={subcategory.id} value={subcategory.id}>
                    {subcategory.title}
                  </option>
                ))}
            </select>

            <FiChevronDown className="absolute top-1/2 right-5 -translate-y-1/2 text-xl text-white transition-transform duration-300 ease-in-out" />
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between">
          <button className="flex h-10 w-44 cursor-pointer items-center justify-center gap-3 rounded-2xl border border-[#417F56] bg-white p-2 text-[#417F56] shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#417F56] hover:text-white">
            <p className="text-base font-medium">تکمیل خرید</p>
            <CiShoppingCart className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold">محصولات</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {products?.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center justify-between rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:scale-105 sm:flex-row sm:gap-6" // اینجا فاصله به حالت گوشی اضافه شده
                style={{ minHeight: '158px' }}
              >
                <img
                  src={`http://localhost:3000/${product.image_url}`}
                  alt=""
                  className="h-[158px] w-[230px] rounded-md object-cover transition-transform duration-300 hover:scale-105 sm:block md:hidden"
                />

                <div className="mt-4 flex w-full flex-col sm:mr-4 sm:w-2/3 sm:pl-4">
                  <div className="flex items-center justify-between">
                    <div
                      className="cursor-pointer transition-transform duration-300 hover:scale-125"
                      onClick={() => toggleFavorite(product.id)}
                    >
                      {product.isFavorite ? (
                        <CiHeart className="h-[24px] w-[24px] text-red-500 transition-all duration-300" />
                      ) : (
                        <CiHeart className="h-[24px] w-[24px] text-gray-500 transition-all duration-300" />
                      )}
                    </div>

                    <h4 className="text-[16px] font-semibold sm:text-[20px]">
                      {product.name}
                    </h4>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-[14px] text-[#353535] sm:text-[18px]">
                      <span>{product.price} </span>
                      <span>تومان</span>
                    </p>
                    <p className="text-[12px] text-[#353535] sm:text-[14px]">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-2 flex w-fit  text-red-800 ">
                    {product.coupon.percent}%
                  </div>

                  <div className="mt-5 mb-6 flex items-center justify-center gap-1">
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
                      className="flex h-[40px] w-[100%] cursor-pointer items-center justify-center rounded-md bg-[#417F56] font-semibold text-white disabled:bg-white disabled:text-gray-500 sm:w-[244px]"
                    >
                      افزودن به سبد خرید
                    </button>

                    {isProductInCart(product.id) && (
                      <button
                        onClick={() => dispatch(removeProduct(product))}
                        className="mt-2 rounded-2xl border-1 border-stone-400 p-2 sm:mt-0"
                      >
                        <CiTrash />
                      </button>
                    )}

                    {[...Array(5)].map((_, index) => (
                      <CiStar
                        key={index}
                        className={`h-[20px] w-[20px] cursor-pointer transition-all duration-300 sm:h-[24px] sm:w-[24px] ${
                          index < product.rating
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        onClick={() => handleStarClick(product.id, index + 1)}
                      />
                    ))}
                  </div>
                </div>

                <img
                  src={`http://localhost:3000/${product.image_url}`}
                  alt=""
                  className="hidden h-[158px] w-[230px] rounded-md object-cover transition-transform duration-300 hover:scale-105 md:block"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuPage
