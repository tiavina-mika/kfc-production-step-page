/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconAction } from "../IconAction";
import "./style.css";

export const StateOpenWrapper = ({
  state,
  className,
  iconAction = "https://c.animaapp.com/qBYhTT9R/img/icon-action-assignment-24px-2.svg",
  iconActionClassName,
}) => {
  return (
    <div className={`state-open-wrapper state-${state} ${className}`}>
      <div className="frame">
        {state === "open" && (
          <>
            <IconAction iconAction="https://c.animaapp.com/qBYhTT9R/img/icon-action-assignment-24px-3.svg" />
            <div className="text-wrapper">Produits</div>
          </>
        )}

        {state === "close" && (
          <img className={`icon-action-2 ${iconActionClassName}`} alt="Icon action" src={iconAction} />
        )}
      </div>
    </div>
  );
};

StateOpenWrapper.propTypes = {
  state: PropTypes.oneOf(["close", "open"]),
  iconAction: PropTypes.string,
};
