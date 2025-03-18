import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import AdminLayout from './AdminLayout'

const Dashboard = lazy(() => import('./PanelAdmin'))
const Products = lazy(() => import('./page/Products'))
const Favorites = lazy(() => import('./page/Favorites'))
const OrderLists = lazy(() => import('./page/OrderLists'))
const ProductStock = lazy(() => import('./page/ProductStock'))
const Contact = lazy(() => import('./page/Contact'))

const routes: RouteObject[] = [
  {
    path: 'PanelAdmin//Dashboard',
    element: (
      <AdminLayout>
        <Dashboard />
      </AdminLayout>
    ),
  },
  {
    path: 'PanelAdmin//products',
    element: (
      <AdminLayout>
        <Products />
      </AdminLayout>
    ),
  },
  {
    path: 'PanelAdmin//favorites',
    element: (
      <AdminLayout>
        <Favorites />
      </AdminLayout>
    ),
  },
  {
    path: 'PanelAdmin//order-lists',
    element: (
      <AdminLayout>
        <OrderLists />
      </AdminLayout>
    ),
  },
  {
    path: 'PanelAdmin//product-stock',
    element: (
      <AdminLayout>
        <ProductStock />
      </AdminLayout>
    ),
  },
  {
    path: 'PanelAdmin//contact',
    element: (
      <AdminLayout>
        <Contact />
      </AdminLayout>
    ),
  },
]

export default routes
