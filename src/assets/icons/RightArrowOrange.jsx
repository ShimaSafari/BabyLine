import React from "react";
import { SvgIcon } from "@mui/material";
const RightArrowOrange = (props) => {
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
          d="M25.0001 2.08331C37.6563 2.08331 47.9167 12.3437 47.9167 25C47.9167 37.6562 37.6563 47.9166 25.0001 47.9166C12.3438 47.9166 2.08342 37.6562 2.08342 25C2.08342 12.3437 12.3438 2.08331 25.0001 2.08331ZM20.4022 18.1396C20.0227 17.7466 19.8127 17.2204 19.8174 16.6741C19.8222 16.1279 20.0413 15.6054 20.4275 15.2191C20.8138 14.8328 21.3363 14.6137 21.8826 14.609C22.4288 14.6042 22.9551 14.8142 23.348 15.1937L31.6813 23.5271C32.0719 23.9177 32.2913 24.4476 32.2913 25C32.2913 25.5524 32.0719 26.0822 31.6813 26.4729L23.348 34.8062C22.9551 35.1857 22.4288 35.3957 21.8826 35.391C21.3363 35.3862 20.8138 35.1671 20.4275 34.7808C20.0413 34.3946 19.8222 33.8721 19.8174 33.3258C19.8127 32.7796 20.0227 32.2533 20.4022 31.8604L27.2626 25L20.4022 18.1396Z"
          fill="#FF961A"
        />
      </svg>
    </SvgIcon>
  );
};

export default RightArrowOrange;
