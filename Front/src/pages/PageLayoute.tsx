import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function PageLayoute() {
  return (
    <div className=" min-h-screen bg-green-300  mx-auto max-w-[1600px]">
      <Header />
      <main className="p-3 bg-amber-100 mx-auto max-w-[1600px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default PageLayoute
