import React from "react";
import Ratings from "./Ratings";

function FicheName(props) {
  //5 etoiles //index < rating = active

  return (
    <>
      <section className={props.className}>
        <div className="host_style">
          <p>{props.host.name}</p>
          <img
            className="host_picture"
            src={props.host.picture}
            alt={props.host.name}
          />
        </div>
        <Ratings rating={props.rating} />
      </section>
    </>
  );
}

export default FicheName;
