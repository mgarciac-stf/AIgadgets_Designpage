/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowRight2 = ({ color = "#5A9FD0", className }) => {
  return (
    <svg
      className={`arrow-right2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M13.8994 5.39966C14.1923 5.10677 14.6671 5.10677 14.96 5.39966L21.03 11.4697C21.1707 11.6103 21.2497 11.8011 21.2497 12C21.2497 12.1989 21.1707 12.3897 21.03 12.5303L14.96 18.6003C14.6671 18.8932 14.1923 18.8932 13.8994 18.6003C13.6065 18.3074 13.6065 17.8326 13.8994 17.5397L19.439 12L13.8994 6.46032C13.6065 6.16743 13.6065 5.69256 13.8994 5.39966Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H20.33C20.7442 11.25 21.08 11.5858 21.08 12C21.08 12.4142 20.7442 12.75 20.33 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12Z"
        fill={color}
        fillRule="evenodd"
        opacity="0.4"
      />
    </svg>
  );
};

ArrowRight2.propTypes = {
  color: PropTypes.string,
};
