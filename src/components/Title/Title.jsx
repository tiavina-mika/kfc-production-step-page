/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Title = ({ showIcon = false, content = "Colonne", state, className, divClassName }) => {
  return (
    <div className={`title ${state} ${className}`}>
      <div className={`colonne ${divClassName}`}>{content}</div>
    </div>
  );
};

Title.propTypes = {
  showIcon: PropTypes.bool,
  content: PropTypes.string,
  state: PropTypes.oneOf(["blue-BG", "default"]),
};
