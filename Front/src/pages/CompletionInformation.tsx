import { useLocation } from 'react-router-dom'
import PaymentBreadcrumb from '../components/Basket/PaymentBreadcrumb'

function CompletionInformation() {
  const { pathname } = useLocation()
  return (
    <>
      <PaymentBreadcrumb pathName={pathname} />
    </>
  )
}

export default CompletionInformation
