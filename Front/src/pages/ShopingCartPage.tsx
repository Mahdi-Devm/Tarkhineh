import { useLocation } from 'react-router-dom'
import PaymentBreadcrumb from '../components/Basket/PaymentBreadcrumb'
import EmptyCard from '../components/Basket/EmptyCard'
import BasketItems from '../components/Basket/BasketItems'

function ShopingCartPage() {

  const { pathname } = useLocation()
  const value = 1

  return (
    <>
      <PaymentBreadcrumb pathName={pathname} />
      {value > 0 ? (
        <BasketItems/>
      ) : (
        <EmptyCard/>
      )}
    </>
  )
}

export default ShopingCartPage
