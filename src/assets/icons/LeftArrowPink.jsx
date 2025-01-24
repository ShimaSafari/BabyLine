import React from "react";
import { SvgIcon } from "@mui/material";
const LeftArrowPink = (props) => {
  const { className, style, onClick } = props;
  return (
    <SvgIcon
      className={className}
      style={{ ...style, display: "block", zIndex: 10 }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M20 36.6667C10.7952 36.6667 3.33329 29.2048 3.33329 20C3.33329 10.7953 10.7952 3.33337 20 3.33337C29.2047 3.33337 36.6666 10.7953 36.6666 20C36.6666 29.2048 29.2047 36.6667 20 36.6667Z"
          stroke="#E26666"
          strokeWidth="2"
        />
        <path
          d="M22.5 13.3334L15.8333 20L22.5 26.6667"
          stroke="#E26666"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default LeftArrowPink;
