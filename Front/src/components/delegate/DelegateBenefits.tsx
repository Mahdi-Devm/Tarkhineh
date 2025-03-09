import { data, data2 } from '../../constants/Datadelegate'
import { CiMaximize2 } from 'react-icons/ci'

function DelegateBenefits() {
  return (
    <div className="mx-auto flex w-full max-w-[925px] flex-col items-center justify-center">
      <h1 className="mb-10 text-center text-lg text-[24px] font-semibold">
        مزیت دریافت نمایندگی
      </h1>

      <div className="flex w-full flex-col sm:flex-row sm:justify-between">
        <div className="mb-4 flex w-full flex-col sm:mb-0 sm:w-1/2">
          {data.map((item, index) => (
            <div key={index} className="mb-4 flex items-center">
              <p className="w-full text-right text-[18px] font-normal text-[#353535]">
                {item.name}
              </p>
              <CiMaximize2 className="mr-2 text-xl text-[#417F56]" />
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col sm:w-1/2">
          {data2.map((item, index) => (
            <div key={index} className="mb-4 flex items-center">
              <p className="w-full text-right text-[18px] font-normal text-[#353535]">
                {item.name}
              </p>
              <CiMaximize2 className="mr-2 text-xl text-[#417F56]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DelegateBenefits
