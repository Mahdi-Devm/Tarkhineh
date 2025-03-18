import React, { ReactNode } from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

interface AdminLayoutProps {
  children: ReactNode
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="sidebar-wrapper hidden lg:col-span-2 lg:block">
        <Sidebar />
      </div>

      <div className="route-wrapper col-span-12 lg:col-span-10">
        <Navbar />
        <div className="px-6">{children}</div>
      </div>
    </div>
  )
}

export default AdminLayout
