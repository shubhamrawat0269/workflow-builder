import UserModule from "./UserModule";
import UserSettingsList from "./UserSettingsList";

const UserWorkspace = () => {
  return (
    <div className="grid grid-span-col workspace-section">
      <UserSettingsList />
      <UserModule />
    </div>
  );
};

export default UserWorkspace;
