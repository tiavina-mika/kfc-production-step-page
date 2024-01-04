/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconNavigationArrowBack24Px1 = ({ color = "black", opacity = "unset", className }) => {
  return (
    <svg
      className={`icon-navigation-arrow-back-24px-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M18.7911 11.005H7.62112L12.5011 6.12496C12.8911 5.73496 12.8911 5.09496 12.5011 4.70496C12.3143 4.51771 12.0606 4.41248 11.7961 4.41248C11.5316 4.41248 11.2779 4.51771 11.0911 4.70496L4.50112 11.295C4.11112 11.685 4.11112 12.315 4.50112 12.705L11.0911 19.295C11.4811 19.685 12.1111 19.685 12.5011 19.295C12.8911 18.905 12.8911 18.275 12.5011 17.885L7.62112 13.005H18.7911C19.3411 13.005 19.7911 12.555 19.7911 12.005C19.7911 11.455 19.3411 11.005 18.7911 11.005Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

IconNavigationArrowBack24Px1.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
