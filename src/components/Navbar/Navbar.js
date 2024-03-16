import React from "react";
import { WorkFlowLogo } from "../../assets/logo";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <div className="navbar__section">
      <WorkFlowLogo />
      <div className="btns">
        {isAuthenticated ? (
          <div className="authentication__info">
            <div className="user__info">
              <img
                className="profile__img"
                src={user.picture}
                alt={user.name}
              />
              <h2>{user.name}</h2>
            </div>
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </div>
        ) : (
          <button onClick={() => loginWithRedirect()}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
