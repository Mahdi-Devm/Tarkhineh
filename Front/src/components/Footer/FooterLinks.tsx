import { Link } from "react-router-dom"

function FooterLinks() {
  return (
    <div className="w-full text-right">
      <h3 className="mb-4 text-2xl font-bold md:text-3xl">دسترسی آسان</h3>
      <ul className="flex flex-wrap gap-4 text-gray-300">
        <Link to={'/faq'} className="text-lg font-semibold sm:text-base">پرسش‌های متداول</Link>
        <Link to={'/rules'} className="text-lg font-semibold sm:text-base">قوانین ترخینه</Link>
        <Link to={'/privacy'} className="text-lg font-semibold sm:text-base">حریم خصوصی</Link>
      </ul>
    </div>
  )
}

export default FooterLinks
