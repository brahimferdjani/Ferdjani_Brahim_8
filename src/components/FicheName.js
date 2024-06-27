import React from "react";
import Ratings from "./Ratings";

function FicheName(props) {
  //5 etoiles //index < rating = active

  return (
    <>
      <section className={props.className}>
        <Ratings rating={props.rating} />
        <div className="host_style">
          <p>{props.host.name}</p>
          <img
            className="host_picture"
            src={props.host.picture}
            alt={props.host.name}
          />
        </div>
      </section>
    </>
  );
}

export default FicheName;
