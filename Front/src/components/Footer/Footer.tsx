import FooterForm from './FooterForm'
import FooterLinks from './FooterLinks'
import FooterBranches from './FooterBranches'
import FooterSocials from './FooterSocials'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Footer() {
  return (
    <footer
      className="relative w-full bg-cover bg-center px-4 py-8 text-white sm:px-8 md:px-16 lg:px-32"
      style={{
        backgroundImage:
          'url(https://s3-alpha-sig.figma.com/img/85b4/9d91/9346f0ad088135a337fb916e224331cf?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QsufMwy1UAx1D0yDZTe5VcNTKcWqlydWXy8MaFHYSSyfoEgu46Y-mDix2VicDMlA871kZR7gCABFCHHzVjTJ-1vYwzCwfjTRb28i-SvozfIUDy8Xec1BhM48W1AST7hfr9U4dpy~BLrUwuzfwMlOLcKDlBl~uyum5rluYequwZyYPv2GA7HGFpUIIFoPDMSw4-l-3XmFaxNWdph9GV27jLM-4kKBkI97YpsfRXiuJjyw2JvgX7A0VMU9tqLDklgGRbXdpe4pXAtyNbglbJgJLUNzwXBOOPMDhL022KYiA-tfRr-jAQCLC9a7DTx7MuG~nCd8tXZ-UxU4eHiLhTAYxw__)',
      }}
    >
      <div className="absolute inset-0 bg-gray-800 opacity-50 mix-blend-multiply"></div>

      <div className="relative mx-auto flex max-w-screen-xl flex-col gap-8 md:flex-row md:gap-16">
        <div className="w-full md:w-[60%]">
          <h3 className="mb-4 text-right text-2xl font-bold md:text-3xl">
            پیام به ترخینه
          </h3>
          <FooterForm />
        </div>
        <div className="flex w-full flex-col gap-8 md:w-[40%] md:flex-row">
          <FooterBranches />
          <div className="flex flex-col gap-8">
            <FooterLinks />
            <FooterSocials />
          </div>
        </div>
      </div>

      <ToastContainer />
    </footer>
  )
}

export default Footer
