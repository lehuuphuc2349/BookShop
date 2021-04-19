import React from "react";
import { Link } from "react-router-dom";
import "./ButtonStyleType.css";
const STYLES = ["btn--primay", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const ButtonStyleType = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link to="/">
      <button
        className={`btn ${buttonStyle} ${buttonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
