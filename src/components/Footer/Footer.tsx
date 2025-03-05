import { CiInstagram, CiTwitter, CiLinkedin } from 'react-icons/ci'

function Footer() {
  return (
    <div className="w-full bg-[url(https://s3-alpha-sig.figma.com/img/85b4/9d91/9346f0ad088135a337fb916e224331cf?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QsufMwy1UAx1D0yDZTe5VcNTKcWqlydWXy8MaFHYSSyfoEgu46Y-mDix2VicDMlA871kZR7gCABFCHHzVjTJ-1vYwzCwfjTRb28i-SvozfIUDy8Xec1BhM48W1AST7hfr9U4dpy~BLrUwuzfwMlOLcKDlBl~uyum5rluYequwZyYPv2GA7HGFpUIIFoPDMSw4-l-3XmFaxNWdph9GV27jLM-4kKBkI97YpsfRXiuJjyw2JvgX7A0VMU9tqLDklgGRbXdpe4pXAtyNbglbJgJLUNzwXBOOPMDhL022KYiA-tfRr-jAQCLC9a7DTx7MuG~nCd8tXZ-UxU4eHiLhTAYxw__)] bg-cover bg-center px-15 py-20 text-white sm:px-10">
      <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
        <div className="h-[204px] w-150">
          <h3 className="mb-3 text-right text-2xl font-bold">پیام به ترخینه</h3>
          <form className="space-y-">
            <div className="flex gap-3">
              <textarea
                placeholder="پیام شما"
                className="w-full rounded-lg border border-gray-600 p-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500"
              />

              <div className="flex h-[144px] w-[275px] flex-col gap-[12px]">
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  className="h-[40px] w-[276px] rounded-lg border border-gray-600 p-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="شماره تماس"
                  className="h-[40px] w-[276px] rounded-lg border border-gray-600 p-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="آدرس ایمیل (اختیاری)"
                  className="h-[40px] w-[276px] rounded-lg border border-gray-600 p-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
            <button className="mt-1 h-[40px] w-[183px] rounded-lg border-1 border-gray-600 py-2 text-white transition">
              ارسال پیام
            </button>
          </form>
        </div>

        <div className="w-50">
          <h3 className="mb-3 text-2xl font-bold">شعبه‌های ترخینه</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="text-lg font-semibold">شعبه اکباتان</li>
            <li className="text-lg font-semibold">شعبه چالوس</li>
            <li className="text-lg font-semibold">شعبه اقدسیه</li>
            <li className="text-lg font-semibold">شعبه ونک</li>
          </ul>
        </div>

        <div className="w-50">
          <h3 className="mb-3 text-2xl font-bold">دسترسی آسان</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="text-lg font-semibold">پرسش‌های متداول</li>
            <li className="text-lg font-semibold">قوانین ترخینه</li>
            <li className="text-lg font-semibold">حریم خصوصی</li>
          </ul>
          <div className="mt-4 flex gap-4 text-2xl text-gray-400">
            <CiInstagram className="cursor-pointer transition hover:text-gray-300" />
            <CiTwitter className="cursor-pointer transition hover:text-gray-300" />
            <CiLinkedin className="cursor-pointer transition hover:text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
