import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const Dashboard = lazy(() => import('./PanelAdmin'))
const Products = lazy(() => import('./page/Products'))
const Favorites = lazy(() => import('./page/Favorites'))
const OrderLists = lazy(() => import('./page/OrderLists'))
const ProductStock = lazy(() => import('./page/ProductStock'))
const Contact = lazy(() => import('./page/Contact'))

const routes: RouteObject[] = [
  { path: '/', element: <Dashboard /> },
  { path: '/products', element: <Products /> },
  { path: '/favorites', element: <Favorites /> },
  { path: '/order-lists', element: <OrderLists /> },
  { path: '/product-stock', element: <ProductStock /> },
  { path: '/contact', element: <Contact /> },
]

export default routes
