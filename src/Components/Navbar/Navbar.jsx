import React from "react";
import iplLogo from '../../assets/logo.png'

const Navbar = ({availableBalance}) => {
  return (
    <div className="navbar ">
      <div className="flex-1">
        <img src={iplLogo} alt="" />
      </div>
      <div className="flex-none">
        <button className="btn">
          {availableBalance} Coins
        </button>
      </div>
    </div>
  );
};

export default Navbar;
