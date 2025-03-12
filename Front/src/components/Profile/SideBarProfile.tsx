import UserAccessList from './UserAccessList'
import UserInformation from './UserInformation'

function SideBarProfile() {
  return (
    <div className="h-[342px] w-[288px] rounded-md border-1 border-[#CBCBCB] p-2">
      <UserInformation />
      <hr className="w-[272px] text-[#757575]" />
      <UserAccessList />
    </div>
  )
}

export default SideBarProfile
