/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { GlobalSearch } from "../../icons/GlobalSearch";
import "./style.css";

export const MenuOption = ({
  state,
  className,
  icon = <GlobalSearch className="global-search" color="white" />,
  text = "Gadget explorer",
}) => {
  return (
    <div className={`menu-option ${state} ${className}`}>
      <div className="icon">{icon}</div>
      <div className="gadget-explorer">{text}</div>
    </div>
  );
};

MenuOption.propTypes = {
  state: PropTypes.oneOf(["active", "default"]),
  text: PropTypes.string,
};
