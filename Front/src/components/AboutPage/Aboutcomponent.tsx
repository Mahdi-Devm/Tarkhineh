import { CiUser, CiWifiOn, CiMemoPad } from 'react-icons/ci'
import { TiChartAreaOutline } from 'react-icons/ti'
import ImageHeaderForIformatian from '../ImageHeaderForIformatian'
import { motion } from 'framer-motion'

function AboutComponent() {
  return (
    <section>
      <ImageHeaderForIformatian
        height="336px"
        title="!درباره ترخینه بیشتر بدانید"
        image="https://s3-alpha-sig.figma.com/img/6514/c844/a184b0a2eda096baec6229c93f4ea140?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Od58ieMAlY~dw9L8nIurxWxSdZ3ery5gjTuo3uTgd3Gm219plhsrMP6RNwJJzhuyn4Lewr2YN7t3kvTW83H59VjEtqVMzyq8Y8wo5fIDL5~YGB5RnG~pinZQCaFoJTHgf4MQGoXOxz~8asu4Q1y8uxM1h-MTHFxRI8xms7EWylYFLcXFeHZhWdnbIiUK8axfdtsEar3A6zZt845jTLedX9BIfcytW~UKFYoYFumZUG6YaKIByKGZm1ZcSmZaAMykpwYtgo6RkxD9aaL0uj5KKCTvHzwMD7BAl-46tAvF~EeLf93voNgY0v4~4PbjoLE7GAoUqrWTqG6CGB8rehx7FQ__"
      />

      <section>
        <div className="mt-8 px-4 sm:px-8 md:px-16 lg:px-32">
          <h3 className="mb-6 text-center text-2xl font-semibold text-[#2b2b2b] sm:text-3xl">
            درباره ما
          </h3>

          <div className="flex flex-col gap-6 md:flex-row">
            <motion.div
              className="h-[200px] w-full rounded-xl bg-cover bg-center shadow-lg sm:h-[300px] md:h-[400px] md:w-1/2"
              style={{
                backgroundImage:
                  'url(https://www.figma.com/file/a1A9NqKpy0fC9pQpVBkTaa/image/d291baf96ea6f971b29ed1930912d8ecff3a24ed)',
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            ></motion.div>

            <motion.div
              className="w-full space-y-4 text-right text-base text-[#717171] sm:text-lg md:w-1/2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <p>
                رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ با هدف ارائه تجربه‌ای
                منحصر به فرد در زمینه غذاهای با کیفیت و سرویس‌های سریع افتتاح
                شدند. طی سال‌ها، این رستوران‌ها همواره با بهره‌گیری از بهترین
                مواد اولیه و ارائه خدماتی استثنائی در تلاش بوده‌اند تا رضایت
                مشتریان را جلب کنند. ما همیشه متعهد به حفظ کیفیت بالا و ثابت نگه
                داشتن قیمت‌ها در کنار نوسانات بازار بوده‌ایم.
              </p>
              <p>
                شعبات ترخینه با طراحی مدرن و شیک آماده ارائه خدمات به شما عزیزان
                هستند. سالن‌های پذیرایی ما با امکانات ویژه مانند آسانسور برای
                افراد کم‌توان، امکان برگزاری جشن‌ها و مراسم‌های کوچک و بزرگ را
                با کیفیتی بی‌نظیر فراهم می‌آورند.
              </p>
              <p>
                چشم‌انداز ما، در آینده‌ای نزدیک، راه‌اندازی تالارهای پذیرایی
                بزرگتر و آماده‌سازی فضاهای مناسب برای برگزاری جشن‌ها و مراسم‌های
                مختلف است. امیدواریم که به زودی بتوانیم تجربه‌ای فراموش‌نشدنی را
                برای شما فراهم آوریم.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="mt-12 flex h-auto w-full max-w-[1400px] flex-wrap items-center justify-around gap-4 rounded-2xl bg-[#EDEDED] px-4 py-6 sm:mt-20 sm:h-[168px] sm:flex-nowrap sm:gap-0 sm:py-0">
        <div className="group flex flex-col items-center transition-all duration-300 hover:scale-105">
          <CiUser
            size={40}
            className="text-[#8b8b8b] transition-all duration-300 group-hover:text-[#417F56]"
          />
          <p className="sm:text-md mt-2 text-sm text-[#8b8b8b] transition-all duration-300 group-hover:text-[#417F56]">
            درباره ما
          </p>
        </div>

        <div className="group flex flex-col items-center transition-all duration-300 hover:scale-105">
          <CiWifiOn
            size={40}
            className="text-[#8b8b8b] transition-all duration-300 group-hover:text-[#417F56]"
          />
          <p className="sm:text-md mt-2 text-sm text-[#8b8b8b] transition-all duration-300 group-hover:text-[#417F56]">
            تماس با ما
          </p>
        </div>

        <div className="group flex flex-col items-center transition-all duration-300 hover:scale-105">
          <CiMemoPad
            size={40}
            className="text-[#8b8b8b] transition-all duration-300 group-hover:text-[#417F56]"
          />
          <p className="sm:text-md mt-2 text-sm text-[#8b8b8b] transition-all duration-300 group-hover:text-[#417F56]">
            داستان ما
          </p>
        </div>

        <div className="group flex flex-col items-center transition-all duration-300 hover:scale-105">
          <TiChartAreaOutline
            size={40}
            className="text-[#8b8b8b] transition-all duration-300 group-hover:text-[#417F56]"
          />
          <p className="sm:text-md mt-2 text-sm text-[#8b8b8b] transition-all duration-300 group-hover:text-[#417F56]">
            ماموریت ما
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutComponent
