/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PrimaryButtonPx = ({ text = "Primary CTA 40px", state, className }) => {
  return (
    <div className={`primary-button-px ${state} ${className}`}>
      <div className="primary-CTA">{text}</div>
    </div>
  );
};

PrimaryButtonPx.propTypes = {
  text: PropTypes.string,
  state: PropTypes.oneOf(["default", "error-hover", "hover", "error", "disabled"]),
};
