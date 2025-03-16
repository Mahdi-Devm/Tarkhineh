import { useLocation } from 'react-router-dom'
import PaymentBreadcrumb from '../components/Basket/PaymentBreadcrumb'
import EmptyCard from '../components/Basket/EmptyCard'
import BasketItems from '../components/Basket/BasketItems'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

function ShopingCartPage() {
const cardItems=useSelector((state:RootState)=>state.cardReducer.products)
  const { pathname } = useLocation()
  
console.log(cardItems)
  return (
    <>
      <PaymentBreadcrumb pathName={pathname} />
      {cardItems.length > 0 ? (
        <BasketItems/>
      ) : (
        <EmptyCard/>
      )}
    </>
  )
}

export default ShopingCartPage
