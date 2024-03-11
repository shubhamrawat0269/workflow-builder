import React from "react";
import { WorkFlowLogo } from "../../assets/logo";
import "./NavbarStyle.css";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

const Navbar = () => {
  return (
    <div className="navbar__section">
      <WorkFlowLogo />
      <div className="btns">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Navbar;
