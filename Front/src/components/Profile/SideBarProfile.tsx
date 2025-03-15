import UserAccessList from './UserAccessList'
import UserInformation from './UserInformation'

function SideBarProfile() {
  return (
    <div className="xs:h-[200px] xs:w-[200px] h-[342px] w-[288px] rounded-md border border-[#CBCBCB] p-2 sm:h-[280px] sm:w-[240px] md:h-auto md:w-[300px]">
      <UserInformation />
      <hr className="w-full text-[#757575]" />
      <UserAccessList />
    </div>
  )
}

export default SideBarProfile
