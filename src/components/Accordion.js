import React from "react";
import { useState } from "react";

function Accordion({ text, title, className, children }) {
  const [isOpen, setIsClosed] = useState(false);

  return !isOpen ? (
    <section>
      <div onClick={() => setIsClosed(true)}>
        <button className={`button ${isOpen ? "active" : ""}`}>
          <h2>{title}</h2>
          <button className="rotate_arrow">
            <svg
              style={{ transform: "rotate(0)", transition: "all 0.5s" }}
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="arrow_back_ios-24px 2">
                <path
                  id="Vector"
                  d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z"
                  fill="white"
                />
              </g>
            </svg>
          </button>
        </button>
        <div className="hidden-box">{children}</div>
      </div>
    </section>
  ) : (
    <section>
      <div onClick={() => setIsClosed(false)}>
        <button className={`button ${isOpen ? "active" : ""}`}>
          <h2>{title}</h2>
          <button className="rotate_arrow">
            <svg
              style={{ transform: "rotate(-180deg)", transition: "all 0.5s" }}
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="arrow_back_ios-24px 2">
                <path
                  id="Vector"
                  d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z"
                  fill="white"
                />
              </g>
            </svg>
          </button>
        </button>
        <div className="hidden-box">{children}</div>
      </div>
    </section>
  );
}

export default Accordion;
