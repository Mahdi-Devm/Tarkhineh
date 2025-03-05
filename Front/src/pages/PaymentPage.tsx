import Successfulpayment from "../components/Successfulpayment";
import Unsuccessfulpayment from "../components/Unsuccessfulpayment";

function PaymentPage() {
  return (
    <div>
      <Successfulpayment />
      <Unsuccessfulpayment />
    </div>
  );
}

export default PaymentPage;
