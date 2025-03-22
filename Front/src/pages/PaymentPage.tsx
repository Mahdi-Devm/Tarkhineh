import { useLocation } from 'react-router-dom'
import PaymentBreadcrumb from '../components/Basket/PaymentBreadcrumb'
import { bankOptions } from '../constants/BasketData'
import OrderDetail from '../components/Basket/OrderDetail'
import { useDispatch, useSelector } from 'react-redux'
import { getPayLink, getPaymentOption } from '../redux/orderInfo/orderInfoSlice'
import { RootState } from '../redux/store'
import axios from 'axios'

function PaymentPage() {

  const userCoupon= async ()=>{
    axios.get('http://localhost:3000/api/v1/admin/user-coupon').then(res=>console.log(res.data.coupons))
  }
userCoupon()
  const { pathname } = useLocation()

  const dispatch = useDispatch()
  const { paymentOption, payLink } = useSelector(
    (state: RootState) => state.orderInfo,
  )
  const isPayOptionSet = (option: string) => {
    if (paymentOption === option) return true
    return false
  }
  const isPayLinkSet = (option: string) => {
    if (payLink === option) return true
    return false
  }

  return (
    <div>
      <PaymentBreadcrumb pathName={pathname} />
      <main className="mx-auto my-6 flex max-w-[1224px] flex-col gap-3 rounded-md text-[#353535] md:h-[554px] md:flex-row-reverse">
        <div className="flex w-full flex-col space-y-3 rounded-xl text-[#353535] sm:h-full">
          <div className="flex flex-row-reverse flex-wrap items-center justify-between rounded-lg border border-zinc-300 p-4 text-right">
            <p className="text-right mb-2 text-[20px] font-semibold">ثبت کد تخفیف</p>
            <div className="flex gap-3">
              <button className="h-full rounded-lg bg-green-800 px-6 py-2 text-nowrap text-white">
                ثبت کد
              </button>
              <input
                className="w-full rounded-lg border border-zinc-400 px-3 placeholder:text-right"
                placeholder="کد تخفیف"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-row-reverse items-center justify-between rounded-md border border-zinc-400 p-4 max-md:flex-wrap">
            <p className="mb-2 border-zinc-300 py-2 text-right max-md:w-full max-md:border-b">
              روش پرداخت
            </p>
            <div className="mb-2 flex justify-end gap-2 text-right max-sm:w-full">
              <div
                className={
                  isPayOptionSet('inPlace')
                    ? 'rounded-xl border border-green-300 bg-green-100 p-2'
                    : 'p-2'
                }
              >
                <label className="relative font-semibold" htmlFor="inPlace">
                  پرداخت در محل
                </label>
                <input
                className='opacity-0'
                  onChange={(e) => dispatch(getPaymentOption(e.target.value))}
                  name="payOption"
                  value="inPlace"
                  type="radio"
                  id="inPlace"
                />
                <p className="max-sm:hidden">توسط پیک رستوران ارسال شود</p>
              </div>
            </div>
            <div className="flex justify-end gap-2 text-right max-sm:w-full">
              <div
                className={
                  isPayOptionSet('payOnline')
                    ? 'rounded-xl border border-green-300 bg-green-100 p-2'
                    : 'p-2'
                }
              >
                <label className="font-semibold" htmlFor="payOnline">
                  پرداخت اینترنتی
                </label>
                <input
                className='opacity-0'
                  onChange={(e) => dispatch(getPaymentOption(e.target.value))}
                  name="payOption"
                  type="radio"
                  value="payOnline"
                  id="payOnline"
                />
                <p className="max-sm:hidden">توسط پیک رستوران ارسال شود</p>
              </div>
            </div>
          </div>

          {isPayOptionSet('payOnline') ? (
            <div className="flex min-h-[185px] flex-row-reverse items-center justify-between rounded-md border border-zinc-400 p-4 max-md:flex-wrap">
              <p className="mb-2 border-zinc-300 py-2 text-right max-md:w-full max-md:border-b">
                درگاه پرداخت
              </p>
              <div className="flex w-full justify-center gap-2 text-right">
                
                  
                  {bankOptions.map((b)=>(<label className={
                    isPayLinkSet(b.value)
                      ? 'border-green-700 overflow-hidden relative rounded-md border-2 p-2 '
                      : 'p-2 relative overflow-hidden rounded-md  border'
                  } htmlFor={b.value} key={b.id}>
                    <img src={b.image} className='size-[90px] object-cover' alt={b.name} />
                    <input  onChange={(e) => dispatch(getPayLink(e.target.value))} className='opacity-0 absolute top-0 left-0 ' type="radio" value={b.value} name={b.name} id={b.value} />
                  </label>))}
                
              </div>
            </div>
          ) : (
            <div className="flex flex-row-reverse items-center justify-between rounded-md border border-zinc-400 p-4 max-md:flex-wrap">
              <p className="mb-1 text-xl text-nowrap ml-2">! قابل توجه </p>
              <p className="text-center text-[16px]">
                هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از
                تحویل کالا کارت بانکی یا پول نقد همراه خود داشته باشید و از
                درخواست برای پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با
                تشکر از همراهی شما.
              </p>
            </div>
          )}
        </div>
        <OrderDetail />
      </main>
      {/* <Successfulpayment /> */}
      {/* <Unsuccessfulpayment /> */}
    </div>
  )
}

export default PaymentPage
