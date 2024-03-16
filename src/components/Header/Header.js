import React from "react";

const Header = () => {
  return (
    <div>
      <div>
        <img className="logo" src="images/flow.png" alt="logo" />
      </div>
      <div className="btns">
        <button>Sign In</button>
        <button>Try for free</button>
      </div>
    </div>
  );
};

export default Header;
