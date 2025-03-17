import { useLocation } from 'react-router-dom'
import PaymentBreadcrumb from '../components/Basket/PaymentBreadcrumb'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { addProduct, removeProduct } from '../redux/shopCard/shopCardSlice'
import BasketAddresses from '../components/Basket/BasketAddresses'

function CompletionInformation() {
  const items = useSelector((state: RootState) => state.cardReducer.products)
  const total = useSelector((state: RootState) => state.cardReducer.amount)
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  return (
    <>
      <PaymentBreadcrumb pathName={pathname} />
      <main className="mx-auto text-[#353535] my-6 flex max-w-[1224px] flex-col gap-3 rounded-md md:h-[554px] md:flex-row-reverse">
        <div className="w-full flex flex-col space-y-3 rounded-xl text-[#353535] sm:h-full">
          <div className="flex flex-row-reverse items-center justify-between rounded-md border border-zinc-400 p-4 max-md:flex-wrap">
            <p className="mb-2 py-2 text-right max-md:w-full max-md:border-b">
              روش تحویل
            </p>
            <div className="flex gap-2 text-right">
              <div>
                <label className="font-semibold" htmlFor="delivery">
                  ارسال توسط پیک
                </label>
                <p className="max-md:hidden">توسط پیک رستوران ارسال شود</p>
              </div>
              <input type="radio" name="deliverType" id="delivery" />
            </div>
            <div className="flex gap-2 text-right">
              <div>
                <label className="font-semibold" htmlFor="inPerson">
                  تحویل حضوری
                </label>
                <p className="max-md:hidden">می توانید از شعب تهیه کنید</p>
              </div>
              <input type="radio" name="deliverType" id="inPerson" />
            </div>
          </div>
          <BasketAddresses/>
          <div className="h-full border-zinc-400 rounded-md border p-4 text-right">توضیحات سفارش</div>
        </div>

        <div className="divide z-20 divide-y-2 divide-zinc-300 rounded-xl border px-4 py-3  max-sm:border-t sm:border-zinc-400 sm:py-5 md:max-w-[470px] md:text-[16px]">
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
                    {' '}
                    {item.price} <span>تومان</span>{' '}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full justify-between py-3">
            <span>{22}تومان</span>
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
            <span>تومان{total}</span>
            <span>مبلغ قابل پرداخت</span>
            <button className="mt-2 w-full bg-amber-200 p-2">ورود</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default CompletionInformation
