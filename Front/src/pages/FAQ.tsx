import ImageHeaderForIformatian from '../components/ImageHeaderForIformatian'
import Tag from '../components/FAQ-Rules-Privacy/Tag'
import QuestionBox from '../components/FAQ-Rules-Privacy/QuestionBox'
import { FAQData } from '../constants/DataFAQ'
function FAQ() {
  return (
    <div className="mx-auto max-w-[1224px]">
      <div className="overflow-hidden rounded-2xl">
        <div className="absolute left-0 z-10 h-[336px] w-full bg-green-400/0 backdrop-brightness-50 backdrop-grayscale-100"></div>
        <ImageHeaderForIformatian
          title="سوالات متداول از ترخینه"
          height="336px"
          image="https://s3-alpha-sig.figma.com/img/09dc/f51e/6956321429c870b11fe0695ce138fd8f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SVRifRoZzNFpY-bmquKerlkvjxdf-0QUyz-MR64Ri0TZrgilO5eNdKzH1jc78o3ShCmW2KW-R7UCTicGBmpvOsH63IDSb7jBzC56ehj0y~WWvq1QBa4KtA1iM99dUR1uf8f9tq-k6xloaN3Nn2S1mjmxNJIgCvO6gTlmnVYoFGvZjfL5nsZMOwzyE1EaGCjj7Tq18B3-kM-1fnCVzb~0yz~dqQSDKTeyotb1JtSsS9t1rSGEMQLOGYQxY6Jdd6zasot2a3v5gBtImaTCzlsfS3h0JnpFfIjxwPS3jc4-xlsJAveEu6W2ULJJXH2pvdOLrwoSX9G59KQrmHYLCschBQ__"
        />
      </div>
      <div className="mt-5 overflow-hidden text-right">
        <Tag  />
        <QuestionBox Data={FAQData} />
        
      </div>
    </div>
  )
}

export default FAQ
