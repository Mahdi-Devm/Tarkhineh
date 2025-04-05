function FooterBranches() {
  return (
    <div className="w-full text-right">
      <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
        شعبه‌های ترخینه
      </h3>
      <ul className="flex flex-col gap-3 text-gray-400">
        <li className="text-lg font-medium transition-colors duration-300 hover:text-white sm:text-base">
          شعبه اکباتان
        </li>
        <li className="text-lg font-medium transition-colors duration-300 hover:text-white sm:text-base">
          شعبه چالوس
        </li>
        <li className="text-lg font-medium transition-colors duration-300 hover:text-white sm:text-base">
          شعبه اقدسیه
        </li>
        <li className="text-lg font-medium transition-colors duration-300 hover:text-white sm:text-base">
          شعبه ونک
        </li>
      </ul>
    </div>
  )
}

export default FooterBranches
