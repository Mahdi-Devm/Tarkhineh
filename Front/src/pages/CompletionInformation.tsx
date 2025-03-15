import { useLocation } from "react-router-dom"
import PaymentBreadcrumb from "../components/PaymentBreadcrumb"

function CompletionInformation() {
  const {pathname} =useLocation()
  return <>
  <PaymentBreadcrumb pathName={pathname} />
  </>
}

export default CompletionInformation
