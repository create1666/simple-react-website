import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large", "btn--mobile"];

// const COLOR = ["primary","blue", "red", "green"]

const Button = ({ children, buttonStyle, buttonSize, onClick, type }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : STYLES[0];
  
  return (
    <>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} `} onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
