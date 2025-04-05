import { Link } from 'react-router-dom'

function FooterLinks() {
  return (
    <div className="text-right">
      <h3 className="mb-4 w-[100%] text-2xl font-bold text-white md:text-3xl">
        دسترسی آسان
      </h3>

      <ul className="flex flex-col gap-3 text-gray-400">
        <li>
          <Link
            to="/faq"
            className="text-lg font-medium transition-colors duration-300 hover:text-white sm:text-base"
          >
            پرسش‌های متداول
          </Link>
        </li>
        <li>
          <Link
            to="/rules"
            className="text-lg font-medium transition-colors duration-300 hover:text-white sm:text-base"
          >
            قوانین ترخینه
          </Link>
        </li>
        <li>
          <Link
            to="/privacy"
            className="text-lg font-medium transition-colors duration-300 hover:text-white sm:text-base"
          >
            حریم خصوصی
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default FooterLinks
