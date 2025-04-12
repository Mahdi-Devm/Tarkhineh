import { FiChevronDown } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { CiShoppingCart } from 'react-icons/ci'

import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'

import 'react-toastify/dist/ReactToastify.css'
import SimpleSlider from '../components/SLider/SliderNext'
import { useParams, Link } from 'react-router-dom'
import { BASEURL } from '../api'
import { RootState } from '../redux/store'
import Productsmenupage from '../components/MenuPage/Productsmenupage'

interface Category {
  id: number
  title: string
}

interface SubCategory {
  id: number
  title: string
}

interface Coupon {
  id: number
  percent: number
}
export interface ProductsMenuPageProps {
  toggleFavorite: (productId: number) => void
  likeProduct: {
    mutate: (id: number) => void
  }
  setRate: {
    mutate: ([productId, rate]: [number, number]) => void
  }
  isProductInCart: (productId: number) => boolean
  likes: {
    data?: {
      product: { id: number }
    }[]
  }
  products?: Product[]
  isLoading: boolean
  productsLoading: boolean
}
export interface Product {
  id: number
  name: string
  price: string
  image_url: string
  description: string
  rating: number
  isFavorite: boolean
  qty: number | 0
  coupon: Coupon
  TotalStars: number
}

const fetchCategories = async (): Promise<Category[]> => {
  const token = Cookies.get('accessToken')
  const response = await fetch(`${BASEURL}/client/category?page=1`, {
    method: 'GET',
    headers: {
      Accept: '*/*',
      Authorization: `Bearer ${token}`,
    },
  })
  if (!response.ok) throw new Error('خطا در دریافت داده‌ها')
  const data = await response.json()
  console.log(data.categories)

  return data.categories
}

const fetchSubCategories = async (
  categoryId: number,
): Promise<SubCategory[]> => {
  const token = Cookies.get('accessToken')
  const response = await fetch(
    `${BASEURL}/client/subCategories/category/${categoryId}`,
    {
      method: 'GET',
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
      },
    },
  )
  if (!response.ok) throw new Error('خطا در دریافت زیرشاخه‌ها')
  const data = await response.json()
  return data.subCategories || []
}

const fetchProduct = async (subCategoryId: string): Promise<Product[]> => {
  const token = Cookies.get('accessToken')
  const response = await fetch(
    `${BASEURL}/client/products/${subCategoryId}?page=1`,
    {
      method: 'GET',
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
      },
    },
  )
  if (!response.ok) throw new Error('خطا در دریافت محصولات')
  const data = await response.json()
  return data.products
}

const getLikedProduct = async () => {
  const token = Cookies.get('accessToken')

  const respons = await fetch(`${BASEURL}/client/likes`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  })
  return respons.json()
}

const MenuPage = () => {

  const param = useParams().category || '1'
  const Token = Cookies.get('accessToken')
  const [selectedCategory, setSelectedCategory] = useState<number>(1)
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('')

  const queryClient = useQueryClient()

  const { data: categories, isLoading } = useQuery<Category[]>({
    queryKey: ['main category'],
    queryFn: fetchCategories,
  })

  const { data: subCategories } = useQuery<SubCategory[]>({
    queryKey: ['subcategory', selectedCategory],
    queryFn: () => fetchSubCategories(selectedCategory),
    enabled: !!selectedCategory,
  })

  const { data: products, isLoading: productsLoading } = useQuery<Product[]>({
    queryKey: ['products', selectedSubCategory],
    queryFn: () => fetchProduct(selectedSubCategory),
    enabled: !!selectedSubCategory,
  })

  useEffect(() => {
    if (selectedCategory) {
      setSelectedSubCategory('')
      queryClient.invalidateQueries({ queryKey: ['subcategory', selectedCategory] })
      queryClient.invalidateQueries({
        queryKey: ['subcategory', selectedCategory],
      })
    }
  }, [selectedCategory, queryClient])

  useEffect(() => {
    if (subCategories && subCategories.length > 0) {
      setSelectedSubCategory(subCategories[0].id.toString())
    }
  }, [subCategories])

  useEffect(() => {
    if (selectedSubCategory) {
      queryClient.invalidateQueries({ queryKey: ['products', selectedSubCategory] })
    }
  }, [selectedSubCategory, queryClient])

  useEffect(() => {
    setSelectedCategory(Number(param))
  }, [param])

  const productsInCart = useSelector(
    (state: RootState) => state.cardReducer.products,
  )

  const isProductInCart = (productId: number) => {
    return productsInCart?.some((product: Product) => product.id === productId) ?? false
  }

  const likes = useQuery({
    queryKey: ['likes'],
    queryFn: getLikedProduct,
  })

  const likeProduct = useMutation({
    mutationFn: (id: number) =>
      fetch(`${BASEURL}/client/likes/${id}`, {
        headers: {
          authorization: `Bearer ${Token}`,
        },
        method: 'POST',
      })
        .then((res) => res.json())
        .then((data) => console.log(data)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['likes'] })
    },
  })

  const setRate = useMutation<void, Error, [number, number]>({
    mutationFn: ([id, rate]) => {
      return fetch(`${BASEURL}/client/stars`, {
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

  const toggleFavorite = (productId: number) => {
    products?.map((product) =>
      product.id === productId
        ? { ...product, isFavorite: !product.isFavorite }
        : product,
    )
  }

  console.log(products)

  return (
    <>
      <SimpleSlider />
      <div className="container mx-auto px-5">
        <div className="mt-5 flex flex-wrap items-center justify-end gap-3 rounded-2xl bg-[#F8F8F8] p-4 shadow-md sm:flex-row sm:gap-8 sm:p-7">
          {categories?.map((item) => (
            <div
              key={item.id}
              className={`cursor-pointer text-lg font-medium text-[#5A5A5A] transition-all duration-300 ease-in-out hover:scale-110 hover:font-bold hover:text-[#417F56] ${
                item.id === selectedCategory
                  ? 'scale-110 border-b-2 border-[#417F56] font-semibold text-[#417F56]'
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
            <Link to="/cart" className="text-base font-medium">
              {productsInCart?.length || 0} تکمیل خرید
            </Link>
            <CiShoppingCart className="h-6 w-6" />
          </button>
        </div>
        <Productsmenupage
          toggleFavorite={toggleFavorite}
          likeProduct={likeProduct}
          setRate={setRate}
          isProductInCart={isProductInCart}
          likes={likes}
          products={products}
          isLoading={isLoading}
          productsLoading={productsLoading}
        />
      </div>
    </>
  )
}

export default MenuPage
