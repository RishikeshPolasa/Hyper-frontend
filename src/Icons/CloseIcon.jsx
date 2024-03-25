import React from "react";

export default function CloseIcon(props) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 6L6 18"
        stroke="#222222"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="#222222"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}
