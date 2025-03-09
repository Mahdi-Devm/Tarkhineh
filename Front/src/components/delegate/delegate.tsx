import ImageHeaderForIformatian from '../ImageHeaderForIformatian'
import image from '../../assets/imageDelegate/sign.png'
import image1 from '../../assets/imageDelegate/sign1.png'
import image2 from '../../assets/imageDelegate/sign2.png'
import image3 from '../../assets/imageDelegate/sign3.png'
import { CiMaximize2 } from 'react-icons/ci'

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
  return (
    <div>
      <ImageHeaderForIformatian
        height="336px"
        title="همین الان به خانواده بزرگ ترخینه بپیوندید!"
        image="https://www.figma.com/file/a1A9NqKpy0fC9pQpVBkTaa/image/943bda1b1c396fb1fd8e64992f82dd5ce96917b4"
      />

      <div className="mt-8 flex justify-center">
        <div
          className="flex items-center justify-center rounded-lg p-4"
          style={{ width: '1224px', height: 'auto' }}
        >
          {DataDelegate.map((item, index) => (
            <div
              key={index}
              className="m-4 flex flex-col items-center justify-center rounded-lg"
              style={{ width: '220px', height: '220px' }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="mb-4 h-[120px] w-[120px] rounded-lg object-cover"
              />
              <h3 className="text-center text-lg font-semibold text-[#353535]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <hr
        style={{
          borderColor: '#CBCBCB',
          borderWidth: '1px',
          width: '1224px',
          margin: '20px auto',
        }}
      />
      <div className="mx-auto flex h-[220px] w-[925px] flex-col items-center justify-center">
        <h1 className="mb-10 text-center text-lg text-[24px] font-semibold">
          مزیت دریافت نمایندگی
        </h1>

        <div className="flex w-full justify-center">
          <div className="flex w-1/2 flex-col">
            {data.map((item, index) => (
              <div key={index} className="mb-4 flex items-center">
                <p className="w-full text-right text-[18px] font-normal text-[#353535]">
                  {item.name}
                </p>
                <CiMaximize2 className="mr-2 text-xl text-[#417F56]" />
              </div>
            ))}
          </div>

          <div className="flex w-1/2 flex-col">
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

      <hr
        style={{
          borderColor: '#CBCBCB',
          borderWidth: '1px',
          width: '1224px',
          margin: '20px auto',
        }}
      />

      <div>
        <h1>دریافت مشاوره</h1>
        <form>
          <input type="text" placeholder="نام" className="mb-4 border p-2" />
          <input type="text" placeholder="ایمیل" className="mb-4 border p-2" />
          <input type="text" placeholder="پیام" className="mb-4 border p-2" />
        </form>
      </div>
    </div>
  )
}

export default Delegate
