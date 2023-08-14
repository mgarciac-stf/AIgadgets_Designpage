/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Add } from "../../icons/Add";
import { ArrowLeft2 } from "../../icons/ArrowLeft2";
import { ArrowRight2 } from "../../icons/ArrowRight2";
import "./style.css";

export const Button = ({ type, leadingIcon, trailIcon, className, text = "Primary" }) => {
  return (
    <div className={`button leading-icon-${leadingIcon} ${type} ${className}`}>
      {leadingIcon && ["primary", "secondary", "tertiary"].includes(type) && (
        <ArrowLeft2 className="instance-node" color={type === "primary" ? "white" : "#5A9FD0"} />
      )}

      {["primary", "secondary", "tertiary"].includes(type) && (
        <div className="div">
          {type === "primary" && <>{text}</>}

          {type === "secondary" && <>Secondary</>}

          {type === "tertiary" && <>Tertiary</>}
        </div>
      )}

      {trailIcon && ["primary", "secondary", "tertiary"].includes(type) && (
        <ArrowRight2 className="instance-node" color={type === "primary" ? "white" : "#5A9FD0"} />
      )}

      {["primary-icon", "secondary-icon", "tertiary-icon"].includes(type) && (
        <Add
          className={`${!trailIcon && "instance-node"} ${!leadingIcon && "class"}`}
          color={type === "primary-icon" ? "white" : "#5A9FD0"}
        />
      )}
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["tertiary", "secondary-icon", "tertiary-icon", "secondary", "primary", "primary-icon"]),
  leadingIcon: PropTypes.bool,
  trailIcon: PropTypes.bool,
  text: PropTypes.string,
};
