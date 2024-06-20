import React from "react";

function Ratings(props) {
  let stars = (
    <li>
      <svg
        width="48"
        height="80"
        viewBox="0 0 48 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
            fill="white"
          />
        </g>
      </svg>
    </li>
  );

  for (let i = props.Ratings; i >= 0; i--) {
    stars++;
  }

  return (
    <>
      <span>
        <ul>{stars}</ul>
      </span>
    </>
  );
}

export default Ratings;
