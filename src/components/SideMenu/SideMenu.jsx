/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArchiveTick1 } from "../../icons/ArchiveTick1";
import { Bezier4 } from "../../icons/Bezier4";
import { GlobalSearch } from "../../icons/GlobalSearch";
import { Key } from "../../icons/Key";
import { Share } from "../../icons/Share";
import { MenuOption } from "../MenuOption";
import "./style.css";

export const SideMenu = ({
  state,
  className,
  menuOptionIcon = <Bezier4 className="bezier-4" />,
  override = <ArchiveTick1 className="icon-instance-node" color="white" />,
  menuOptionIcon1 = <Key className="icon-instance-node" color="white" />,
  menuOptionIcon2 = <Share className="icon-instance-node" color="white" />,
}) => {
  return (
    <div className={`side-menu ${className}`}>
      <MenuOption
        className={`${state === "gadget-explore" ? "class-2" : "class-3"}`}
        icon={
          <GlobalSearch
            className={`${
              ["API-keys", "assemble", "default", "gadget-designer", "gadgets-library"].includes(state) &&
              "icon-instance-node"
            } ${state === "gadget-explore" && "bezier-4"}`}
            color="white"
          />
        }
        state={state === "gadget-explore" ? "active" : "default"}
        text="Gadget explorer"
      />
      <MenuOption
        className={`${state === "gadget-designer" ? "class-4" : "class-5"}`}
        icon={menuOptionIcon}
        state={state === "gadget-designer" ? "active" : "default"}
        text="Gadget designer"
      />
      <MenuOption
        className={`${state === "gadgets-library" ? "class-6" : "class-7"}`}
        icon={override}
        state={state === "gadgets-library" ? "active" : "default"}
        text="Gadgets library"
      />
      <MenuOption
        className={`${state === "API-keys" ? "class-8" : "class-9"}`}
        icon={menuOptionIcon1}
        state={state === "API-keys" ? "active" : "default"}
        text="API keys"
      />
      <MenuOption
        className={`${state === "assemble" ? "class-10" : "class-11"}`}
        icon={menuOptionIcon2}
        state={state === "assemble" ? "active" : "default"}
        text="Assemble"
      />
    </div>
  );
};

SideMenu.propTypes = {
  state: PropTypes.oneOf(["default", "gadget-explore", "assemble", "gadget-designer", "gadgets-library", "API-keys"]),
};
