import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEarlybirds, FaTimes, FaBars } from "react-icons/fa";
import Button from "../components/Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClickNavMenuIcon = () => setClick(!click);
  const [button, setButton] = useState(true);

  useEffect(() => {
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    window.addEventListener("resize", showButton);
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo-container">
            <FaEarlybirds className="navbar-logo-icon" />
            CREATE1666
          </Link>
          <div className="navabr-menu-icons" onClick={handleClickNavMenuIcon}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/services" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links">
                Products
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline"> SIGN UP </Button>
                </Link>
              ) : (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    {" "}
                    SIGN UP{" "}
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
