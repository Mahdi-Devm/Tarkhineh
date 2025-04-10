import { useLocation, useNavigate } from 'react-router-dom'
import PaymentBreadcrumb from '../components/Basket/PaymentBreadcrumb'

import BasketAddresses from '../components/Basket/BasketAddresses'
import OrderDetail from '../components/Basket/OrderDetail'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, store } from '../redux/store'
import {
  getDescription,
  getOrderOption,
} from '../redux/orderInfo/orderInfoSlice'

function CompletionInformation() {
  const { deliverOption } = useSelector((state: RootState) => state.orderInfo)
  const { products } = useSelector((state: RootState) => state.cardReducer)
  console.log('deliver set to', deliverOption)
  const { orderInfo } = store.getState()
  console.log(orderInfo)
  const dispatch = useDispatch()
  const isDeliverOptionSet = (option: string) => {
    if (deliverOption === option) return true
    return false
  }

  const { pathname } = useLocation()
  const navigate=useNavigate()

  return (
    <>
      <PaymentBreadcrumb pathName={pathname} />
      <main className="mx-auto my-6 flex max-w-[1224px] flex-col gap-3 rounded-md text-[#353535] md:h-[554px] md:flex-row-reverse">
        <div className="flex w-full flex-col space-y-3 rounded-xl text-[#353535] sm:h-full">
          <div className="flex flex-row-reverse items-center justify-between rounded-md border border-zinc-400 p-4 max-md:flex-wrap">
            <p className="mb-2 border-zinc-300 py-2 text-right max-md:w-full max-md:border-b">
              روش تحویل
            </p>
            <div className="flex gap-2 text-right">
              <div
                className={
                  isDeliverOptionSet('delivery')
                    ? 'rounded-xl border border-green-300 bg-green-100 p-2'
                    : 'p-2'
                }
              >
                <label className="relative font-semibold" htmlFor="delivery">
                  ارسال توسط پیک
                </label>
                <input
                  onChange={(e) => dispatch(getOrderOption(e.target.value))}
                  name="deliverOption"
                  value={'delivery'}
                  type="radio"
                  id="delivery"
                />
                <p className="max-sm:hidden">توسط پیک رستوران ارسال شود</p>
              </div>
            </div>
            <div className="flex gap-2 text-right">
              <div
                className={
                  isDeliverOptionSet('inPerson')
                    ? 'rounded-xl border border-green-300 bg-green-100 p-2'
                    : 'p-2'
                }
              >
                <label className="font-semibold" htmlFor="inPerson">
                  تحویل حضوری
                </label>
                <input
                  onChange={(e) => dispatch(getOrderOption(e.target.value))}
                  name="deliverOption"
                  type="radio"
                  value="inPerson"
                  id="inPerson"
                />
                <p className="max-sm:hidden">می توانید از شعب تهیه کنید</p>
              </div>
            </div>
          </div>
          <BasketAddresses />
          <div className="h-full rounded-md border border-zinc-400 p-4 text-right">
            <label className="block w-full" htmlFor="desc">
              توضیحات سفارش
            </label>
            <input
              onChange={(e) => dispatch(getDescription(e.target.value))}
              type="text"
              id="desc"
              className="h-[70%] w-full border border-black/0 text-right outline-0"
            />
          </div>
        </div>
        <OrderDetail>
        <button onClick={()=>navigate('/cart/completion-info/payment')} disabled={products.length == 0} className='w-full rounded-lg py-2 mt-2 text-white hover:bg-green-800/90  bg-green-900 disabled:opacity-55'>
          ثبت اطلاعات
        </button>
        
        </OrderDetail>
        
      </main>
    </>
  )
}

export default CompletionInformation
