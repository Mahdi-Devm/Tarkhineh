import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

const UserCoupon = () => {
    const dispatch = useDispatch()
    const { amount } = useSelector((state: RootState) => state.cardReducer)
    const [addedCoupon, setAddedCoupon] = useState('')
    const [isOpen,setIsOpen]=useState(false)

    const validateCoupon = async () => {
        
        console.log(addedCoupon)
        const token = Cookies.get('accessToken')
        const res = await fetch(
          'http://localhost:3000/api/v1/client/userCoupon/use',
          {
            method: 'POST',
            headers: {
              'Content-type':'application/json',
              
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                coupon_code: addedCoupon,
                totalPrice:amount          
            }),
        },
        )
        
        const data=await res.json()
      if(res.status!==201) toast.error('کد نامعتبر است')
        
      else  toast.success('تخفیف اعمال شد ')
    const {coupon}=data    
    
        dispatch(useCoupon(coupon))
      }
  return (
      <>
    <div className="flex flex-row-reverse flex-wrap items-center justify-between rounded-lg border border-zinc-300 p-4 text-right">

            <p className="mb-2 text-right text-[20px] font-semibold">
              ثبت کد تخفیف
            </p>
            <div  className="flex gap-3">
              <button onClick={()=>setIsOpen(true)} className="h-full rounded-lg bg-green-800 px-6 py-2 text-nowrap text-white">
                ثبت کد
              </button>
              <input
                onChange={(e) => setAddedCoupon(e.target.value)}
                className="w-full rounded-lg border border-zinc-400 px-3 placeholder:text-right"
                placeholder="کد تخفیف"
                type="text"
              />
            </div>
          </div>
          <div className={`bg-black/80 ${isOpen?'flex':'hidden'} fixed top-0 left-0 w-screen h-screen z-40 justify-center items-center`}>
            <div className='w-[80%] h-[20%] rounded-2xl bg-white justify-center gap-4 items-center flex flex-wrap'>
            <p className='w-full text-center'>در نظر داشته باشید بعد از اعمال کد تحفیف شما منقضی خواهد شد</p>
                <button className=" rounded-lg  px-6 py-2 text-nowrap h-fit text-zinc-400 border border-zinc-400 cursor-pointer hover:text-black" onClick={()=>setIsOpen(false)}>لغو</button>
                <button className=" rounded-lg cursor-pointer bg-green-800 px-6 py-2 text-nowrap h-fit text-white" onClick={()=>validateCoupon()} > ثبت کد</button>
            </div>
          </div>
          </>
  )
}

export default UserCoupon