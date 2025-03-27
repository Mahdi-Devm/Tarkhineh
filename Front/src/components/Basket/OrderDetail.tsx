import { useDispatch, useSelector } from 'react-redux'  
import { RootState } from '../../redux/store'  
import {  
  addProduct,  
  clearBasket,  
  removeProduct,  
} from '../../redux/shopCard/shopCardSlice'  
import { FaTrash } from 'react-icons/fa'  
import { ReactNode } from 'react'  

interface Props {  
  children: ReactNode;  
}  

const OrderDetail = ({ children }: Props) => {  
  const { discount } = useSelector((state: RootState) => state.cardReducer)  
  const items = useSelector((state: RootState) => state.cardReducer.products)  
  const { total } = useSelector((state: RootState) => state.cardReducer)  
  const dispatch = useDispatch()  

   

  return (  
    <div className="divide z-20 divide-y-2 divide-zinc-300 rounded-xl border border-zinc-400 px-4 py-3 max-sm:border-t sm:py-5 md:max-w-[470px] md:text-[16px]">  
      <div className="flex w-full justify-between py-3">  
        <button  
          className="text-zinc-500 hover:text-green-700"  
          onClick={() => dispatch(clearBasket())}  
        >  
          <FaTrash />  
        </button>  
        <span>سبد خرید ({items.length})</span>  
      </div>  
      <div className="parentZibra h-[200px] space-y-1 overflow-y-auto p-1">  
        {items.map((item) => (  
          <div className="childZebra flex w-full items-center justify-between p-1" key={item.id}>  
            <div className="space-x-2 rounded-md bg-green-100 max-md:mt-2">  
              <button className="p-1 hover:bg-green-300" onClick={() => dispatch(addProduct(item))}>+</button>  
              <span>{item.qty}</span>  
              <button className="p-1 hover:bg-green-300" onClick={() => dispatch(removeProduct(item))}>-</button>  
            </div>  
            <div className="text-right">  
              <h2>{item.name}</h2>  
              <p className="flex flex-row-reverse gap-0.5">  
                {item.price} <span>تومان</span>  
              </p>  
            </div>  
          </div>  
        ))}  
      </div>  
      <div className="flex w-full justify-between py-3">  
        <span>{discount.toLocaleString()}تومان</span>  
        <span>تخفیف محصولات</span>  
      </div>  
      <div className="flex w-full flex-wrap justify-between py-3">  
        <span>0 تومان</span>  
        <span>هزینه ارسال</span>  
        <span className="w-full text-right text-[12px]">  
          هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.  
        </span>  
      </div>  
      <div className="flex w-full flex-wrap justify-between py-3">  
        <span>تومان{total.toLocaleString()}</span>  
        <span>مبلغ قابل پرداخت</span>  
      </div>  
      {/* نمایش کودکان در این قسمت */}  
      <div className="flex flex-wrap justify-between "> 
        {children}   

      </div>  
      
    </div>  
  )  
}  

export default OrderDetail;  
          