import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AwardingAgentPage from './pages/AwardingAgentPage'
import BranchPage from './pages/Branchpage'
import CompletionInformation from './pages/CompletionInformation'
import ContactPage from './pages/ContactPage'
import FAQ from './pages/FAQ'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import MenuPage from './pages/MenuPage'
import PaymentPage from './pages/PaymentPage'
import PrivacyPage from './pages/PrivacyPage'
import ProfileLayoutPage from './pages/ProfileLayoutPage'
import RulesPage from './pages/RulesPage'
import ShopingCartPage from './pages/ShopingCartPage'
import AboutPage from './pages/AboutPage'
import PageLayoute from './pages/PageLayoute'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PageLayoute />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/awarding-agent" element={<AwardingAgentPage />} />
          <Route path="/branch" element={<BranchPage />} />
          <Route path="/completion-info" element={<CompletionInformation />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/profile" element={<ProfileLayoutPage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/cart" element={<ShopingCartPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
