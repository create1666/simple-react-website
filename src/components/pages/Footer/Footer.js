import React from "react";
import "./Footer.css";
import Buttton from "../../Button";
import { Link } from "react-router-dom";
import {
  FaEarlybirds,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={`footer__section darkBg`}>
        <div className="footer_heading-container">
          <div className="footer_paragraph-container">
            <p className="para_1">
              Join our exclusive membership to receive the latest news
            </p>
            <p className="para_2">You can unsubcribe at any time.</p>
          </div>
        </div>

        <div className="subscribe__section">
          <div className="input_subscribe-container">
            <form>
              <input
                name="Email"
                placeholder="Your Email"
                className="input_row"
              />

              <Buttton buttonStyle="btn--outline"> Subscribe </Buttton>
            </form>
          </div>
        </div>

        <div className="aboutfield__section">
          <div className="companyInfo_container">
            <div className="col-link-items">
              <h2>About</h2>
              <Link to="/" className="btn-link">
                How it works
              </Link>
              <Link to="/" className="btn-link">
                Testimonials
              </Link>
              <Link to="/" className="btn-link">
                career
              </Link>
              <Link to="/" className="btn-link">
                Terms and Services
              </Link>
            </div>

            <div className="col-link-items">
              <h2>Contact Us</h2>
              <Link to="/" className="btn-link">
                Contact
              </Link>
              <Link to="/" className="btn-link">
                Support
              </Link>
              <Link to="/" className="btn-link">
                Destination
              </Link>
              <Link to="/" className="btn-link">
                Sponsorships
              </Link>
            </div>
          </div>
          <div className="companyInfo_container">
            <div className="col-link-items">
              <h2>Videos</h2>
              <Link to="/" className="btn-link">
                Videos
              </Link>
              <Link to="/" className="btn-link">
                Agency
              </Link>
              <Link to="/" className="btn-link">
                Ambassador
              </Link>
              <Link to="/" className="btn-link">
                Influencer
              </Link>
            </div>

            <div className="col-link-items">
              <h2>Social Media</h2>
              <Link to="/" className="btn-link">
                Instagram
              </Link>
              <Link to="/" className="btn-link">
                Facebook
              </Link>
              <Link to="/" className="btn-link">
                Twitter
              </Link>
              <Link to={`https://github.com/create1666`} className="btn-link">
                GitHub
              </Link>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo ">
              <Link to="/" className="social_logo">
                <FaEarlybirds className="fa fa-Earlybirds" />
                CREATE1666
              </Link>
            </div>

            <small className="website-rights">CREATE1666 @ 2021</small>

            <div className="social-icons">
              <Link
                to="/"
                target="_blank"
                aria-label="Facebook"
                className="social_icons-links"
              >
                <FaFacebook />
              </Link>
              <Link
                to={`https://github.com/create1666`}
                target="_blank"
                aria-label="Github"
                className="social_icons-links"
              >
                <FaGithub />
              </Link>
              <Link
                to=""
                target="_blank"
                aria-label="Twitter"
                className="social_icons-links"
              >
                <FaTwitter />
              </Link>
              <Link
                to="/"
                target="_blank"
                aria-label="Youtube"
                className="social_icons-links"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
