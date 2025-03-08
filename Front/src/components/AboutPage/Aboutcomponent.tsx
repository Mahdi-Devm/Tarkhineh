import { CiUser, CiWifiOn, CiMemoPad } from 'react-icons/ci'
import { TiChartAreaOutline } from 'react-icons/ti'
import ImageHeaderForIformatian from '../ImageHeaderForIformatian'

function AboutComponent() {
  return (
    <section>
      <ImageHeaderForIformatian
        height="336px"
        title="!درباره ترخینه بیشتر بدانید"
        image="https://s3-alpha-sig.figma.com/img/6514/c844/a184b0a2eda096baec6229c93f4ea140?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Od58ieMAlY~dw9L8nIurxWxSdZ3ery5gjTuo3uTgd3Gm219plhsrMP6RNwJJzhuyn4Lewr2YN7t3kvTW83H59VjEtqVMzyq8Y8wo5fIDL5~YGB5RnG~pinZQCaFoJTHgf4MQGoXOxz~8asu4Q1y8uxM1h-MTHFxRI8xms7EWylYFLcXFeHZhWdnbIiUK8axfdtsEar3A6zZt845jTLedX9BIfcytW~UKFYoYFumZUG6YaKIByKGZm1ZcSmZaAMykpwYtgo6RkxD9aaL0uj5KKCTvHzwMD7BAl-46tAvF~EeLf93voNgY0v4~4PbjoLE7GAoUqrWTqG6CGB8rehx7FQ__"
      />

      <div className="mt-8 px-4 sm:px-8 md:px-16 lg:px-32">
        <h3 className="mb-4 text-right text-xl font-bold text-gray-800 sm:text-2xl">
          درباره ما
        </h3>
        <div className="flex flex-col gap-6 md:flex-row">
          <div
            className="h-[200px] w-full rounded-2xl bg-cover bg-center sm:h-[300px] md:h-[400px] md:w-1/2"
            style={{
              backgroundImage:
                'url(https://www.figma.com/file/a1A9NqKpy0fC9pQpVBkTaa/image/d291baf96ea6f971b29ed1930912d8ecff3a24ed)',
            }}
          ></div>

          <div className="w-full space-y-4 text-right text-base text-[#717171] sm:text-lg md:w-1/2">
            <p>
              رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی
              این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع
              در تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها
              اولیت جلب رضایت مشتریان بوده است. دراین خصوص ترخینه همیشه در تلاش
              بوده تا در طی این زمان‌ها کیفیت غذاهای خودرا در بهترین حالت نگه
              داشته و حتی با نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را
              ثابت نگه داشته است.
            </p>
            <p>
              ترخینه شعبات خود را افتتاح کرده که بسیار شیک و مدرن می‌باشند و
              برای برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی
              با کیفیت بالا را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به
              همراه راه پله مدرن و آسانسور برای افراد کم‌توان و سالخورده آماده
              ارائه سرویس به شما عزیزان می‌باشند.
            </p>
            <p>
              چشم انداز: در آینده‌ای نزدیک تالار پذیرایی شعبات راه اندازی شده و
              آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود. به امید آن
              روز که همه ایرانیان سالم و سلامت باشند.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex h-auto w-full max-w-[1400px] flex-wrap items-center justify-around gap-4 rounded-2xl bg-[#EDEDED] px-4 py-6 sm:mt-20 sm:h-[168px] sm:flex-nowrap sm:gap-0 sm:py-0">
        {/* آیتم ۱ */}
        <div className="group flex flex-col items-center transition-all duration-300 hover:scale-105">
          <CiUser
            size={40}
            className="text-[#8b8b8b] transition-all duration-300 group-hover:text-[#417F56]"
          />
          <p className="sm:text-md mt-2 text-sm text-[#8b8b8b] transition-all duration-300 group-hover:text-[#417F56]">
            About Us
          </p>
        </div>

        <div className="group flex flex-col items-center transition-all duration-300 hover:scale-105">
          <CiWifiOn
            size={40}
            className="text-[#8b8b8b] transition-all duration-300 group-hover:text-[#417F56]"
          />
          <p className="sm:text-md mt-2 text-sm text-[#8b8b8b] transition-all duration-300 group-hover:text-[#417F56]">
            Contact Us
          </p>
        </div>

        <div className="group flex flex-col items-center transition-all duration-300 hover:scale-105">
          <CiMemoPad
            size={40}
            className="text-[#8b8b8b] transition-all duration-300 group-hover:text-[#417F56]"
          />
          <p className="sm:text-md mt-2 text-sm text-[#8b8b8b] transition-all duration-300 group-hover:text-[#417F56]">
            Our Story
          </p>
        </div>

        <div className="group flex flex-col items-center transition-all duration-300 hover:scale-105">
          <TiChartAreaOutline
            size={40}
            className="text-[#8b8b8b] transition-all duration-300 group-hover:text-[#417F56]"
          />
          <p className="sm:text-md mt-2 text-sm text-[#8b8b8b] transition-all duration-300 group-hover:text-[#417F56]">
            Our Mission
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutComponent
