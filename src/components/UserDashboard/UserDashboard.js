import { useEffect } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useUserContext();

  useEffect(() => {
    if (!user) {
      navigate("/signup");
    }
  }, [user]);

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>User: {user?.displayName}</h3>
      <h3>EMail: {user?.email}</h3>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
};

export default UserDashboard;
