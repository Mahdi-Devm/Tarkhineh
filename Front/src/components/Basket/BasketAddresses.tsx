import { useState } from "react"
import {  useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getAddress } from "../../redux/orderInfo/orderInfoSlice";
export interface AddressData{
  title:string;
  receiveBySelf:boolean;
  phone:string;
  address:string

}

const BasketAddresses = () => {
  const selectedAddress =useSelector((state:RootState)=>state.orderInfo.address)
  console.log('address saved in state',selectedAddress) 
  const dispatch=useDispatch()
  const [addressOpen,setAddressOpen]=useState(false)
  const [addresses,setAddresses]=useState<AddressData[]>([])
  
  const {handleSubmit,register ,reset}=useForm<AddressData>()

  const submitHandler=(data:AddressData)=>{
    console.log(data)
    setAddresses([...addresses,data])
    reset()
    setAddressOpen(false)
  }
  
  return (
    <>
      <div className="divide space-y-3 divide-y divide-zinc-300 rounded-md border border-zinc-400 p-4">
        <div className="mb-4 flex justify-between pb-2">
          <button className="text-green-900" onClick={()=>setAddressOpen(!addressOpen)}>افزودن ادرس</button>
          <p>ادرس ها</p>
        </div>
        {addresses?.length>0?addresses?.map(address=><label onClick={()=>dispatch(getAddress(address))} htmlFor={address.address} key={address.title} className="bg-amber-100  flex justify-between gap-3">
          <input type="radio" name="ali" className="  bg-red-200" id={address.address} />
          <div className="flex p-3 w-full justify-between ">
          <div>
            <button >✏</button>
            <button>💥</button>
          </div>
          <h2>{address.address}</h2>
          </div>
          
        </label>
      ) : <div className="flex justify-center items-center ">ادرسی وجود ندارد</div>}
        
      </div>
      <span  className={addressOpen?`bg-black/65  w-screen h-screen fixed top-0 left-0 z-30 flex justify-center items-center `:'hidden'}>
    <div className="bg-white  flex flex-col w-[90%] overflow-hidden sm:max-w-[500px] rounded-lg h-[70%] max-h-[500px] ">
      <h1 className="py-4 relative bg-zinc-200 text-center font-semibold ">ثبت آدرس <button className="absolute right-4" onClick={()=>setAddressOpen(!addressOpen)}>X</button></h1>
      <form onSubmit={handleSubmit(data=>submitHandler(data))} className="flex flex-col gap-3 w-full h-full p-2 text-right">
        <input {...register('title')} className="border  text-right placeholder:text-right p-1 w-full rounded-md border-zinc-300" type="text"  placeholder="عنوان آدرس"/>
        <div className="space-x-3">
      <label
      
      htmlFor="receiveBySelf">تحویل گیرنده خودم هستم</label>
        <input {...register('receiveBySelf')} type="checkbox"  name="receiveBySelf"  id="receiveBySelf" />
        </div>
        <input {...register('phone')} className="border text-right placeholder:text-right p-1 w-full rounded-md border-zinc-300" type="text" placeholder="شماره همراه" />
        <input {...register('address')} className="border text-right placeholder:text-right p-1 w-full rounded-md border-zinc-300 h-full " type="text" placeholder="ادرس دقیق شما" />
        
          <button className="bg-green-800 hover:bg-green-900/85 mt-auto mb-2 text-white  p-2">
            ثبت
          </button>
        
      </form>

    </div>
      </span>
    </>
  )
}

export default BasketAddresses
