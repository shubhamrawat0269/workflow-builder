import React from "react";
import Logo from "../Header/components/Logo";
import { validMailId } from "../../utils/utilsFunction";

const UserNavbar = ({ email, dispatchLogout }) => {
  return (
    <div className="primary-bg">
      <div className="flex justify-between items-center flex-row px-10">
        <div className="logo-email-section flex justify-between items-center flex-row">
          <Logo />
          <h4 className="text-2xl text-gray-300">{validMailId(email)}</h4>
        </div>
        <div className="navbar-utilities-section flex justify-between items-center flex-row gap-5">
          <label htmlFor="searchbox">
            <input
              type="text"
              name="search"
              id="searchbox"
              className="p-2 w-100 outline-none"
              placeholder="Search here"
              autoComplete="off"
            />
          </label>

          <button className="create-btn">Create</button>
          <button onClick={dispatchLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
