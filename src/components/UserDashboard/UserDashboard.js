import { useUserContext } from "../../hooks/useUserContext";

const UserDashboard = () => {
  const { user, logoutUser } = useUserContext();

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>User: {user.displayName}</h3>
      <h3>EMail: {user.email}</h3>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
};

export default UserDashboard;
