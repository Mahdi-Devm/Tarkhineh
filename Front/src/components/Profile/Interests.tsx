import HeaderListProfile from './HeaderListProfile'

const dataInterests = [
  { name: 'همه' },
  { name: 'غذاهای اصلی' },
  { name: 'پیش‌غذا' },
  { name: 'دسر' },
  { name: 'نوشیدنی' },
]

const fakeItems = [
  {
    name: 'پاستا سبزیجات',
    price: '150,000',
    img: 'https://www.figma.com/file/a1A9NqKpy0fC9pQpVBkTaa/image/117ab033c18324ae6672db4300937e223eb47955',
  },
  {
    name: 'سالاد سزار',
    price: '120,000',
    img: 'https://www.figma.com/file/a1A9NqKpy0fC9pQpVBkTaa/image/117ab033c18324ae6672db4300937e223eb47955',
  },
  {
    name: 'استیک گوشت',
    price: '450,000',
    img: 'https://www.figma.com/file/a1A9NqKpy0fC9pQpVBkTaa/image/117ab033c18324ae6672db4300937e223eb47955',
  },
]

function Interests() {
  return (
    <div>
      <HeaderListProfile tilte="علاقمندی‌ها" />
      <div className="p-2">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
          <input
            className="h-[41px] w-[80%] rounded-2xl bg-stone-100 p-2 md:w-[351px]"
            type="text"
            placeholder="جستجو"
          />
          <div className="flex flex-wrap items-center justify-center gap-2">
            {dataInterests.map((item) => (
              <p
                key={item.name}
                className="cursor-pointer rounded-2xl bg-[#EDEDED] px-4 py-2 text-sm hover:bg-[#417F56] hover:text-white"
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fakeItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 rounded-2xl bg-white p-4 shadow-md transition hover:scale-105 hover:shadow-lg"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-[180px] w-[300px] rounded-lg object-cover"
              />
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-[#717171]">تومان {item.price}</p>
              <button className="h-[40px] w-[80%] rounded-md bg-[#417F56] text-white hover:bg-[#315A3D]">
                افزودن به سبد خرید
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Interests
