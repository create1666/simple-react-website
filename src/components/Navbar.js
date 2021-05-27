import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEarlybirds, FaTimes, FaBars } from "react-icons/fa";
import Button from "./Button";
import "./Navbar.css";
import "../App.css";

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
          {/* flex-1 */}
          <Link to="/" className="navbar-logo-container">
            <FaEarlybirds className="navbar-logo" />
            CREATE1666
          </Link>
          {/* flex-2 */}
          <div className="navabr-icon" onClick={handleClickNavMenuIcon}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          {/* flex-3 */}{" "}
          <div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              {/* ---children lists Starts here-- */}
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
      </div>
    </>
  );
};

export default Navbar;
