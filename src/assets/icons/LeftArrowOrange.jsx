import React from "react";
import { SvgIcon } from "@mui/material";
const LeftArrowOrange = (props) => {
  const { className, style, onClick } = props;
  return (
    <SvgIcon
      className={className}
      style={{ ...style, display: "block", zIndex: 10 }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25 2.08331C12.3438 2.08331 2.08337 12.3437 2.08337 25C2.08337 37.6562 12.3438 47.9166 25 47.9166C37.6563 47.9166 47.9167 37.6562 47.9167 25C47.9167 12.3437 37.6563 2.08331 25 2.08331ZM29.598 18.1396C29.9775 17.7466 30.1874 17.2204 30.1827 16.6741C30.1779 16.1279 29.9588 15.6054 29.5726 15.2191C29.1863 14.8328 28.6638 14.6137 28.1175 14.609C27.5713 14.6042 27.045 14.8142 26.6521 15.1937L18.3188 23.5271C17.9282 23.9177 17.7088 24.4476 17.7088 25C17.7088 25.5524 17.9282 26.0822 18.3188 26.4729L26.6521 34.8062C27.045 35.1857 27.5713 35.3957 28.1175 35.391C28.6638 35.3862 29.1863 35.1671 29.5726 34.7808C29.9588 34.3946 30.1779 33.8721 30.1827 33.3258C30.1874 32.7796 29.9775 32.2533 29.598 31.8604L22.7375 25L29.598 18.1396Z"
          fill="#FF961A"
        />
      </svg>
    </SvgIcon>
  );
};

export default LeftArrowOrange;
