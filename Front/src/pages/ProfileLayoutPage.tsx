import { Outlet } from 'react-router-dom'
import SideBarProfile from '../components/Profile/SideBarProfile'

function ProfileLayoutPage() {
  return (
    <div className="flex justify-center gap-5">
      <div className="h-[494px] w-[912px] rounded-md border-1 border-[#CBCBCB]">
        <Outlet />
      </div>
      <SideBarProfile />
    </div>
  )
}

export default ProfileLayoutPage
