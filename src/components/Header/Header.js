import React from "react";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import UserLoginBtns from "./components/UserLoginBtns";

const Header = () => {
  return (
    <div className="primary-bg">
      <div className="flex justify-between items-center container">
        <Logo />
        <Menu />
        <UserLoginBtns />
      </div>
    </div>
  );
};

export default Header;
