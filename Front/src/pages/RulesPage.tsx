import QuestionBox from "../components/FAQ-Rules-Privacy/QuestionBox"
import Tag from "../components/FAQ-Rules-Privacy/Tag"
import ImageHeaderForIformatian from "../components/ImageHeaderForIformatian"
import { RulesData } from "../constants/DataRules"

function RulesPage() {
  return <div className="mx-auto max-w-[1224px]">
  <div className="overflow-hidden rounded-2xl">
    <div className="absolute left-0 z-10 h-[336px] w-full bg-green-400/0 backdrop-brightness-50 "></div>
    <ImageHeaderForIformatian
      title="قوانین ترخینه"
      height="336px"
      image="https://s3-alpha-sig.figma.com/img/7ec5/e183/d4c10a439ca572b94d28cd339d9ff1da?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E4MumpZ8~2WQ3ybP~KMsrw9d7Vt-2qjwPQFPe60R4Mm9YscUq694FuTBnz8JD~XRl8Dpchk1I39IiZNejf6phw0qAISOl8kNsHLRz34MFb2LcUE~ieS9tSxksNrCQZuQcp7DrJj3GBUmcwu27QBs7vyDrZ1E-9ZoKNieBGvqNWtUQUqgrWFftDIAiiREzP1IAmE7NaSUnKVWlIh2XUrMAntb-1sbs-I7vkjMVllX~zIxLfXLoCC-Qc2q9dm9sm0CVPeLBBQVqzbc4RkflXtU8uW18mnWp7OB08AO5F0OVbxcifrk2y~Ffc8Aq7co0P~DdK1Mg0rElZGpp8qXycRYaA__"
    />
  </div>
  <div className="mt-5 overflow-hidden text-right">
    <Tag  />
    <QuestionBox Data={RulesData} />
    
  </div>
</div>
}

export default RulesPage
