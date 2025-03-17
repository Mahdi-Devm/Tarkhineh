import { useForm } from "react-hook-form"
interface FormData{
  title:string;
  receiveBySelf:boolean;
  phone:string;
  addres:string

}
const BasketAddresses = () => {
  const {handleSubmit,register}=useForm()
  const submitHandler =(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    
  }
  return (
    <>
      <div className="divide space-y-3 divide-y divide-zinc-300 rounded-md border border-zinc-400 p-4">
        <div className="mb-4 flex justify-between pb-2">
          <button>افزودن ادرس</button>
          <p>ادرس ها</p>
        </div>
        <div className="flex justify-between gap-3">
          <div className="h-full min-h-[100px] w-full rounded-lg border">
            dd
          </div>
          <div className="h-full min-h-[100px] w-full rounded-lg border">
           ssddsffs dd
          </div>
        </div>
      </div>
      <span className="bg-black/65  w-screen h-screen fixed top-0 left-0 z-30 flex justify-center items-center  ">
    <div className="bg-white flex flex-col w-[90%] overflow-hidden sm:max-w-[500px] rounded-lg h-[70%] max-h-[500px] ">
      <h1 className="py-4 bg-zinc-200 text-center font-semibold ">ثبت آدرس</h1>
      <form onSubmit={(e)=>handleSubmit(submitHandler(e))} className="flex flex-col gap-3 w-full h-full p-2 text-right">
        <input {...register('title')} className="border  text-right placeholder:text-right p-1 w-full rounded-md border-zinc-300" type="text"  placeholder="عنوان آدرس"/>
        <div className="space-x-3">
      <label
      {...register('receiveBySelf')}
      htmlFor="receiveBySelf">تحویل گیرنده خودم هستم</label>
        <input type="checkbox" name="receiveBySelf"  id="receiveBySelf" />
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
