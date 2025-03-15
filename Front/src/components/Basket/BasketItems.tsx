const BasketItems = () => {
  return (
    <main className="mx-auto my-6 flex max-w-[1224px] flex-col gap-3 rounded-md max-md:p-3 max-sm:border sm:flex-row-reverse md:my-12 md:h-[554px]">
      <div className="h-[300px] w-full space-y-3 overflow-y-auto rounded-xl border border-zinc-400 p-3 sm:h-full"></div>
      <div className="divide gap- h-fit min-h-[330px] w-full divide-y-2 divide-zinc-300 rounded-xl border px-4 py-3 max-sm:border-t sm:border-zinc-400 sm:py-5 md:max-w-[470px] md:text-[16px]">
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
  )
}

export default BasketItems
