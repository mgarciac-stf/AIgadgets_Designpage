/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowDown3 = ({ color = "#79747E", className }) => {
  return (
    <svg
      className={`arrow-down-3 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M3.54975 8.41987C3.84264 8.12697 4.31752 8.12697 4.61041 8.41987L11.1304 14.9399C11.6075 15.417 12.3926 15.417 12.8697 14.9399L19.3897 8.41987C19.6826 8.12697 20.1575 8.12697 20.4504 8.41987C20.7433 8.71276 20.7433 9.18763 20.4504 9.48053L13.9304 16.0005C12.8675 17.0634 11.1326 17.0634 10.0697 16.0005L3.54975 9.48053C3.25685 9.18763 3.25685 8.71276 3.54975 8.41987Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

ArrowDown3.propTypes = {
  color: PropTypes.string,
};
