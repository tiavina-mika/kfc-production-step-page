/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconNavigationArrowBack24Px1 } from "../../icons/IconNavigationArrowBack24Px1";
import { PrimaryButtonPx } from "../PrimaryButtonPx";
import { TertiaryButton } from "../TertiaryButton";
import "./style.css";

export const Header = ({
  showIcon = true,
  showLevel3 = true,
  showLevel2 = true,
  level3Text = "/  Level 3",
  level2Text = "/  Level 2",
  showCta = true,
  level1Text = "Level 1",
  showBack = true,
  className,
  iconAction = "https://c.animaapp.com/qBYhTT9R/img/icon-action-dashboard-24px-2.svg",
  dateClassName,
  visible = true,
  primaryButtonPxText = "ENREGISTRER",
}) => {
  return (
    <div className={`header ${className}`}>
      <div className="div">
        {showBack && <IconNavigationArrowBack24Px1 className="icon-navigation-arrow-back-24px-1" color="#7C7C7C" />}

        <div className="frame-2">
          {showIcon && <img className="icon-navigation-arrow-back-24px-1" alt="Icon action" src={iconAction} />}

          <div className={`date ${dateClassName}`}>{level1Text}</div>
          {showLevel2 && <div className="date-2">{level2Text}</div>}

          {showLevel3 && <div className="date-2">{level3Text}</div>}
        </div>
      </div>
      {showCta && (
        <div className="frame-3">
          {visible && <TertiaryButton className="design-component-instance-node" state="default" text="ANNULER" />}

          <PrimaryButtonPx className="design-component-instance-node" state="default" text={primaryButtonPxText} />
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  showIcon: PropTypes.bool,
  showLevel3: PropTypes.bool,
  showLevel2: PropTypes.bool,
  level3Text: PropTypes.string,
  level2Text: PropTypes.string,
  showCta: PropTypes.bool,
  level1Text: PropTypes.string,
  showBack: PropTypes.bool,
  iconAction: PropTypes.string,
  visible: PropTypes.bool,
  primaryButtonPxText: PropTypes.string,
};
