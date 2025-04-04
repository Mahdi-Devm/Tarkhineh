import { useState } from 'react'
import ImageHeaderForIformatian from '../ImageHeaderForIformatian'
import DelegateGrid from './DelegateGrid'
import DelegateBenefits from './DelegateBenefits'
import ConsultationForm from './ConsultationForm'
import iamgeat from '../../assets/optimized/at.jpg'
function Delegate() {
  const [startDate, setStartDate] = useState<Date | null>(null)

  return (
    <div className="font-sans">
      <ImageHeaderForIformatian
        height="336px"
        title="!همین الان به خانواده بزرگ ترخینه بپیوندید"
        image={iamgeat}
      />

      <DelegateGrid />

      <hr className="mx-auto my-6 w-full max-w-[1224px] border-t border-[#CBCBCB]" />

      <DelegateBenefits />

      <hr className="mx-auto my-6 w-full max-w-[1224px] border-t border-[#CBCBCB]" />

      <ConsultationForm startDate={startDate} setStartDate={setStartDate} />
    </div>
  )
}

export default Delegate
