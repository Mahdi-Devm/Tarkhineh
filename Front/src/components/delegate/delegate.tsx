import { useState } from 'react'
import ImageHeaderForIformatian from '../ImageHeaderForIformatian'
import image from '../../assets/imageDelegate/sign.png'
import image1 from '../../assets/imageDelegate/sign1.png'
import image2 from '../../assets/imageDelegate/sign2.png'
import image3 from '../../assets/imageDelegate/sign3.png'
import { CiMaximize2 } from 'react-icons/ci'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DataDelegate = [
  { title: 'اعطای دستورالعمل پخت غذاها', image: image },
  { title: 'طرح‌های تشویقی ارتقای فروش', image: image1 },
  { title: 'تسهیلات راه‌اندازی رستوران و تجهیز آن', image: image2 },
  { title: 'بیش از 20 شعبه فعال در سراسر کشور', image: image3 },
]

const data = [
  { name: 'مشاوره در امور حقوقی، مالی و مالیاتی' },
  { name: 'پشتیبانی بازاریابی و منابع انسانی' },
  { name: 'دریافت مشاوره جهت تامین مواد اولیه و تجهیزات' },
  { name: 'طرح های تشویقی برای ارتقا فروش' },
]

const data2 = [
  { name: 'مشاوره در امور حقوقی، مالی و مالیاتی' },
  { name: 'پشتیبانی بازاریابی و منابع انسانی' },
  { name: 'دریافت مشاوره جهت تامین مواد اولیه و تجهیزات' },
  { name: 'طرح های تشویقی برای ارتقا فروش' },
]

function Delegate() {
  const [startDate, setStartDate] = useState<Date | null>(null)

  return (
    <div className="font-sans">
      <ImageHeaderForIformatian
        height="336px"
        title="همین الان به خانواده بزرگ ترخینه بپیوندید!"
        image="https://www.figma.com/file/a1A9NqKpy0fC9pQpVBkTaa/image/943bda1b1c396fb1fd8e64992f82dd5ce96917b4"
      />

      <div className="mt-8">
        <div className="mx-auto grid max-w-[1224px] grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
          {DataDelegate.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="mb-4 h-[100px] w-[100px] rounded-lg object-cover sm:h-[100px] sm:w-[100px]"
              />
              <h3 className="text-center text-lg font-semibold text-[#353535] sm:text-sm">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <hr className="mx-auto my-6 w-full max-w-[1224px] border-t border-[#CBCBCB]" />

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

      <hr className="mx-auto my-6 w-full max-w-[1224px] border-t border-[#CBCBCB]" />

      <div className="my-10 flex w-full flex-col items-center justify-center rounded-lg p-6">
        <h1 className="mb-6 text-center text-2xl font-semibold text-[#417F56]">
          دریافت مشاوره
        </h1>
        <form className="flex w-full max-w-[925px] flex-col gap-5 sm:flex-row">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="زمان ایده‌آل"
            className="mb-4 h-[40px] w-full rounded-lg border border-stone-300 p-2 focus:ring-2 focus:ring-[#417F56] focus:outline-none sm:w-[392px]"
            dateFormat="yyyy/MM/dd"
            isClearable
          />

          <input
            type="email"
            placeholder="شماره تماس"
            className="mb-4 h-[40px] w-full rounded-lg border border-stone-300 p-2 focus:ring-2 focus:ring-[#417F56] focus:outline-none sm:w-[392px]"
          />

          <input
            placeholder="نام و نام‌خانوادگی"
            className="h-[40px] w-full rounded-lg border border-stone-300 p-2 focus:ring-2 focus:ring-[#417F56] focus:outline-none sm:w-[392px]"
          />
        </form>
        <button className="transform cursor-pointer rounded-lg border border-[#417F56] bg-[#417F56] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-white hover:text-[#417F56] hover:shadow-lg">
          درخواست مشاوره
        </button>
      </div>
    </div>
  )
}

export default Delegate
