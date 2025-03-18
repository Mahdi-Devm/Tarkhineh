import { NavLink } from 'react-router-dom'

import Logo from '../../assets/Logo/Logo.png'
import { sidebarLinks } from '../../constants/sidebarLinks'

export default function Sidebar() {
  return (
    <section className="sticky border-r border-r-gray-300 bg-white pt-6">
      <div className="nav-wrapper flex flex-col gap-1">
        <img
          src={Logo}
          alt="DashStack logo"
          width={149}
          height={27}
          className="mx-auto mb-4"
        />

        {sidebarLinks.map((Link, index) => (
          <>
            <NavLink
              key={Link.Link}
              to={Link.Link}
              className={({ isActive }) =>
                isActive
                  ? 'bg-primary-light sidebar-active-link relative mx-6 flex items-center gap-2 rounded-lg px-4 py-3 text-white'
                  : 'text-light-black mx-6 flex items-center gap-2 bg-white px-4 py-3 transition-all duration-300 hover:ps-6'
              }
            >
              {Link.icon}

              {Link.LinkName}
            </NavLink>

            {index === 4 && (
              <>
                <hr className="text-gray-200" />

                <span className="mt-2 px-10 text-gray-400 uppercase">
                  Pages
                </span>
              </>
            )}

            {index === 8 && (
              <>
                <hr className="text-gray-200" />
              </>
            )}
          </>
        ))}
      </div>
    </section>
  )
}
