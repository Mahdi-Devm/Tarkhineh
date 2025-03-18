import { NavLink } from 'react-router-dom'
import Logo from '../../assets/Logo/Logo.png'
import { sidebarLinks } from '../../constants/sidebarLinks'

export default function Sidebars() {
  return (
    <section className="sticky h-screen border-r border-r-gray-300 bg-white pt-6">
      <div className="nav-wrapper flex flex-col gap-1">
        <img
          src={Logo}
          alt="DashStack logo"
          width={149}
          height={27}
          className="mx-auto mb-4"
        />

        {sidebarLinks.map((link, index) => (
          <div key={index}>
            <NavLink
              to={link.Link}
              className={({ isActive }) =>
                `mx-6 flex items-center gap-2 rounded-lg px-4 py-3 transition-all duration-300 ${
                  isActive
                    ? 'scale-105 bg-[#47875C] text-white shadow-lg'
                    : 'text-light-black bg-white hover:bg-gray-100 hover:ps-6'
                }`
              }
            >
              {link.icon}
              <span className="font-medium">{link.LinkName}</span>
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  )
}
