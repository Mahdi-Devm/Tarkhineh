import HeaderListProfile from './HeaderListProfile'
const dataInterests = [
  { name: 'همه' },
  { name: 'غذای های اصلی' },
  { name: 'پیش غذا ' },
  { name: 'دسر ' },
  { name: 'نوشیدنی' },
]

function Interests() {
  return (
    <div>
      <HeaderListProfile tilte="علاقمندی‌ها" />
      <div className="p-2">
        <div className="flex items-center justify-center">
          <div className="h-[41px] w-[351px]">
            <input
              className="h-[41px] w-[351px] rounded-2xl bg-stone-100 p-2"
              type="جستجو"
              placeholder="جستجو"
            />
          </div>
          <div className="flex h-[32px] w-[470px] items-center justify-center gap-2">
            {dataInterests.map((item) => (
              <p className="rounded-2xl bg-[#EDEDED] p-2" key={item.name}>
                {item.name}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-5 h-[280px] w-[277px] rounded-2xl bg-amber-200 p-2">
          <div>
            <img
              src="https://www.figma.com/file/a1A9NqKpy0fC9pQpVBkTaa/image/117ab033c18324ae6672db4300937e223eb47955"
              alt=""
            />
          </div>
          <div>
            <p>@</p>
            <p>پاستا سبزیجات </p>
          </div>
          <div>
            <div></div>
            <div>تومان 150,000</div>
          </div>
          <button className="h-[40px] w-[245px]">افزودن به سبد خرید</button>
        </div>
      </div>
    </div>
  )
}

export default Interests
