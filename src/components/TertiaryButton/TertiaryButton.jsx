/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TertiaryButton = ({ text = "Tertiary CTA 40px", state, className }) => {
  return (
    <div className={`tertiary-button ${className}`}>
      <div className="tertiary-CTA">{text}</div>
    </div>
  );
};

TertiaryButton.propTypes = {
  text: PropTypes.string,
  state: PropTypes.oneOf(["default", "error-hover", "error", "disabled"]),
};
