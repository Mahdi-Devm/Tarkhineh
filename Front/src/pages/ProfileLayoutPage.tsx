import { Outlet } from 'react-router-dom'
import SideBarProfile from '../components/Profile/SideBarProfile'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient

function ProfileLayoutPage() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="flex flex-col-reverse items-center gap-5 md:flex-row md:justify-center">
      <div className="xs:w-[90%] h-auto w-[330px] rounded-md border border-[#CBCBCB] sm:w-[80%] md:h-[494px] md:w-[912px] overflow-y-auto">
        <Outlet />
      </div>
      <SideBarProfile />
    </div>
   </QueryClientProvider>  
  )
}

export default ProfileLayoutPage
