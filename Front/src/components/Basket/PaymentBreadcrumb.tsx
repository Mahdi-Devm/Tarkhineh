import { Link } from 'react-router-dom'
interface Props {
  pathName: string
}

const PaymentBreadcrumb = ({ pathName }: Props) => {

  return (
    <div className="mx-auto w-full sm:text-xl text-[12px] text-center text-[#CBCBCB]">
      <Link className={pathName.includes('/cart')?'text-green-800':''} to={'/cart'}>
        سبد خرید
      </Link>
      <span className={pathName.includes('/completion-info')?'text-green-800':''} >---------------</span>
      <Link className={pathName.includes('/completion-info')?'text-green-800':''} to={'/cart/completion-info'}>تکمیل اطلاعات</Link>
      <span className={pathName.includes('/cart/completion-info/payment')?'text-green-800':''}>---------------</span>
      <Link className={pathName.includes('/cart/completion-info/payment')?'text-green-800':''} to={'/cart/completion-info/payment'}>پرداخت</Link>
    </div>
  )
}

export default PaymentBreadcrumb
