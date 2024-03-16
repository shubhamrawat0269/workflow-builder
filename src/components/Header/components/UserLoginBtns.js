import React from "react";
import { useNavigate } from "react-router-dom";

const UserLoginBtns = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <button className="btn" onClick={() => navigate("/signup")}>
        Sign In
      </button>
      <button className="spcl-btn">Try for free</button>
    </div>
  );
};

export default UserLoginBtns;
