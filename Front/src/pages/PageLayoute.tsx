import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function PageLayoute() {
  return (
    <div className="mx-auto min-h-screen">
      <Header />
      <main className="mx-auto max-w-[1400px] p-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default PageLayoute
