import Profile from "../components/Profile/Profile";
import AddaddressProfile from "../components/Profile/AddaddressProfile";
import InterestsProfile from "../components/Profile/InterestsProfile";
import LogoutProfile from "../components/Profile/LogoutProfile";
import TrackingordersProfile from "../components/Profile/TrackingordersProfile";

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
