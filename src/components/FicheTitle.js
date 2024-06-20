import React from "react";

function FicheTitle(props) {
  return (
    <>
      <section className={props.className}>
        <h2>{props.title}</h2>
        <p>{props.location}</p>
        <ul>
          {props.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default FicheTitle;
