/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Value = ({
  state,
  className,
  iconActionPrintClassName,
  iconActionPrint = "https://c.animaapp.com/qBYhTT9R/img/icon-action-print-24px.svg",
}) => {
  return (
    <div className={`value ${className}`}>
      {state === "icons" && (
        <img
          className={`icon-action-print ${iconActionPrintClassName}`}
          alt="Icon action print"
          src={iconActionPrint}
        />
      )}

      {state === "empty" && <div className={`text-wrapper-2 ${iconActionPrintClassName}`}>-</div>}
    </div>
  );
};

Value.propTypes = {
  state: PropTypes.oneOf(["icons", "empty"]),
  iconActionPrint: PropTypes.string,
};
