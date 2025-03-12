import { useNumber } from '../../Context/NumberUserForProfile'
import HeaderListProfile from './HeaderListProfile'

function ProfileLayout() {
  const { mobile } = useNumber()

  return (
    <div>
      <HeaderListProfile tilte="پروفایل من" />
      <div className="flex h-full items-center justify-center px-4 py-10">
        <form className="flex w-full max-w-4xl flex-col items-center space-y-6 rounded-lg p-4 transition-all duration-500 hover:scale-105 md:p-8">
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type="text"
                  id="lastname"
                  className="peer w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-[#2E5940] focus:outline-none"
                  placeholder=" "
                />
                <label
                  htmlFor="lastname"
                  className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-200 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#BFD8BD]"
                >
                  نام خانوادگی
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="job"
                  className="peer w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-[#2E5940] focus:outline-none"
                  placeholder=" "
                />
                <label
                  htmlFor="job"
                  className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-200 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#BFD8BD]"
                >
                  وظیفه
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="mobile"
                  className="peer w-full cursor-not-allowed rounded-md border border-gray-300 bg-gray-200 p-2"
                  value={mobile}
                  disabled={true}
                  placeholder=" "
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative">
                <input
                  type="text"
                  id="displayName"
                  className="peer w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-[#2E5940] focus:outline-none"
                  placeholder=" "
                />
                <label
                  htmlFor="displayName"
                  className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-200 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#BFD8BD]"
                >
                  نام نمایشی
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="email"
                  className="peer w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-[#2E5940] focus:outline-none"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-200 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#BFD8BD]"
                >
                  آدرس ایمیل
                </label>
              </div>

              <div className="relative">
                <input
                  type="date"
                  id="birthDate"
                  className="peer w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-[#2E5940] focus:outline-none"
                  placeholder=" "
                />
              </div>
            </div>
          </div>

          <div className="flex w-full justify-center gap-2 md:gap-4">
            <button
              type="button"
              className="w-full cursor-pointer rounded-md border-1 border-[#2E5940] p-2 text-[#2E5940] transition-all duration-300 hover:bg-gray-50 md:w-[131px]"
            >
              انصراف
            </button>
            <button
              type="submit"
              className="w-full cursor-pointer rounded-md bg-[#2E5940] p-2 text-white transition-all duration-300 hover:bg-[#1F402D] md:w-[131px]"
            >
              ذخیره اطلاعات
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileLayout
