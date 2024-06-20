import React from "react";
import { useState } from "react";

function CollapseEquipements({ text, title, className }) {
  const [isOpen, setIsClosed] = useState(false);

  return !isOpen ? (
    <section>
      <div onClick={() => setIsClosed(true)}>
        <button className={className}>
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
        <button className={className}>
          <h2>{title}</h2>
          <div className="arrow">
            <i className="fa-solid fa-chevron-up"></i>
          </div>
        </button>
        <div className="paragraphe">
          {text.map((text) => (
            <p>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollapseEquipements;
