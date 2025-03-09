interface ContactProps {
  title: string
  address: string
  contactNumber: string
  workingHours: string
  image: string
}

function ItemContact({ title, address, contactNumber, image }: ContactProps) {
  return (
    <div className="flex h-[280px] w-[1200px] flex-col items-center overflow-hidden rounded-xl border border-[#CBCBCB] bg-white p-6 transition-all duration-300 hover:border-[#b0afaf] md:flex-row">
      <div className="w-full p-6 md:w-1/2">
        <h2 className="text-center text-xl font-semibold text-[#2D2D2D]">
          {title}
        </h2>
        <p className="mt-3 text-center text-lg font-medium text-[#555]">
          آدرس: {address || 'آدرس ثبت نشده'}
        </p>
        <p className="mt-2 text-center text-lg font-medium text-[#555]">
          شماره تماس: {contactNumber || 'شماره ثبت نشده'}
        </p>
        <p className="mt-2 text-center text-lg font-medium text-[#555]">
          ساعت کاری : : همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روز‌های تعطیل
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="hidden cursor-pointer rounded-lg border border-[#417F56] bg-[#417F56] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#417F56] md:block">
            دیدن در نقشه
          </button>
          <button className="hidden cursor-pointer rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition-all hover:bg-[#417F56] hover:text-white md:block">
            صفحه شعبه
          </button>
        </div>
      </div>
      <div className="h-48 w-full overflow-hidden rounded-xl md:h-80 md:w-150">
        <img
          src={image}
          alt={title}
          className="h-full w-full rounded-xl object-cover transition-all duration-300 hover:scale-105"
        />
      </div>
    </div>
  )
}

export default ItemContact
