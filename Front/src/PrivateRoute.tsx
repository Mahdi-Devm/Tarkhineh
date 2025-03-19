import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

interface PrivateRouteProps {
  children: ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const accessToken = Cookies.get('accessToken')

  if (!accessToken) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default PrivateRoute
