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
          d="M20 36.6667C29.2048 36.6667 36.6667 29.2048 36.6667 20C36.6667 10.7953 29.2048 3.33337 20 3.33337C10.7953 3.33337 3.33337 10.7953 3.33337 20C3.33337 29.2048 10.7953 36.6667 20 36.6667Z"
          stroke="#E26666"
          strokeWidth="2"
        />
        <path
          d="M17.5 13.3334L24.1667 20L17.5 26.6667"
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
