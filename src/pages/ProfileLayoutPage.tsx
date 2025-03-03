import AddaddressProfile from "../components/AddaddressProfile";
import InterestsProfile from "../components/InterestsProfile";
import LogoutProfile from "../components/LogoutProfile";
import Profile from "../components/Profile";
import TrackingordersProfile from "../components/TrackingordersProfile";

function ProfileLayoutPage() {
  return (
    <div>
      <Profile />
      <InterestsProfile />
      <AddaddressProfile />
      <LogoutProfile />
      <TrackingordersProfile />
    </div>
  );
}

export default ProfileLayoutPage;
