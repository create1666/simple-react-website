import React, { useState } from "react";
import "./Footer.css";
import Button from "../../Button";
import Notification from "cogo-toast";
// import { a } from "react-router-dom";
import {
  FaEarlybirds,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useRef } from "react";

const Footer = () => {
  // const location = useLocation()
  const inputRef = useRef();
  const initialInput = "";
  const [input, setInput] = useState(initialInput);
  const handleInputChange = (e) => setInput(e.target.value);

  // const { pathname } = location
  // const isLandingPage = pathname === "/"; 

  console.log("******", input);

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput(initialInput);
    inputRef.current.value = "";

    Notification.success("Thank you for subscribing!");
  };

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
            <form onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                name="Email"
                placeholder="Your Email"
                className="input_row"
                onChange={handleInputChange}
              />

              <Button buttonStyle="btn--outline"> Subscribe </Button>
            </form>
          </div>
        </div>

        <div className="aboutfield__section">
          <div className="companyInfo_container">
            <div className="col-link-items">
              <h2>About</h2>
              <a href="/" className="btn-link">
                How it works
              </a>
              <a href="/" className="btn-link">
                Testimonials
              </a>
              <a href="/" className="btn-link">
                career
              </a>
              <a href="/" className="btn-link">
                Terms and Services
              </a>
            </div>

            <div className="col-link-items">
              <h2>Contact Us</h2>
              <a href="/" className="btn-link">
                Contact
              </a>
              <a href="/" className="btn-link">
                Support
              </a>
              <a href="/" className="btn-link">
                Destination
              </a>
              <a href="/" className="btn-link">
                Sponsorships
              </a>
            </div>
          </div>
          <div className="companyInfo_container">
            <div className="col-link-items">
              <h2>Videos</h2>
              <a href="/" className="btn-link">
                Videos
              </a>
              <a href="/" className="btn-link">
                Agency
              </a>
              <a href="/" className="btn-link">
                Ambassador
              </a>
              <a href="/" className="btn-link">
                Influencer
              </a>
            </div>

            <div className="col-link-items">
              <h2>Social Media</h2>
              <a href="/" className="btn-link">
                Instagram
              </a>
              <a href="/" className="btn-link">
                Facebook
              </a>
              <a href="/" className="btn-link">
                Twitter
              </a>
              <a href='https://github.com/create1666' className="btn-link">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo ">
              <a href="/" className="social_logo">
                <FaEarlybirds className="fa fa-Earlybirds" />
                CREATE1666
              </a>
            </div>

            <small className="website-rights">CREATE1666 @ 2021</small>

            <div className="social-icons">
              <a
                href="/"
                target="_blank"
                aria-label="Facebook"
                className="social_icons-links"
              >
                <FaFacebook />
              </a>
              <a
                href='https://github.com/create1666'
             
                aria-label="Github"
                className="social_icons-links"
              >
                <FaGithub />
              </a>
              <a
                href=""
                target="_blank"
                aria-label="Twitter"
                className="social_icons-links"
              >
                <FaTwitter />
              </a>
              <a
                href="/"
                target="_blank"
                aria-label="Youtube"
                className="social_icons-links"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
