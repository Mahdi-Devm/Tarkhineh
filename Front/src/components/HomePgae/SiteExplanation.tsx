import imagebg from '../../assets/imagemenures/food-shape-2.png'
import { CiPizza, CiDeliveryTruck, CiBurger, CiTrophy } from 'react-icons/ci'

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
    title: 'تحویل سریع و سریع و آسان',
    description:
      'تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر به فرد را ایجاد می کنند',
    icon: <CiDeliveryTruck className="text-5xl font-semibold text-[#FFB936]" />,
  },
  {
    title: '100٪ غذاهای تازه طبیعی',
    description:
      'تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر به فرد را ایجاد می کنند',
    icon: <CiTrophy className="text-5xl font-semibold text-[#FFB936]" />,
  },
]

function SiteExplanation() {
  return (
    <div
      className="mx-auto my-5 w-full bg-amber-100 rounded-2xl bg-cover bg-center p-4"
      style={{
        backgroundImage: `url(${imagebg})`,
        backgroundBlendMode: 'lighten',
        backgroundColor: 'rgb(40, 36, 36)',
      }}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {foodData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col text-center items-start rounded-xl p-4  backdrop-blur-md"
          >
            <div className="mb-2 self-center">{item.icon}</div>
            <h3 className="text-center w-full text-base font-semibold text-white mb-3 sm:text-lg md:text-xl">
              {item.title}
            </h3>
            <p className="text-center text-sm leading-relaxed text-stone-100">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SiteExplanation
