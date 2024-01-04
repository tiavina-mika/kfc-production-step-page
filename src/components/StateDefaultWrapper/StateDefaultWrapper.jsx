/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const StateDefaultWrapper = ({ content = "Valeur", state, className, divClassName }) => {
  return (
    <div className={`state-default-wrapper state-1-${state} ${className}`}>
      <div className={`valeur ${divClassName}`}>{content}</div>
    </div>
  );
};

StateDefaultWrapper.propTypes = {
  content: PropTypes.string,
  state: PropTypes.oneOf(["red-text", "disabled", "blue-text", "default"]),
};
