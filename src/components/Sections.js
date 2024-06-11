import React from "react";
import { useState } from "react";

function Sections({ text, title }) {
  const [isOpen, setIsClosed] = useState(false);

  return !isOpen ? (
    <section>
      <div onClick={() => setIsClosed(true)}>
        <button>
          <h2>{title}</h2>
          <div className="arrow">
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </button>
      </div>
    </section>
  ) : (
    <section>
      <div onClick={() => setIsClosed(false)}>
        <button>
          <h2>{title}</h2>
          <div className="arrow">
            <i className="fa-solid fa-chevron-up"></i>
          </div>
        </button>
        <div className="paragraphe">
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
}

export default Sections;
