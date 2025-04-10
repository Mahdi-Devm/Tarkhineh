import { toast } from 'react-toastify'
import { CiTrash, CiHeart, CiStar } from 'react-icons/ci'
import { addProduct, removeProduct } from '../../redux/shopCard/shopCardSlice'
import { useDispatch } from 'react-redux'
interface Product {
  id: number
  name: string
  price: number
  description: string
  image_url: string
  coupon?: {
    percent: number
  }
  TotalStars: number
}

interface Like {
  product: {
    id: number
  }
}

interface ProductsMenuPageProps {
  toggleFavorite: (id: number) => void
  likeProduct: {
    mutate: (id: number) => void
  }
  setRate: {
    mutate: ([id, rate]: [number, number]) => void
  }
  isProductInCart: (id: number) => boolean
  likes: {
    data?: Like[]
  }
  products: Product[]
  productsLoading: boolean
  isLoading: boolean
}
const SkeletonCard = () => (
  <div className="flex animate-pulse flex-col items-center justify-between rounded-lg bg-gray-100 p-4 shadow-md sm:flex-row sm:gap-6">
    <div className="h-[158px] w-[230px] rounded-md bg-gray-200" />
    <div className="mt-4 flex w-full flex-col sm:mr-4 sm:w-2/3 sm:pl-4">
      <div className="mb-2 h-6 w-1/3 rounded-md bg-gray-200" />
      <div className="mb-4 h-4 w-1/2 rounded-md bg-gray-200" />
      <div className="h-4 w-full rounded-md bg-gray-200" />
      <div className="mt-6 h-10 w-full rounded-md bg-gray-200" />
    </div>
    <div className="hidden h-[158px] w-[230px] rounded-md bg-gray-200 md:block" />
  </div>
)

const Productsmenupage: React.FC<ProductsMenuPageProps> = ({
  toggleFavorite,
  likeProduct,
  setRate,
  isProductInCart,
  likes,
  products,
  productsLoading,
  isLoading,
}) => {
  const dispatch = useDispatch()
  if (isLoading || productsLoading) {
    return (
      <div className="mt-6">
        <h3 className="mb-4 text-2xl font-semibold">محصولات</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {[...Array(6)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mt-6">
      <h3 className="mb-4 text-2xl font-semibold">محصولات</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {products?.map((product) => {
          return (
            <div
              key={product.id}
              className="flex flex-col items-center justify-between rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:scale-105 sm:flex-row sm:gap-6"
              style={{ minHeight: '158px' }}
            >
              <img
                src={`${product.image_url}`}
                alt=""
                className="h-[158px] w-[230px] rounded-md object-cover transition-transform duration-300 hover:scale-105 sm:block md:hidden"
              />
              <div className="mt-4 flex w-full flex-col sm:mr-4 sm:w-2/3 sm:pl-4">
                <div className="flex items-center justify-between">
                  <div onClick={() => toggleFavorite(product.id)}>
                    {Array.isArray(likes.data) &&
                    likes.data.some(
                      (item) => item.product.id === product.id,
                    ) ? (
                      <CiHeart
                        onClick={() => likeProduct.mutate(product.id)}
                        className="h-[24px] w-[24px] text-red-500 transition-all duration-300"
                      />
                    ) : (
                      <CiHeart
                        onClick={() => likeProduct.mutate(product.id)}
                        className="h-[24px] w-[24px] text-gray-500 transition-all duration-300"
                      />
                    )}
                  </div>
                  <h4 className="text-[16px] font-semibold sm:text-[20px]">
                    {product.name}
                  </h4>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-[14px] text-[#353535] sm:text-[18px]">
                    <span>
                      {product.coupon
                        ? +product.price * product.coupon.percent -
                          +product.price
                        : product.price}{' '}
                    </span>
                    <span>تومان</span>
                  </p>
                  <p className="text-[12px] text-[#353535] sm:text-[14px]">
                    {product.description}
                  </p>
                </div>
                {product.coupon && (
                  <div className="mt-2 flex w-fit text-red-800">
                    {product.coupon?.percent}%
                  </div>
                )}
                <div className="mt-8 mb-3 flex items-center justify-center gap-1">
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
                      className="mt-2 rounded-2xl border border-stone-400 p-2 sm:mt-0"
                    >
                      <CiTrash />
                    </button>
                  )}
                  {[...Array(5)].map((_, index) => (
                    <CiStar
                      key={index}
                      className={`w-[25px] cursor-pointer transition-all duration-300 sm:h-[24px] sm:w-[24px] ${
                        index < product.TotalStars
                          ? 'text-yellow-400'
                          : 'text-gray-500'
                      }`}
                      onClick={() =>
                        setRate.mutate([+product.id, +(index + 1)])
                      }
                    />
                  ))}
                </div>
              </div>
              <img
                src={product.image_url}
                alt=""
                className="hidden h-[158px] w-[230px] rounded-md object-cover transition-transform duration-300 hover:scale-105 md:block"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Productsmenupage
