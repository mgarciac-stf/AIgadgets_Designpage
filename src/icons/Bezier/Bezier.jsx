/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Bezier = ({ className }) => {
  return (
    <svg
      className={`bezier ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M4.00065 7.66699C3.08018 7.66699 2.33398 8.41318 2.33398 9.33366C2.33398 10.2541 3.08018 11.0003 4.00065 11.0003C4.92113 11.0003 5.66732 10.2541 5.66732 9.33366C5.66732 8.41318 4.92113 7.66699 4.00065 7.66699ZM0.333984 9.33366C0.333984 7.30861 1.97561 5.66699 4.00065 5.66699C6.02569 5.66699 7.66732 7.30861 7.66732 9.33366C7.66732 11.3587 6.02569 13.0003 4.00065 13.0003C1.97561 13.0003 0.333984 11.3587 0.333984 9.33366Z"
        fill="white"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M28.0007 7.66699C27.0802 7.66699 26.334 8.41318 26.334 9.33366C26.334 10.2541 27.0802 11.0003 28.0007 11.0003C28.9211 11.0003 29.6673 10.2541 29.6673 9.33366C29.6673 8.41318 28.9211 7.66699 28.0007 7.66699ZM24.334 9.33366C24.334 7.30861 25.9756 5.66699 28.0007 5.66699C30.0257 5.66699 31.6673 7.30861 31.6673 9.33366C31.6673 11.3587 30.0257 13.0003 28.0007 13.0003C25.9756 13.0003 24.334 11.3587 24.334 9.33366Z"
        fill="white"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M19 9.3335C19 8.78121 19.4477 8.3335 20 8.3335H25.3333C25.8856 8.3335 26.3333 8.78121 26.3333 9.3335C26.3333 9.88578 25.8856 10.3335 25.3333 10.3335H20C19.4477 10.3335 19 9.88578 19 9.3335Z"
        fill="white"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M5.66797 9.3335C5.66797 8.78121 6.11568 8.3335 6.66797 8.3335H12.0013C12.5536 8.3335 13.0013 8.78121 13.0013 9.3335C13.0013 9.88578 12.5536 10.3335 12.0013 10.3335H6.66797C6.11568 10.3335 5.66797 9.88578 5.66797 9.3335Z"
        fill="white"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M5.33398 21C4.7796 21 4.33398 21.4456 4.33398 22V24.6667C4.33398 25.221 4.7796 25.6667 5.33398 25.6667H8.00065C8.13354 25.6667 8.25472 25.6384 8.3859 25.5762C8.39859 25.5702 8.41141 25.5645 8.42434 25.559C8.75174 25.4205 9.00065 25.0739 9.00065 24.6667V22C9.00065 21.4456 8.55503 21 8.00065 21H5.33398ZM2.33398 22C2.33398 20.341 3.67503 19 5.33398 19H8.00065C9.6596 19 11.0007 20.341 11.0007 22V24.6667C11.0007 25.8785 10.272 26.9396 9.22326 27.3926C8.85283 27.5651 8.44686 27.6667 8.00065 27.6667H5.33398C3.67503 27.6667 2.33398 26.3256 2.33398 24.6667V22Z"
        fill="white"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M24 21C23.4456 21 23 21.4456 23 22V24.6667C23 25.0739 23.2489 25.4205 23.5763 25.559C23.5892 25.5645 23.6021 25.5702 23.6148 25.5762C23.7459 25.6384 23.8671 25.6667 24 25.6667H26.6667C27.221 25.6667 27.6667 25.221 27.6667 24.6667V22C27.6667 21.4456 27.221 21 26.6667 21H24ZM21 22C21 20.341 22.341 19 24 19H26.6667C28.3256 19 29.6667 20.341 29.6667 22V24.6667C29.6667 26.3256 28.3256 27.6667 26.6667 27.6667H24C23.5538 27.6667 23.1478 27.5651 22.7774 27.3926C21.7286 26.9396 21 25.8785 21 24.6667V22Z"
        fill="white"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M14 6.3335C13.459 6.3335 13 6.79245 13 7.3335V11.3335C13 11.8745 13.459 12.3335 14 12.3335H18C18.541 12.3335 19 11.8745 19 11.3335V7.3335C19 6.79245 18.541 6.3335 18 6.3335H14ZM11 7.3335C11 5.68788 12.3544 4.3335 14 4.3335H18C19.6456 4.3335 21 5.68788 21 7.3335V11.3335C21 12.9791 19.6456 14.3335 18 14.3335H14C12.3544 14.3335 11 12.9791 11 11.3335V7.3335Z"
        fill="white"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M19.1081 9.85513C19.3575 9.36241 19.9592 9.16522 20.4519 9.4147C23.9608 11.1913 26.3335 14.9842 26.3335 19.3335C26.3335 19.6019 26.3176 19.8543 26.2867 20.1171C26.2222 20.6656 25.7252 21.0579 25.1767 20.9934C24.6282 20.9288 24.2359 20.4319 24.3004 19.8834C24.3228 19.6928 24.3335 19.5186 24.3335 19.3335C24.3335 15.7096 22.3596 12.6224 19.5485 11.199C19.0558 10.9495 18.8586 10.3479 19.1081 9.85513Z"
        fill="white"
        fillRule="evenodd"
        opacity="0.4"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M12.8935 9.85513C13.1429 10.3479 12.9458 10.9495 12.453 11.199C9.64189 12.6224 7.66797 15.7096 7.66797 19.3335C7.66797 19.5186 7.6787 19.6928 7.70112 19.8834C7.76565 20.4319 7.37331 20.9288 6.82481 20.9934C6.27631 21.0579 5.77935 20.6656 5.71482 20.1171C5.6839 19.8543 5.66797 19.6019 5.66797 19.3335C5.66797 14.9842 8.04072 11.1913 11.5496 9.4147C12.0423 9.16522 12.644 9.36241 12.8935 9.85513Z"
        fill="white"
        fillRule="evenodd"
        opacity="0.4"
      />
    </svg>
  );
};
