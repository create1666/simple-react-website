import React from "react";
import { Link } from "react-router-dom";
import { FaEarlybirds, FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo-container">
            <FaEarlybirds className="navbar-logo-icon" />
            CREATE1666
          </Link>
          <div className="navabr-menu-icons"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
