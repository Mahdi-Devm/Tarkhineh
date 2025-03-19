import { Routes, Route } from 'react-router-dom'
import Dashboard from './page/Dashboard'
import Products from './page/Products'
import Favorites from './page/Favorites'
import OrderLists from './page/OrderLists'
import ProductStock from './page/ProductStock'
import Contact from './page/Contact'

const PanelAdmin = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/order-lists" element={<OrderLists />} />
        <Route path="/product-stock" element={<ProductStock />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default PanelAdmin
