import { useEffect } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import UserWorkspace from "./UserWorkspace";

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
      {/* <h3>User: {user?.displayName}</h3>
      <h3>EMail: {user?.email}</h3>
      <button onClick={logoutUser}>Logout</button> */}

      <UserNavbar email={user.email} dispatchLogout={logoutUser} />
      <UserWorkspace />
    </div>
  );
};

export default UserDashboard;
