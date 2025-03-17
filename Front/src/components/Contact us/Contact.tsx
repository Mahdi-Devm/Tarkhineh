import { dataContact } from '../../constants/dataContact'
import ImageHeaderForIformatian from '../ImageHeaderForIformatian'
import ItemContact from './ItemContact'
import iamgeta from '../../assets/optimized/tm.jpg'
function Contact() {
  return (
    <div>
      <ImageHeaderForIformatian
        height="336px"
        title="با ترخینه در تماس باشید."
        image={iamgeta}
      />
      <div className="mt-6 flex flex-col items-center justify-between gap-6">
        {dataContact.map((item) => (
          <ItemContact key={item.title} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Contact
