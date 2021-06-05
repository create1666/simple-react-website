import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = [ "btn--large", "btn--medium" ,"btn--mobile"];

const COLOR = ["primary","blue", "red", "green"]

const Button = ({ children, buttonStyle, buttonSize, onClick, type , buttonColor}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : STYLES[0];
  const checkButtonColor = COLOR.includes(buttonColor)? buttonColor: null
  
  return (
    <>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
