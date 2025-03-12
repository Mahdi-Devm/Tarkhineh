import Profile from '../components/Profile/Profile'
import SideBarProfile from '../components/Profile/SideBarProfile'

function ProfileLayoutPage() {
  return (
    <div className="flex justify-center gap-5">
      <Profile />
      <SideBarProfile />
    </div>
  )
}

export default ProfileLayoutPage
