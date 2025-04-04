import { dataContact } from '../../constants/dataContact'
import ImageHeaderForIformatian from '../ImageHeaderForIformatian'
import ItemContact from './ItemContact'
import iamgeta from '../../assets/optimized/tm.jpg'
import { AiOutlineMail, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai'
import { CiPaperplane } from 'react-icons/ci'
function Contact() {
  return (
    <div className="container mx-auto px-4">
      <ImageHeaderForIformatian
        height="336px"
        title="با ترخینه در تماس باشید."
        image={iamgeta}
      />

      <div className="mt-6 flex flex-wrap justify-between gap-6">
        {dataContact.map((item) => (
          <ItemContact key={item.title} {...item} />
        ))}
      </div>

      <div className="mx-auto mt-12 flex flex-col items-start justify-center gap-10 rounded-3xl bg-stone-100 p-5 md:flex-row">
        <div className="w-150 rounded-lg bg-white p-6">
          <h1 className="mb-4 text-xl font-semibold">فرم را پر کنید</h1>
          <p className="mb-4 text-gray-600">
            آدرس ایمیل شما منتشر نخواهد شد. فیلدهای الزامی علامت گذاری شده اند *
          </p>
          <form className="flex flex-col gap-4">
            <div className="flex items-center border-b border-gray-300 pb-2">
              <AiOutlineMail className="mr-2 text-xl text-gray-500" />
              <input
                type="text"
                placeholder="نام"
                className="w-100 p-2 outline-none"
                required
              />
            </div>
            <div className="flex items-center border-b border-gray-300 pb-2">
              <AiOutlineUser className="mr-2 text-xl text-gray-500" />
              <input
                type="email"
                placeholder="ایمیل"
                className="w-full p-2 outline-none"
                required
              />
            </div>
            <div className="flex items-start border-b border-gray-300 pb-2">
              <AiOutlineMessage className="mt-1 mr-2 text-xl text-gray-500" />
              <textarea
                placeholder="پیام شما"
                className="h-32 w-full p-2 outline-none"
                required
              ></textarea>
            </div>
            <button className="flex h-12 w-50 items-center justify-center gap-2 rounded-md bg-[#00813D] p-2 text-xl font-semibold text-white transition-all duration-300 hover:bg-[#00a14a] hover:shadow-lg">
              <span>ارسال</span>
              <CiPaperplane className="text-2xl transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        <div className="h-54 w-full overflow-hidden rounded-lg shadow-md md:h-96 md:w-1/2">
          <iframe
            className="h-100 w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093795!2d144.9537353156169!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2z2KfYs9iq2KfZhSDYp9mE2YXZhtiMINmB2KfYsdmG2Yog2YXYr9in2Ycg2KfZhNmG2K_ZiiDYp9mE2YXZhNmF!5e0!3m2!1sen!2s!4v1645851220192!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
