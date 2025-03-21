import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { addProduct, removeProduct } from '../../redux/shopCard/shopCardSlice'
import { Link } from 'react-router-dom'


const OrderDetail = () => {
const {discount}=useSelector((state:RootState)=>state.cardReducer)   
    const items = useSelector((state: RootState) => state.cardReducer.products)
  const total = useSelector((state: RootState) => state.cardReducer.amount)
  const dispatch = useDispatch()

  return (
    <div className="divide z-20 divide-y-2 divide-zinc-300  rounded-xl border px-4 py-3  max-sm:border-t sm:border-zinc-400 sm:py-5 md:max-w-[470px] md:text-[16px]">
          <div className="flex w-full justify-between py-3">
            <span>trash </span>
            <span>سبد خرید ({items.length})</span>
          </div>
          <div className="h-[200px] space-y-1 overflow-y-auto p-2">
            {items.map((item) => (
              <div
                className="flex w-full items-center justify-between bg-yellow-50"
                key={item.id}
              >
                <div className="space-x-1   rounded-md border px-2 max-md:mt-2">
                  <button onClick={() => dispatch(addProduct(item))}>+</button>
                  <span>{item.qty}</span>
                  <button onClick={() => dispatch(removeProduct(item))}>
                    -
                  </button>
                </div>
                <div className='text-right'>
                  <h2>{item.name}</h2>
                  <p className="flex flex-row-reverse gap-0.5">
                    
                    {item.price} <span>تومان</span>{' '}
                  </p>
                </div>
              </div>
            ))}
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
            <span>تومان{total.toLocaleString()}</span>
            <span>مبلغ قابل پرداخت</span>
            <Link to={'/cart/completion-info/payment'} className="mt-2 rounded-lg text-center w-full bg-green-900 text-white p-2">ثبت اطلاعات</Link>
          </div>
        </div>
  )
}

export default OrderDetail