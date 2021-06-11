import React from "react";
import "./Footer.css";
import Buttton from "../../Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={`footer__section`}>
        <div>
          <p>ghjhjjinghhjghhjbjh</p>
          <p>lgsjgglglk</p>
        </div>

        <div className="subscribe__seftion">
          <div className="input_subscribe_field">
            
            <div className="col">
              <input name="Email" placeholder="Your Email" />
            </div>

            <div className="col">
              <Link to="/_target">
                <Buttton buttonStyle="btn--outline"> Subscribe </Buttton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
