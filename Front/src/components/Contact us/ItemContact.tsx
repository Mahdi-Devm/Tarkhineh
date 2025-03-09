interface ContactProps {
  title: string
  address: string
  contactNumber: string
  workingHours: string
  image: string
}

function ItemContact({ title, address, contactNumber, image }: ContactProps) {
  return (
    <div className="flex flex-col items-center overflow-hidden rounded-lg border bg-white p-4 shadow-md md:flex-row">
      <div className="w-full p-4 md:w-1/2">
        <h2 className="text-center text-[20px] font-bold text-[#353535]">
          {title}
        </h2>
        <p className="mt-2 text-center text-[18px] font-bold text-[#717171]">
          آدرس : {address || 'آدرس ثبت نشده'}
        </p>
        <p className="mt-1 text-center text-[18px] font-bold text-[#717171]">
          شماره تماس : {contactNumber || 'شماره ثبت نشده'}
        </p>
        <p className="mt-1 text-center text-[18px] font-bold text-[#717171]">
          ساعت کاری : : همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روز‌های تعطیل
        </p>

        <div className="mt-4 flex justify-center gap-3">
          <button className="hidden cursor-pointer rounded-lg border border-[#417F56] bg-[#417F56] px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black md:block">
            دیدن در نقشه
          </button>
          <button className="hidden cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-[#417F56] hover:text-white md:block">
            صفحه شعبه
          </button>
        </div>
      </div>
      <div className="h-48 w-full overflow-hidden md:h-70 md:w-1/2">
        <img
          src={image}
          alt={title}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
    </div>
  )
}

export default ItemContact
