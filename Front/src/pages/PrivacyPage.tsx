import QuestionBox from "../components/FAQ-Rules-Privacy/QuestionBox"
import Tag from "../components/FAQ-Rules-Privacy/Tag"
import ImageHeaderForIformatian from "../components/ImageHeaderForIformatian"
import { PrivacyData } from "../constants/DataPrivacy"

function PrivacyPage() {
  return <div className="mx-auto max-w-[1224px]">
  <div className="overflow-hidden rounded-2xl">
    <div className="absolute left-0 z-10 h-[336px] w-full bg-green-400/0 backdrop-brightness-50 "></div>
    <ImageHeaderForIformatian
      title="حریم شخصی کاربران"
      height="336px"
      image="https://s3-alpha-sig.figma.com/img/fc67/21c3/52467643468fba8df9171703b6208155?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oeD6DXzm33dTWU-951oTzdDOdsPkAHnq~vcl4yxKW71e4gJkE~QMDyutJLR71~Yni90iDG1RmSA1DBYNsK2rsH9mYCL2ASC2l-J1u3Ce-SPKljgYM~u~7wEythw2SiI~M8RlNDhnevgGuv6aBKOQ~hkmCbRFBz2bmdV7GsmKeUC5UpDK8pwqTdwBC-1gUl8yyUw1nZxygbvrvPWJRnFxYsREL35BGFcW4~SRA-GmbE56L6BmJe4FDbU-8uX8IimmcoQVvS3TQ237HpWMpXr7lvdj0j7uI9eVPp9m0yaATwdIOBioPgtdtARUOhD9Fzo5eRpMRSkCqdLOe9UG6-W~2A__"
    />
  </div>
  <div className="mt-5 overflow-hidden text-right">
    <Tag  />
    <QuestionBox Data={PrivacyData} />
    
  </div>
</div>
}

export default PrivacyPage
