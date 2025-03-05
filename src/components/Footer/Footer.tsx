import { CiInstagram } from 'react-icons/ci'
import { CiTwitter } from 'react-icons/ci'
import { CiLinkedin } from 'react-icons/ci'
function Footer() {
  return (
    <div className="h-[319px] w-full bg-[url(https://s3-alpha-sig.figma.com/img/85b4/9d91/9346f0ad088135a337fb916e224331cf?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QsufMwy1UAx1D0yDZTe5VcNTKcWqlydWXy8MaFHYSSyfoEgu46Y-mDix2VicDMlA871kZR7gCABFCHHzVjTJ-1vYwzCwfjTRb28i-SvozfIUDy8Xec1BhM48W1AST7hfr9U4dpy~BLrUwuzfwMlOLcKDlBl~uyum5rluYequwZyYPv2GA7HGFpUIIFoPDMSw4-l-3XmFaxNWdph9GV27jLM-4kKBkI97YpsfRXiuJjyw2JvgX7A0VMU9tqLDklgGRbXdpe4pXAtyNbglbJgJLUNzwXBOOPMDhL022KYiA-tfRr-jAQCLC9a7DTx7MuG~nCd8tXZ-UxU4eHiLhTAYxw__)] bg-cover bg-center text-white">
      <div>
        <p>شعبه‌های ترخینه</p>
        <li>شعبه اکباتان</li>
        <li>شعبه چالوس</li>
        <li>شعبه اقدسیه</li>
        <li>شعبه ونک</li>
      </div>
      <div>
        <p>دسترسی آسان</p>
        <li>پرسش‌های متداول</li>
        <li>قوانین ترخینه</li>
        <li>حریم خصوصی</li>
        <div>
          <CiInstagram />
          <CiTwitter />
          <CiLinkedin />
        </div>
      </div>
      <div>
        <p>پیام به ترخینه </p>
        <form>
          <div>
            <input type="text" placeholder="پیام شما" />
          </div>
          <div>
            <input type="text" placeholder="آدرس ایمیل (اختیاری)" />
            <input type="text" placeholder="شماره تماس" />
            <input type="text" placeholder="نام و نام خانوادگی" />
          </div>
          <button>ارسال پیام</button>
        </form>
      </div>
    </div>
  )
}

export default Footer
