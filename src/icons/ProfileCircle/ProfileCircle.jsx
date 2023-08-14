/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ProfileCircle = ({ color = "white", className }) => {
  return (
    <svg
      className={`profile-circle ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M12.0007 6.97998C10.5964 6.97998 9.4707 8.1127 9.4707 9.50998C9.4707 10.8588 10.5243 11.9585 11.8594 12.0284C11.9513 12.0209 12.0494 12.0202 12.1446 12.0282C13.4739 11.9572 14.522 10.8618 14.5307 9.50786C14.5296 8.11305 13.3958 6.97998 12.0007 6.97998ZM7.9707 9.50998C7.9707 7.28726 9.765 5.47998 12.0007 5.47998C14.2249 5.47998 16.0307 7.28577 16.0307 9.50998V9.51422H16.0307C16.0184 11.6826 14.3129 13.4557 12.1463 13.5295C12.1023 13.531 12.0582 13.5287 12.0146 13.5224C12.0189 13.5231 12.0198 13.523 12.017 13.5228C12.0144 13.5227 12.0101 13.5225 12.0045 13.5225C11.9922 13.5225 11.9808 13.5233 11.9737 13.5242C11.9344 13.5291 11.8948 13.5309 11.8551 13.5295C9.69231 13.4558 7.9707 11.6854 7.9707 9.50998Z"
        fill={color}
        fillRule="evenodd"
        opacity="0.4"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M7.44661 17.4236C6.67642 17.9423 6.2459 18.5359 6.07815 19.1001C7.68434 20.4451 9.7435 21.2501 11.9998 21.2501C14.256 21.2501 16.3152 20.4451 17.9214 19.1001C17.7536 18.5357 17.3227 17.9418 16.5519 17.4228C15.3416 16.6134 13.696 16.1851 12.0073 16.1851C10.3192 16.1851 8.66787 16.613 7.44661 17.4236ZM12.0073 14.6851C13.9231 14.6851 15.8771 15.1666 17.3869 16.1767L17.3885 16.1778C18.5911 16.9871 19.3563 18.0855 19.4856 19.3007C19.5108 19.5376 19.4219 19.7723 19.2463 19.9332C17.3335 21.6847 14.7947 22.7501 11.9998 22.7501C9.20488 22.7501 6.66601 21.6847 4.75326 19.9332C4.57759 19.7723 4.48878 19.5376 4.51398 19.3007C4.64326 18.0855 5.4084 16.9871 6.61107 16.1778L6.61479 16.1753L6.6148 16.1753C8.13336 15.1666 10.0912 14.6851 12.0073 14.6851Z"
        fill={color}
        fillRule="evenodd"
        opacity="0.34"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

ProfileCircle.propTypes = {
  color: PropTypes.string,
};