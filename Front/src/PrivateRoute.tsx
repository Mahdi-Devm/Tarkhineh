import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const PrivateRoute = ({ children }) => {
  const accessToken = Cookies.get('accessToken')

  if (!accessToken) {
    return <Navigate to="/login" />
  }

  return children
}

export default PrivateRoute
