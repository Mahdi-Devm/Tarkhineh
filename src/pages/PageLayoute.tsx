import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function PageLayoute() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default PageLayoute
