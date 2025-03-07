function AboutComponent() {
  return (
    <section>
      <div
        className="relative flex h-[336px] w-full items-center justify-center rounded-2xl bg-cover bg-center px-4 py-8 text-white sm:px-8 md:px-16 lg:px-32"
        style={{
          backgroundImage:
            'linear-gradient(0deg, rgba(70, 94, 78, 0.5), rgba(73, 104, 83, 0.5)), linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(https://s3-alpha-sig.figma.com/img/6514/c844/a184b0a2eda096baec6229c93f4ea140?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Od58ieMAlY~dw9L8nIurxWxSdZ3ery5gjTuo3uTgd3Gm219plhsrMP6RNwJJzhuyn4Lewr2YN7t3kvTW83H59VjEtqVMzyq8Y8wo5fIDL5~YGB5RnG~pinZQCaFoJTHgf4MQGoXOxz~8asu4Q1y8uxM1h-MTHFxRI8xms7EWylYFLcXFeHZhWdnbIiUK8axfdtsEar3A6zZt845jTLedX9BIfcytW~UKFYoYFumZUG6YaKIByKGZm1ZcSmZaAMykpwYtgo6RkxD9aaL0uj5KKCTvHzwMD7BAl-46tAvF~EeLf93voNgY0v4~4PbjoLE7GAoUqrWTqG6CGB8rehx7FQ__)',
        }}
      >
        <h1 className="text-3xl font-bold text-white">
          !درباره ترخینه بیشتر بدانید
        </h1>
      </div>

      <div className="mt-8 px-4 sm:px-8 md:px-16 lg:px-32">
        <h3 className="mb-4 text-2xl font-bold text-gray-800">درباره ما</h3>
        <div className="flex flex-col gap-6 md:flex-row">
          <div
            className="h-[300px] w-full rounded-2xl bg-cover bg-center md:w-1/2"
            style={{
              backgroundImage:
                'url(https://www.figma.com/file/a1A9NqKpy0fC9pQpVBkTaa/image/d291baf96ea6f971b29ed1930912d8ecff3a24ed)',
            }}
          ></div>

          <div className="w-full space-y-4 text-justify text-gray-700 md:w-1/2">
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
    </section>
  )
}

export default AboutComponent
