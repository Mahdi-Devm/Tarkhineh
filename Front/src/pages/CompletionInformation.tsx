import { useLocation } from 'react-router-dom'
import PaymentBreadcrumb from '../components/Basket/PaymentBreadcrumb'

import BasketAddresses from '../components/Basket/BasketAddresses'
import OrderDetail from '../components/Basket/OrderDetail'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, store } from '../redux/store'
import { getDescription, getOrderOption } from '../redux/orderInfo/orderInfoSlice'

function CompletionInformation() {
  const {desc}=useSelector((state:RootState)=>state.orderInfo)
  const {deliverOption}=useSelector((state:RootState)=>state.orderInfo)

  console.log('deliver set to',deliverOption)
  const {orderInfo}=store.getState()
  console.log(orderInfo)
  const dispatch=useDispatch()
  const isDeliverOptionSet=(option:string)=>{
    if(deliverOption===option) return true
    return false
  }
  
  const { pathname } = useLocation()


  return (
    <>
      <PaymentBreadcrumb  pathName={pathname} />
      <main className="mx-auto text-[#353535] my-6 flex max-w-[1224px] flex-col gap-3 rounded-md md:h-[554px] md:flex-row-reverse">
        <div className="w-full flex flex-col space-y-3 rounded-xl text-[#353535] sm:h-full">
          <div className="flex flex-row-reverse items-center justify-between rounded-md border border-zinc-400 p-4 max-md:flex-wrap">
            <p className="mb-2 py-2 text-right max-md:w-full max-md:border-b border-zinc-300">
              روش تحویل
            </p>
            <div className="flex gap-2 text-right">
              <div className={isDeliverOptionSet('delivery')?'bg-green-100 border p-2 rounded-xl border-green-300':'p-2'}>
                <label  className=" relative font-semibold" htmlFor="delivery">
                  ارسال توسط پیک
                </label>
              <input onChange={(e)=>dispatch(getOrderOption(e.target.value))} name='deliverOption' value={'delivery'} type="radio"  id="delivery" />
                <p className="max-sm:hidden">توسط پیک رستوران ارسال شود</p>
              </div>
            </div>
            <div className="flex gap-2 text-right">
              <div className={isDeliverOptionSet('inPerson')?'bg-green-100 border p-2 rounded-xl border-green-300':'p-2'}>
                <label  className="font-semibold" htmlFor="inPerson">
                  تحویل حضوری
                </label>
              <input onChange={(e)=>dispatch(getOrderOption(e.target.value))} name='deliverOption' type="radio" value="inPerson" id="inPerson" />
                <p className="max-sm:hidden">می توانید از شعب تهیه کنید</p>
              </div>
            </div>
          </div>
          <BasketAddresses />
          <div className="h-full border-zinc-400 rounded-md border p-4 text-right">
            <label className='w-full block' htmlFor="desc">توضیحات سفارش</label>
            <input onChange={(e)=>dispatch(getDescription(e.target.value))} type="text" id='desc' className=' w-full h-[70%] border border-black/0 outline-0 text-right' />
          </div>
        </div>
        <OrderDetail />
        
      </main>
    </>
  )
}

export default CompletionInformation
