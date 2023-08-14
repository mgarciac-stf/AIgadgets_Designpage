/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Notification1 } from "../../icons/Notification1";
import { ProfileCircle } from "../../icons/ProfileCircle";
import { Setting1 } from "../../icons/Setting1";
import "./style.css";

export const Header = ({ loggedIn, logo, className }) => {
  return (
    <div className={`header ${className}`}>
      {logo && (
        <img
          className="GPT-prompts-template"
          alt="Gpt prompts template"
          src="https://generation-sessions.s3.amazonaws.com/5a410e543c9ecc0a9d8ea0d3b44ac891/img/gpt-prompts-template-logo-logo-2-1@2x.png"
        />
      )}

      <Notification1 className="notification" color="white" />
      <Setting1 className="setting" color="white" />
      <ProfileCircle className="profile-circle" color="white" />
      {loggedIn && <div className="text-wrapper-4">Fomov, Ana</div>}
    </div>
  );
};

Header.propTypes = {
  loggedIn: PropTypes.bool,
  logo: PropTypes.bool,
};
