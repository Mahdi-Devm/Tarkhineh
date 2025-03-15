import { useLocation } from 'react-router-dom'
import PaymentBreadcrumb from '../components/Basket/PaymentBreadcrumb'

function CompletionInformation() {
  const { pathname } = useLocation()
  return (
    <>
      <PaymentBreadcrumb pathName={pathname} />
      <main className="mx-auto my-6 flex max-w-[1224px] flex-col gap-3 rounded-md sm:flex-row-reverse md:my-12 md:h-[554px]">
          
          <div className=" w-full space-y-3  rounded-xl  text-[#353535] border-zinc-400  sm:h-full">
          <div className='border border-zinc-400 rounded-md flex flex-row-reverse p-4 max-md:flex-wrap justify-between items-center '>
            <p className='max-md:w-full text-right max-md:border-b py-2 mb-2'>روش تحویل</p>
            <div className='text-right gap-2  flex'>
              <div>
              <label className='font-semibold' htmlFor="delivery">ارسال توسط پیک</label>
              <p className='max-md:hidden'>توسط پیک رستوران ارسال شود</p>
              </div>
              <input type="radio" name="deliverType" id="delivery" />
            </div>
            <div className='text-right gap-2  flex'>
              <div>
              <label className='font-semibold' htmlFor="inPerson">تحویل حضوری</label>
              <p className='max-md:hidden'>می توانید از شعب تهیه کنید</p>
              </div>
              <input type="radio" name="deliverType" id="inPerson" />
            </div>
              
          </div>

          <div className='p-4 space-y-3 border rounded-md divide divide-y '>    
          <div className='pb-2 mb-4 flex justify-between'>
            <button>افزودن ادرس</button>
            <p>ادرس ها</p>
          </div>
          <div className='flex gap-3 justify-between'>
          <div className='w-full h-full min-h-[100px] border rounded-lg'>
            dd
          </div>
          <div className='w-full min-h-[100px] h-full border rounded-lg '>
            dd
          </div>
          </div>
          </div>
          <div className='p-4 text-right h-[150px] rounded-md border '>
            توضیحات سفارش
          </div>
          </div>


          <div className="divide  min-h-[330px] w-full divide-y-2 divide-zinc-300 rounded-xl border px-4 sm:py-5 py-3 max-sm:border-t sm:border-zinc-400 md:max-w-[470px] md:text-[16px]">
            <div className="flex w-full justify-between py-3">
              <span>trash </span>
              <span>سبد خرید (0)</span>
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
              <span>تومان</span>
              <span>مبلغ قابل پرداخت</span>
              <button className="mt-2 w-full bg-amber-200 p-2">ورود</button>
            </div>
          </div>
        </main>
    </>
  )
}

export default CompletionInformation
