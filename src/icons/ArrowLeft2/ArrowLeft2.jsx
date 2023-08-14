/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowLeft2 = ({ color = "white", className }) => {
  return (
    <svg
      className={`arrow-left-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M15.5302 3.54967C15.8231 3.84256 15.8231 4.31744 15.5302 4.61033L9.01017 11.1303C8.53307 11.6074 8.53307 12.3926 9.01017 12.8697L15.5302 19.3897C15.8231 19.6826 15.8231 20.1574 15.5302 20.4503C15.2373 20.7432 14.7624 20.7432 14.4695 20.4503L7.94951 13.9303C6.88662 12.8674 6.88662 11.1326 7.94951 10.0697L14.4695 3.54967C14.7624 3.25678 15.2373 3.25678 15.5302 3.54967Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

ArrowLeft2.propTypes = {
  color: PropTypes.string,
};
