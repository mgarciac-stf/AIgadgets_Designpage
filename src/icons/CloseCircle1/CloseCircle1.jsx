/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const CloseCircle1 = ({ color = "#79747E", className }) => {
  return (
    <svg
      className={`close-circle-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M1.25 12C1.25 6.08579 6.08579 1.25 12 1.25C17.9142 1.25 22.75 6.08579 22.75 12C22.75 17.9142 17.9142 22.75 12 22.75C6.08579 22.75 1.25 17.9142 1.25 12ZM12 2.75C6.91421 2.75 2.75 6.91421 2.75 12C2.75 17.0858 6.91421 21.25 12 21.25C17.0858 21.25 21.25 17.0858 21.25 12C21.25 6.91421 17.0858 2.75 12 2.75Z"
        fill={color}
        fillRule="evenodd"
      />
      <g className="g" opacity="0.4">
        <path
          className="path"
          clipRule="evenodd"
          d="M15.3603 8.63959C15.6531 8.93248 15.6531 9.40736 15.3603 9.70025L9.70025 15.3603C9.40736 15.6531 8.93248 15.6531 8.63959 15.3603C8.3467 15.0674 8.3467 14.5925 8.63959 14.2996L14.2996 8.63959C14.5925 8.3467 15.0674 8.3467 15.3603 8.63959Z"
          fill={color}
          fillRule="evenodd"
        />
        <path
          className="path"
          clipRule="evenodd"
          d="M8.63959 8.63959C8.93248 8.3467 9.40736 8.3467 9.70025 8.63959L15.3603 14.2996C15.6531 14.5925 15.6531 15.0674 15.3603 15.3603C15.0674 15.6531 14.5925 15.6531 14.2996 15.3603L8.63959 9.70025C8.3467 9.40736 8.3467 8.93248 8.63959 8.63959Z"
          fill={color}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

CloseCircle1.propTypes = {
  color: PropTypes.string,
};
