import { Link } from 'react-router-dom'
import { spiderweb } from '../constants/BasketIcons'

interface Props {
  value: number
}

function ShopingCartPage({ value }: Props) {
  value = 0
  if (value === 0)
    return (
      <>
        <div className="mx-auto w-full text-center text-[#CBCBCB]">
          <Link to={'/cart'}>سبد خرید </Link>
          <span>---------------</span>
          <Link to={'/completion-info'}>تکمیل اطلاعات</Link>
          <span>---------------</span>
          <Link to={'/payment'}>پرداخت</Link>
        </div>
        <main className="flex mx-auto md:my-12 my-6  max-w-[1224px] items-center justify-center rounded-xl border  border-[#cbcbcb] h-[435px] md:h-[554px]">
          <div className='flex flex-col gap-8  items-center'>
          <h2 className='text-[#656565]  text-[16px] lg:text-xl'> شما درحال حاضر هیچ سفارشی ثبت نکرده اید</h2>
          <Link className='border-green-800 font-semibold text-green-800 text-[12px] lg:text-[16px] rounded-lg border px-7 py-2' to={'/menu'}>منوی رستوران </Link>
          </div>
          <img className='absolute z-[-2] max-w-[70%]' src={spiderweb} alt="web" />
        
        </main>
      </>
    )
}

export default ShopingCartPage
