import React from 'react';

export default function DownArrow({ width, height, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "82.828"}
      height={height || "42.414"}
      viewBox="0 0 82.828 42.414"
      fill="none"
      stroke={color || "#ffffff"} // Default color is white
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path
        id="Path_59"
        data-name="Path 59"
        d="M74.805,456.151l40-40-40-40"
        transform="translate(457.565 -73.391) rotate(90)"
      />
    </svg>
  );
}
