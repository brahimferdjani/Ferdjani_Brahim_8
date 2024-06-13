import React from "react";
import Sections from "./Sections";

function FicheDescription(props) {
  return (
    <>
      <section className="description">
        <h2>{props.title}</h2>
        <p>{props.location}</p>
        <ul>
          {props.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <Sections
          title="Description"
          text={props.description}
          id="description"
        />
      </section>
    </>
  );
}

export default FicheDescription;
