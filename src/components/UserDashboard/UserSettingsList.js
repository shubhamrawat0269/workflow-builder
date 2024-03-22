const UserSettingsList = () => {
  return (
    <div className="border grid-col-3 primary-bg h-full">
      <ol className="setting-list flex flex-col flex-row p-5">
        <li className="text-2xl p-2 px-5">Recent</li>
        <li className="text-2xl p-2 px-5">Settings</li>
        <li className="text-2xl p-2 px-5">Upgrade</li>
      </ol>
    </div>
  );
};

export default UserSettingsList;
