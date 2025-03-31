import ImageHeaderForIformatian from '../ImageHeaderForIformatian'
import imageab from '../../assets/optimized/ab.jpg'
import iamge1 from '../../assets/optimized/01.png'
import iamge2 from '../../assets/optimized/02.png'
import iamge3 from '../../assets/optimized/03-1.png'

import Partners1 from '../../assets/optimized/03-2.jpg'
import Partners2 from '../../assets/optimized/04-2.jpg'
import Partners3 from '../../assets/optimized/02-2.jpg'

function AboutComponent() {
  const services = [
    {
      img: iamge1,
      title: 'انتخاب غذا',
      desc: 'تجربه‌ای عالی در انتخاب غذای سریع و متنوع',
    },
    {
      img: iamge2,
      title: 'تحویل سریع',
      desc: 'ارسال سریع و مطمئن با بسته‌بندی حرفه‌ای',
    },
    {
      img: iamge3,
      title: 'پخت و پز با دقت',
      desc: 'استفاده از مواد اولیه تازه و باکیفیت',
    },
  ]

  const partners = [
    { img: Partners1, name: 'دنیل جک', role: 'سرآشپز ارشد' },
    { img: Partners2, name: 'متئو لوی', role: 'سرآشپز ارشد' },
    { img: Partners3, name: 'هنری لوکاس', role: 'مدیر سالن' },
  ]

  return (
    <div className="container mx-auto px-4">
      <ImageHeaderForIformatian
        height="336px"
        title="!درباره ترخینه بیشتر بدانید"
        image={imageab}
      />

      <div className="mt-16 text-center">
        <p className="text-xl font-semibold text-[#00813D]">
          فرآوری مواد غذایی
        </p>
        <h1 className="mt-2 text-5xl font-bold text-gray-800">
          با سرآشپزهای متخصص ما ملاقات کنید
        </h1>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={partner.img}
              alt={partner.name}
              className="mb-5 h-88 w-78 rounded-2xl object-cover shadow-md"
            />
            <h2 className="text-xl font-bold text-[#00813D]">{partner.name}</h2>
            <p className="mt-2 text-2xl font-semibold text-gray-600">
              {partner.role}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl font-semibold text-[#00813D]">
          فرآوری مواد غذایی
        </p>
        <h1 className="mt-2 text-5xl font-bold text-gray-800">
          چگونه به شما خدمات می‌دهیم؟
        </h1>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="group flex flex-col items-center rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={service.img}
              alt={service.title}
              className="mb-5 h-62 w-72 object-contain"
            />
            <h2 className="text-3xl font-bold text-gray-800">
              {service.title}
            </h2>
            <p className="mt-3 text-center text-lg font-semibold text-gray-600">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutComponent
