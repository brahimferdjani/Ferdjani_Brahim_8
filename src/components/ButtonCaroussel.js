import React from "react";
import annonces from "../Annonces.js";

function ButtonCaroussel(props) {
  console.log(annonces[4].pictures[index]);

  function handleClick() {}

  return (
    <>
      <button className="arrow_right">
        <svg
          width="48"
          height="80"
          viewBox="0 0 48 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Vector">
            <path
              id="Vector_2"
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white" //composant svg
            />
          </g>
        </svg>
      </button>
    </>
  );
}

export default ButtonCaroussel;
