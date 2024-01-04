/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconNavigationChevronLeft24Px1 } from "../../icons/IconNavigationChevronLeft24Px1";
import { IconNavigationChevronLeft24Px3 } from "../../icons/IconNavigationChevronLeft24Px3";
import "./style.css";

export const Item = ({ state, className, divClassName, visible = true, text = "Catalogue" }) => {
  return (
    <div className={`item ${className}`}>
      <div className={`catalogue ${state} ${divClassName}`}>{text}</div>
      {visible && (
        <>
          <>
            {["open-small", "open"].includes(state) && <IconNavigationChevronLeft24Px3 className="icon-navigation" />}

            {["close-small", "close"].includes(state) && <IconNavigationChevronLeft24Px1 className="icon-navigation" />}
          </>
        </>
      )}
    </div>
  );
};

Item.propTypes = {
  state: PropTypes.oneOf(["close-small", "close", "open", "open-small"]),
  visible: PropTypes.bool,
  text: PropTypes.string,
};
