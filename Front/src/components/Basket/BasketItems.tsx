import { useDispatch, useSelector } from 'react-redux'
import { Product } from '../../pages/MenuPage'
import { RootState } from '../../redux/store'
import {
  addProduct,
  clearBasket,
  clearProduct,
  removeProduct,
} from '../../redux/shopCard/shopCardSlice'

import { Link } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'
import PrivateRoute from '../../PrivateRoute'

interface Props {
  items: Product[]
}

const BasketItems = ({ items }: Props) => {
  const { total } = useSelector((state: RootState) => state.cardReducer)
  const { discount } = useSelector((state: RootState) => state.cardReducer)
  console.log(discount)

  const dispatch = useDispatch()
  
  return (
    <main className="mx-auto my-6 flex max-w-[1224px] flex-col items-center gap-3 rounded-md border-zinc-400 text-[#353535] lg:flex-row-reverse">
      <div className="max-h-[400px] w-full space-y-3 self-start overflow-y-auto rounded-xl border border-zinc-400 p-3">
        {items.map((item) => (
          <div
            className="flex h-[150px] flex-row-reverse overflow-hidden rounded-xl border border-zinc-300"
            key={item.id}
          >
            <div className="aspect-square w-[150px] bg-green-200 max-md:hidden">
              <img
                className="w-full h-full object-cover"
                src={item.image_url}
                alt={item.name}
              />
            </div>
            <div className="flex w-full flex-col justify-between p-3">
              <div className="flex justify-between">
                <button
                  className="text-zinc-500 hover:text-green-700"
                  onClick={() => dispatch(clearProduct(item))}
                >
                  <FaTrash />
                </button>
                <h2>{item.name}</h2>
              </div>
              <div className="flex items-center justify-between max-md:hidden">
                {item.coupon && (
                  <div className="mt-2 flex w-fit text-[14px] text-red-800">
                    {item.coupon?.percent}%
                    <span className="ml-2 text-zinc-300 line-through">
                      {item.price}
                    </span>
                  </div>
                )}
                <p className="w-full overflow-hidden text-right text-[14px]">
                  {item.description}
                </p>
              </div>
              <div className="flex flex-row-reverse justify-between">
                <div className="flex w-full items-center justify-between text-[16px]">
                  <p className="text-[14px] text-[#353535] sm:text-[18px]">
                    <span>
                      {item.coupon
                        ? +item.price -
                          +item.price * (item.coupon?.percent / 100)
                        : item.price}{' '}
                    </span>
                    <span>تومان</span>
                  </p>
                  <div className="flex gap-2">
                    <div className="space-x-2 rounded-md bg-green-100 max-md:mt-2">
                      <button
                        className="p-1 hover:bg-green-300"
                        onClick={() => dispatch(addProduct(item))}
                      >
                        +
                      </button>
                      <span>{item.qty}</span>
                      <button
                        className="p-1 hover:bg-green-300"
                        onClick={() => dispatch(removeProduct(item))}
                      >
                        -
                      </button>
                    </div>
                    <p className="max-md:hidden">starplace</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="divide h-fit min-h-[330px] w-full divide-y-2 divide-zinc-300 rounded-xl border border-zinc-400 px-4 py-3 max-sm:border-t sm:py-5 md:text-[16px] lg:max-w-[500px] lg:self-start">
        <div className="flex w-full justify-between py-3">
          <button
            className="text-zinc-500 hover:text-green-700"
            onClick={() => dispatch(clearBasket())}
          >
            <FaTrash />
          </button>
          <span>سبد خرید ({items.length})</span>
        </div>
        <div className="flex w-full justify-between py-3">
          <span>{discount.toLocaleString()}تومان</span>
          <span>تخفیف محصولات</span>
        </div>
        <div className="flex w-full flex-wrap justify-between py-3">
          <span>0 تومان</span>
          <span>هزینه ارسال</span>
          <span className="w-full text-right text-[12px]">
            هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
            محاسبه و به این مبلغ اضافه خواهد شد.
          </span>
        </div>
        <div className="flex w-full flex-wrap justify-between py-3">
          <span>تومان {total.toLocaleString()}</span>
          <span>مبلغ قابل پرداخت</span>

          <PrivateRoute>

            <Link
              to={'/cart/completion-info'}
              className="mt-2 w-full rounded-lg bg-green-700 p-2 text-center text-white transition-all ease-in hover:bg-green-700/80"
              >
              تکمیل اطلاعات{' '}
            </Link>
              </PrivateRoute>
           
         
        </div>
      </div>
    </main>
  )
}

export default BasketItems
