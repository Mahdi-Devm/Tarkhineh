import FooterForm from './FooterForm'
import FooterLinks from './FooterLinks'
import FooterBranches from './FooterBranches'
import FooterSocials from './FooterSocials'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import footerimage from '../../assets/optimized/f.jpg'
function Footer() {
  return (
    <footer
      className="relative mt-10 w-full bg-cover bg-center py-8 text-white sm:px-8 md:px-16 lg:px-32"
      style={{
        backgroundImage: `url(${footerimage})`,
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
