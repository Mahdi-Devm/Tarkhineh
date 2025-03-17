import { useLocation } from 'react-router-dom'
import PaymentBreadcrumb from '../components/Basket/PaymentBreadcrumb'

function CompletionInformation() {
  const { pathname } = useLocation()

  return (
    <>
      <PaymentBreadcrumb pathName={pathname} />
      <main className="mx-auto my-6 flex max-w-[1224px] flex-col gap-3 rounded-md sm:flex-row-reverse md:my-12 md:h-[554px]">
        <div className="w-full space-y-3 rounded-xl border-zinc-400 text-[#353535] sm:h-full">
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
          <div className="divide space-y-3 divide-y rounded-md border p-4">
            <div className="mb-4 flex justify-between pb-2">
              <button>افزودن ادرس</button>
              <p>ادرس ها</p>
            </div>
            <div className="flex justify-between gap-3">
              <div className="h-full min-h-[100px] w-full rounded-lg border">
                dd
              </div>
              <div className="h-full min-h-[100px] w-full rounded-lg border">
                dd
              </div>
            </div>
          </div>
          <div className="h-[150px] rounded-md border p-4 text-right">
            توضیحات سفارش
          </div>
        </div>

        <div className="divide min-h-[330px] w-full divide-y-2 divide-zinc-300 rounded-xl border px-4 py-3 max-sm:border-t sm:border-zinc-400 sm:py-5 md:max-w-[470px] md:text-[16px]">
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
