import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = ({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) => {
  // const [ lightBg, setlightbg] =  useState(true)
  //    if(!true) {setlightbg(false)}

  return (
    <>
      <div
        className={lightBg ? "home__hero-section" : "home_hero-section darkBg"}
      >
        <div className="container">
          <div
            className={`row home__hero-row ${imgStart && 'hello' }`}
           >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headLine}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : " home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Link to="/sign-up">
                  <Button buttonSize="btn--wide" buttonColor="blue">
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
