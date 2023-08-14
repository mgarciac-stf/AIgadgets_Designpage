/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Notification1 = ({ color = "white", className }) => {
  return (
    <svg
      className={`notification-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M5.27069 8.90991C5.27069 5.1857 8.29648 2.15991 12.0207 2.15991C15.7349 2.15991 18.7707 5.1957 18.7707 8.90991V11.7999C18.7707 12.0148 18.8193 12.3293 18.9115 12.6653C19.0025 12.9973 19.1201 13.2923 19.2272 13.4796L20.3738 15.384C21.2794 16.8933 20.5555 18.8594 18.8872 19.4116C14.4233 20.9028 9.6069 20.9027 5.14303 19.4113L5.14025 19.4103C4.29784 19.1252 3.66608 18.5357 3.38361 17.7728C3.10082 17.0091 3.19702 16.1495 3.65806 15.3832L4.80648 13.4759C4.80674 13.4754 4.80699 13.475 4.80724 13.4746C4.91675 13.2905 5.0367 12.9965 5.12927 12.6631C5.22212 12.3286 5.27069 12.0145 5.27069 11.7999V8.90991ZM12.0207 3.65991C9.12491 3.65991 6.77069 6.01413 6.77069 8.90991V11.7999C6.77069 12.1953 6.68927 12.6513 6.57462 13.0643C6.4599 13.4775 6.2952 13.908 6.0949 14.244L6.09323 14.2468L4.94333 16.1566C4.9433 16.1566 4.94337 16.1565 4.94333 16.1566C4.69448 16.5703 4.68059 16.9558 4.79028 17.252C4.9002 17.5488 5.16304 17.8341 5.61981 17.989C9.77515 19.377 14.2578 19.3769 18.413 17.9886L18.4153 17.9878C19.166 17.7396 19.5016 16.8467 19.0879 16.1563C19.0878 16.1561 19.088 16.1565 19.0879 16.1563L17.9309 14.2348C17.7388 13.9018 17.578 13.4743 17.4649 13.062C17.3521 12.6506 17.2707 12.1951 17.2707 11.7999V8.90991C17.2707 6.02413 14.9065 3.65991 12.0207 3.65991Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M9.47164 2.92629C9.87109 1.90701 10.8628 1.18994 12.0199 1.18994C13.1771 1.18994 14.1688 1.90701 14.5682 2.92629C14.6725 3.19236 14.6165 3.49457 14.4238 3.70562C14.2311 3.91667 13.9353 3.99988 13.6608 3.9202C13.3834 3.83966 13.1034 3.77889 12.8197 3.74449L12.8169 3.74415C11.9525 3.6361 11.1357 3.70023 10.3793 3.92013C10.1048 3.99991 9.80888 3.91676 9.61614 3.70571C9.42339 3.49466 9.36736 3.1924 9.47164 2.92629Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M9.77148 19.0599C9.77148 19.6725 10.0263 20.2441 10.4318 20.6496C10.8373 21.0551 11.409 21.3099 12.0215 21.3099C13.2573 21.3099 14.2715 20.2957 14.2715 19.0599H15.7715C15.7715 21.1242 14.0857 22.8099 12.0215 22.8099C10.994 22.8099 10.0456 22.3847 9.37115 21.7103C8.69668 21.0358 8.27148 20.0874 8.27148 19.0599H9.77148Z"
        fill={color}
        fillRule="evenodd"
        opacity="0.4"
      />
    </svg>
  );
};

Notification1.propTypes = {
  color: PropTypes.string,
};
