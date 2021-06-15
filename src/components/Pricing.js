import React from "react";
import { FaCamera, FaGoogleWallet, FaWpbeginner } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";
import './Pricing.css'

const pricing = () => {
  return (
    <>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">pricing</h1>
          <div className="pricing__container">
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardinfo">
                <div className="icon">
                  <FaGoogleWallet />
                </div>
                <h3>Starter</h3>
                <h4>$20.5</h4>
                <p>per month</p>
                <ul className="pricing__container-features">
                  <li>500 Transactions</li>
                  <li>5% Cash Back</li>
                  <li>$20,000 Limit</li>
                </ul>
                <Button buttonStyle="btn--outline" buttonColor="primary">Choose Plan</Button>
              </div>
            </Link>
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardinfo">
                <div className="icon">
                  <FaCamera />
                </div>
                <h3>Gold</h3>
                <h4>$10.5</h4>
                <p>per month</p>
                <ul className="pricing__container-features">
                  <li>200 Transactions</li>
                  <li>2% Cash Back</li>
                  <li>$10,000 Limit</li>
                </ul>
                <Button buttonStyle="btn--outline" buttonColor="primary">Choose Plan</Button>
              </div>
            </Link>

            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardinfo">
                <div className="icon">
                  <FaWpbeginner />
                </div>
                <h3>Diamond</h3>
                <h4>$5.5</h4>
                <p>per month</p>
                <ul className="pricing__container-features">
                  <li>100 Transactions</li>
                  <li>1% Cash Back</li>
                  <li>$5000 Limit</li>
                </ul>
                <Button buttonStyle="btn--outline" buttonColor="primary">Choose Plan</Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default pricing;
