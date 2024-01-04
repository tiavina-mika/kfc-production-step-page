/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconAction = ({
  iconAction = "https://c.animaapp.com/qBYhTT9R/img/icon-action-assignment-24px-1.svg",
}) => {
  return (
    <div className="icon-action">
      <img className="img" alt="Icon action" src={iconAction} />
    </div>
  );
};

IconAction.propTypes = {
  iconAction: PropTypes.string,
};
