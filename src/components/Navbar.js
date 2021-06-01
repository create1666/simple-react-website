import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEarlybirds, FaTimes, FaBars } from "react-icons/fa";
import Button from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClickNavMenuIcon = () => setClick(!click);
  const closeMenuHandler = () => setClick(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);
  useEffect(() => {
    showButton();
    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          {/* flex-1 */}
          <Link to="/" className="navbar-logo" onClick={closeMenuHandler}>
            <FaEarlybirds className="fa fa-Earlybirds" />
            CREATE1666
          </Link>
          {/* flex-2 */}
          <div className="menu-icon" onClick={handleClickNavMenuIcon}>
            {click ? <FaTimes className="fa-times" /> : <FaBars />}
          </div>
          {/* flex-3 */}{" "}
          <div>
            <ul className={!click ? "nav-menu" : "nav-menu active"}>
              {/* ---children lists Starts here-- */}
              <li className="nav-item">
                <Link to="/home" className="nav-links">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/services" className="nav-links">
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/products " className="nav-links">
                  Products
                </Link>
              </li>

              <li className="btn">
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
      </div>
    </>
  );
};

export default Navbar;
