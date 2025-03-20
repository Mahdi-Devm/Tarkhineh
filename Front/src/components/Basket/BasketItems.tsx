import { useDispatch, useSelector } from "react-redux"
import { Product } from "../../pages/MenuPage"
import { RootState } from "../../redux/store"
import { addProduct, removeProduct } from "../../redux/shopCard/shopCardSlice"
import { useAuth } from "../../Context/AuthContext"
import { Link } from "react-router-dom"
import Modal from "../Login/ModalLogin"
import { useEffect, useState } from "react"

interface Props {
  items: Product[]
}

const BasketItems = ({items}:Props) => {
  
  
const {amount} =useSelector((state:RootState)=>state.cardReducer)
const {discount} =useSelector((state:RootState)=>state.cardReducer)
console.log(discount)
const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768)
   useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768)
      }
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])
const toggleModal = () => {
  setIsModalOpen((prev) => !prev)
}
const dispatch=useDispatch()
const {isAuthenticated,setIsAuthenticated}=useAuth()
  return (
    <main className="mx-auto text-[#353535] my-6 flex max-w-[1224px] flex-col gap-3 rounded-md border-zinc-400 items-center lg:flex-row-reverse  ">
      <div className="max-h-[400px] self-start w-full space-y-3 overflow-y-auto rounded-xl border border-zinc-400 p-3 ">
        {items.map(item=>(<div className="border h-[150px] border-zinc-300 rounded-xl overflow-hidden flex flex-row-reverse " key={item.id}>
          <div className="max-md:hidden w-[150px] bg-green-200 aspect-square ">
            <img className="w-full object-cover" src={`http://localhost:3000/${item.image_url}`} alt={item.name} />
          </div>

          <div className="p-3 flex flex-col justify-between  w-full">
            <div className="flex justify-between">
              <span>trash</span>
              <h2>{item.name}</h2>
            </div>
            <div className="flex max-md:hidden justify-between">
              <p>تخفیف</p>
              <p className="text-[14px] text-right bg-amber-100 max-w-[282px] overflow-hidden">{item.description}</p>

            </div>
            <div className="flex flex-row-reverse justify-between">
              <div className="text-[16px] items-center flex justify-between w-full"> 
                <span className="flex gap-0.5 flex-row-reverse"> {item.price} <span>تومان</span> </span>
                <div className=" flex gap-2 ">
                  <div className="border max-md:mt-2 space-x-1 px-2 rounded-md">
                    <button onClick={()=>dispatch(addProduct(item))}>+</button>
                    <span>{item.qty}</span>
                    <button onClick={()=>dispatch(removeProduct(item))} >-</button>
                  </div>
                  <p className="max-md:hidden">starplace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
      <div className="divide h-fit min-h-[330px] w-full divide-y-2 divide-zinc-300 rounded-xl border px-4 py-3 max-sm:border-t sm:border-zinc-400 sm:py-5 md:text-[16px] lg:max-w-[500px] lg:self-start">
        <div className="flex w-full justify-between py-3">
          <span>trash </span>
          <span>سبد خرید ({items.length})</span>
        </div>
        <div className="flex w-full justify-between py-3">
          <span>{discount}تومان</span>
          <span>تخفیف محصولات</span>
        </div>
        <div className="flex w-full flex-wrap justify-between py-3">
          <span>0 تومان</span>
          <span>هزینه ارسال</span>
          <span className="w-full text-right text-[12px]">
            هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
            محاسبه و به این مبلغ اضافه خواهد شد.
          </span>
        </div>
        <div className="flex w-full flex-wrap justify-between py-3">
          <span>تومان {(amount - discount).toLocaleString()}</span>
          <span>مبلغ قابل پرداخت</span>
          {!isAuthenticated?<Link to={'/cart/completion-info'} className="mt-2 w-full rounded-lg bg-green-700 text-white hover:bg-green-700/80 ease-in transition-all text-center p-2">تکمیل اطلاعات </Link>:<Modal
        isMobile={isMobile}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
      />
            }
        </div>
      </div>
    </main>
  )
}

export default BasketItems
