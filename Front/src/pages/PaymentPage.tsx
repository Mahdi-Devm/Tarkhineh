import { useLocation } from "react-router-dom";
import PaymentBreadcrumb from "../components/PaymentBreadcrumb";
import Successfulpayment from "../components/Successfulpayment";
import Unsuccessfulpayment from "../components/Unsuccessfulpayment";

function PaymentPage() {
 const {pathname} =useLocation()

  return (
    <div>
      <PaymentBreadcrumb pathName={pathname} />
      <Successfulpayment />
      <Unsuccessfulpayment />
    </div>
  );
}

export default PaymentPage;
