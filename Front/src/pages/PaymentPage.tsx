import { useLocation } from 'react-router-dom'
import PaymentBreadcrumb from '../components/Basket/PaymentBreadcrumb'
import Successfulpayment from '../components/Successfulpayment'
import Unsuccessfulpayment from '../components/Unsuccessfulpayment'
import OrderDetail from '../components/Basket/OrderDetail'
import { useDispatch, useSelector } from 'react-redux'
import { getPaymentOption } from '../redux/orderInfo/orderInfoSlice'
import { RootState } from '../redux/store'

function PaymentPage() {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const { paymentOption } = useSelector((state: RootState) => state.orderInfo)
  const isPayOptionSet = (option: string) => {
    if (paymentOption === option) return true
    return false
  }

  return (
    <div>
      <PaymentBreadcrumb pathName={pathname} />
      <main className="mx-auto my-6 flex max-w-[1224px] flex-col gap-3 rounded-md text-[#353535] md:h-[554px] md:flex-row-reverse">
        <div className="flex w-full flex-col space-y-3 rounded-xl text-[#353535] sm:h-full">
          <div className="flex  flex-row-reverse flex-wrap  items-center justify-between rounded-lg border border-zinc-300 p-4 text-right">
              <p className='text-[20px] font-semibold text-right'>ثبت کد تخفیف</p>
            <div className="flex gap-3">
              <button className="h-full  rounded-lg bg-green-800 px-6 py-2 text-nowrap text-white">
                ثبت کد
              </button>
              <input
                className="rounded-lg w-full border border-zinc-400 px-3 placeholder:text-right"
                placeholder="کد تخفیف"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-row-reverse items-center justify-between rounded-md border  border-zinc-400 p-4 max-md:flex-wrap">
            <p className="mb-2 border-zinc-300 py-2 text-right max-md:w-full max-md:border-b">
              روش پرداخت
            </p>
            <div className="justify-end flex max-sm:w-full  gap-2 mb-2 text-right">
              <div
                className={
                  isPayOptionSet('inPlace')
                    ? 'rounded-xl border border-green-300 bg-green-100 p-2'
                    : 'p-2 '
                }
              >
                <label className="relative font-semibold" htmlFor="inPlace">
                  پرداخت در محل
                </label>
                <input
                  onChange={(e) => dispatch(getPaymentOption(e.target.value))}
                  name="payOption"
                  value="inPlace"
                  type="radio"
                  id="inPlace"
                />
                <p className="max-sm:hidden">توسط پیک رستوران ارسال شود</p>
              </div>
            </div>
            <div className="flex justify-end max-sm:w-full gap-2 text-right">
              <div
                className={
                  isPayOptionSet('payOnline')
                    ? 'rounded-xl border border-green-300 bg-green-100 p-2'
                    : 'p-2 '
                }
              >
                <label className="font-semibold" htmlFor="payOnline">
                  پرداخت اینترنتی
                </label>
                <input
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

          {isPayOptionSet('payOnline')?<div className="flex flex-row-reverse items-center min-h-[185px] justify-between rounded-md border border-zinc-400 p-4 max-md:flex-wrap">
            <p className="mb-2 border-zinc-300 py-2 text-right max-md:w-full max-md:border-b">
              درگاه پرداخت
            </p>
            <div className="flex gap-2 w-full  justify-center text-right">
              <div
                className={
                  isPayOptionSet('inPlace')
                    ? 'rounded-xl border border-green-300 bg-green-100 p-2'
                    : 'p-2 border rounded-md size-[80px] '
                }
              >
                <label htmlFor="inPlace">
                
                <input
                  onChange={(e) => dispatch(getPaymentOption(e.target.value))}
                  name="payOption"
                  value="inPlace"
                  type="radio"
                  id="inPlace"
                  />
                <p className="text-[12px] max-sm:hidden">بانک ملت</p>
                  </label>
              </div>
            </div>
            
          </div>
          :<div className="flex flex-row-reverse items-center  justify-between rounded-md border border-zinc-400 p-4 max-md:flex-wrap">
            <p className='text-xl mb-1'>! قابل توجه </p>
            <p className=' text-[16px]  text-center '>هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از تحویل کالا کارت بانکی یا پول نقد همراه خود داشته باشید و از درخواست برای پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با تشکر از همراهی شما.</p>
            </div>
            }
        </div>
        <OrderDetail />
      </main>
      {/* <Successfulpayment /> */}
      {/* <Unsuccessfulpayment /> */}
    </div>
  )
}

export default PaymentPage
