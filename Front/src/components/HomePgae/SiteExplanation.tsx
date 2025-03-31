import imagebg from '../../assets/imagemenures/food-shape-2.png'
import { CiPizza } from 'react-icons/ci'
import { CiDeliveryTruck } from 'react-icons/ci'
import { CiBurger } from 'react-icons/ci'
import { CiTrophy } from 'react-icons/ci'

const foodData = [
  {
    title: 'غذای فوق العاده با کیفیت',
    description:
      'تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر به فرد را ایجاد می کنند',
    icon: <CiPizza className="text-5xl font-semibold text-[#FFB936]" />,
  },
  {
    title: 'دستور العمل های اصلی',
    description:
      'تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر به فرد را ایجاد می کنند',
    icon: <CiBurger className="text-5xl font-semibold text-[#FFB936]" />,
  },
  {
    title: 'تحویل سریع و سریع',
    description:
      'تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر به فرد را ایجاد می کنند',
    icon: <CiDeliveryTruck className="text-5xl font-semibold text-[#FFB936]" />,
  },
  {
    title: '100٪ غذاهای تازه',
    description:
      'تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر به فرد را ایجاد می کنند',
    icon: <CiTrophy className="text-5xl font-semibold text-[#FFB936]" />,
  },
]

function SiteExplanation() {
  return (
    <div
      className="mx-auto flex h-70 w-340 items-center justify-center rounded-2xl p-2"
      style={{
        backgroundImage: `url(${imagebg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgb(40, 36, 36)',
        backgroundBlendMode: 'lighten',
      }}
    >
      <div className="mx-auto flex w-320 space-x-4 p-2">
        {foodData.map((item, index) => (
          <div
            key={index}
            className="flex w-76 flex-col rounded-xl p-4 text-right"
          >
            <div className="mb-4 ml-58 w-70">{item.icon}</div>
            <h3 className="text-xl font-semibold text-[#fff]">{item.title}</h3>
            <p className="text-sm text-stone-100">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SiteExplanation
