import React from "react";

const GetSvg = ({ svg, width, height, color }) => {
  console.log("svg = ", svg);

  switch (svg) {
    case "instagram":
      return (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
            clipRule="evenodd"
          />
        </svg>
      );

    case "delete-icon":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M26.706 13.9608V27.1373C26.706 28.3502 25.7229 29.3334 24.51 29.3334H15.7257C14.5128 29.3334 13.5296 28.3502 13.5296 27.1373V13.9608M11.3335 13.9608H28.9021M23.4119 13.9608V12.8628C23.4119 11.6499 22.4287 10.6667 21.2158 10.6667H19.0198C17.8069 10.6667 16.8237 11.6499 16.8237 12.8628V13.9608"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle opacity="0.3" cx="20" cy="20" r="20" fill="#D0D0D0" />
        </svg>
      );

    case "facebook":
      return (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "cart":
      return (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
          />
        </svg>
      );
    case "shop":
      return (
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke={color || "currentColor"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
          />
        </svg>
      );
  }
};

export default GetSvg;
