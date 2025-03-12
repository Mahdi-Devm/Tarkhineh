import { Link, useLocation } from 'react-router-dom'

const Tag = () => {
  const location = useLocation()
  const path = location.pathname
  const links = [
    { to: '/faq', label: 'سوالات متداول' },
    { to: '/rules', label: 'قوانین' },
    { to: '/privacy', label: 'حریم خصوصی' },
  ]

  return (
    <div className="flex w-full flex-row-reverse gap-3 rounded-2xl bg-[#EDEDED]">
      {links.map((link) => (
        <Link
          key={link.to}
          className={`mr-6 block py-4 ${path === link.to ? 'border-b-2 border-green-700 text-green-700' : 'text-[#717171]'}`}
          to={link.to}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default Tag
