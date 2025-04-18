import { Link } from "react-router-dom"
import { spiderweb } from "../../constants/BasketData"

const EmptyCard = () => {
  return (
    <main className="mx-auto my-6 flex h-[435px] max-w-[1224px] items-center justify-center rounded-xl border border-[#cbcbcb] md:my-12 md:h-[554px]">
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-[16px] text-[#656565] lg:text-xl">
              شما درحال حاضر هیچ سفارشی ثبت نکرده اید
            </h2>
            <Link
              className="rounded-lg border border-green-800 px-7 py-2 text-[12px] font-semibold text-green-800 lg:text-[16px]"
              to={'/menu'}
            >
              منوی رستوران{' '}
            </Link>
          </div>
          <img
            className="absolute z-[-2] max-w-[70%]"
            src={spiderweb}
            alt="web"
          />
        </main>
  )
}

export default EmptyCard