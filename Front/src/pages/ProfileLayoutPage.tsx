import { Outlet } from 'react-router-dom'
import SideBarProfile from '../components/Profile/SideBarProfile'

function ProfileLayoutPage() {
  return (
    <div className="flex flex-col-reverse items-center gap-5 md:flex-row md:justify-center">
      <div className="xs:w-[90%] h-auto w-[330px] rounded-md border border-[#CBCBCB] sm:w-[80%] md:h-[494px] md:w-[912px]">
        <Outlet />
      </div>
      <SideBarProfile />
    </div>
  )
}

export default ProfileLayoutPage
