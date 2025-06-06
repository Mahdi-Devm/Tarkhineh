import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Suspense, lazy, useEffect, useState } from 'react'
import { AuthProvider } from './Context/AuthContext'
import Profilelayoute from './components/Profile/Profilelayoute'
import Trackingorders from './components/Profile/Trackingorders'
import Interests from './components/Profile/Interests'

import { NumberProvider } from './Context/NumberUserForProfile'
import Addresses from './components/Profile/Addresses'

import { Provider } from 'react-redux'
import { store } from './redux/store'
import Modal from './components/Login/ModalLogin'
import PrivateRoute from './PrivateRoute'
import PanelAdmin from './admin/PanelAdmin'
import AdminLayout from './admin/AdminLayout'
const Loader = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-b-4 border-[#417F56]"></div>
  </div>
)

const AwardingAgentPage = lazy(() => import('./pages/AwardingAgentPage'))
const BranchPage = lazy(() => import('./pages/Branchpage'))
const CompletionInformation = lazy(
  () => import('./pages/CompletionInformation'),
)
const ContactPage = lazy(() => import('./pages/ContactPage'))
const FAQ = lazy(() => import('./pages/FAQ'))
const MainPage = lazy(() => import('./pages/MainPage'))
const MenuPage = lazy(() => import('./pages/MenuPage'))
const PaymentPage = lazy(() => import('./pages/PaymentPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const ProfileLayoutPage = lazy(() => import('./pages/ProfileLayoutPage'))
const RulesPage = lazy(() => import('./pages/RulesPage'))
const ShopingCartPage = lazy(() => import('./pages/ShopingCartPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const PageLayoute = lazy(() => import('./pages/PageLayoute'))

const queryClient = new QueryClient()

const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)

  // Function to handle scroll-to-top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true)
    } else {
      setShowScrollButton(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NumberProvider>
          <AuthProvider>
            <Router>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route element={<PageLayoute />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/login" element={<Modal />} />
                    <Route
                      path="/awarding-agent"
                      element={<AwardingAgentPage />}
                    />
                    <Route path="/branch" element={<BranchPage />} />
                    <Route
                      path="/cart/completion-info"
                      element={<CompletionInformation />}
                    />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/menu/:category" element={<MenuPage />} />
                    <Route
                      path="/cart/completion-info/payment"
                      element={<PaymentPage />}
                    />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/profile" element={<ProfileLayoutPage />}>
                      <Route index element={<Profilelayoute />} />
                      <Route
                        path="Profilelayoute"
                        element={<Profilelayoute />}
                      />
                      <Route
                        path="Trackingorders"
                        element={<Trackingorders />}
                      />
                      <Route path="Interests" element={<Interests />} />
                      <Route path="Addresses" element={<Addresses />} />
                    </Route>
                    <Route path="/rules" element={<RulesPage />} />
                    <Route path="/cart" element={<ShopingCartPage />} />
                  </Route>
                  <Route
                    path="/paneladmin/*"
                    element={
                      <PrivateRoute>
                        <AdminLayout>
                          <PanelAdmin />
                        </AdminLayout>
                      </PrivateRoute>
                    }
                  />
                </Routes>
              </Suspense>
            </Router>
            {showScrollButton && (
              <button
                onClick={scrollToTop}
                className="fixed bottom-8 left-8 h-16 w-16 cursor-pointer rounded-full bg-[#ffffff] p-4 text-[#2c5a38] shadow-[0_0_10px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out hover:bg-[#82ac92dd] hover:text-white z-10"
              >
                <span className="text-3xl font-semibold">&#8593;</span>
              </button>
            )}
          </AuthProvider>
        </NumberProvider>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
