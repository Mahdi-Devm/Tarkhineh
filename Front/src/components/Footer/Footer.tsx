import FooterForm from './FooterForm'
import FooterLinks from './FooterLinks'
import FooterBranches from './FooterBranches'
import FooterSocials from './FooterSocials'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Footer() {
  return (
    <div
      className="w-full bg-cover bg-center px-10 py-0 text-white sm:px-15 sm:py-4"
      style={{
        backgroundImage:
          'url(https://s3-alpha-sig.figma.com/img/85b4/9d91/9346f0ad088135a337fb916e224331cf?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QsufMwy1UAx1D0yDZTe5VcNTKcWqlydWXy8MaFHYSSyfoEgu46Y-mDix2VicDMlA871kZR7gCABFCHHzVjTJ-1vYwzCwfjTRb28i-SvozfIUDy8Xec1BhM48W1AST7hfr9U4dpy~BLrUwuzfwMlOLcKDlBl~uyum5rluYequwZyYPv2GA7HGFpUIIFoPDMSw4-l-3XmFaxNWdph9GV27jLM-4kKBkI97YpsfRXiuJjyw2JvgX7A0VMU9tqLDklgGRbXdpe4pXAtyNbglbJgJLUNzwXBOOPMDhL022KYiA-tfRr-jAQCLC9a7DTx7MuG~nCd8tXZ-UxU4eHiLhTAYxw__)',
      }}
    >
      <div className="mx-auto flex max-w-screen-xl flex-col gap-10 md:flex-row">
        <div className="hidden w-full md:block md:w-[85%]">
          <h3 className="mb-3 text-right text-2xl font-bold">پیام به ترخینه</h3>
          <FooterForm />
        </div>
        <FooterBranches />
        <div className="flex flex-col">
          <FooterLinks />
          <FooterSocials />
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}

export default Footer
