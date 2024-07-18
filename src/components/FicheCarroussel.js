import React from "react";
import { useState } from "react";

function FicheCarroussel({ className, src, alt }) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index === src.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function handleClickLeft() {
    if (index === 0) {
      setIndex(src.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  if (src.length > 1) {
    return (
      <>
        <section className={className}>
          <div onClick={handleClickLeft} className="arrow_left">
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
                  d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
          <img src={src[index]} alt={alt} />
          <span>
            {index + 1}/{src.length}
          </span>
          <div onClick={handleClick} className="arrow_right">
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
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className={className}>
          <img src={src[0]} alt={alt} />
        </section>
      </>
    );
  }
}

export default FicheCarroussel;
