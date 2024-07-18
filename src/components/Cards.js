import React from "react";
import { Link } from "react-router-dom";
function Cards(props) {
  //use link to navigate to the fiche page
  return (
    <li key={props.id}>
      <Link to={`/fiche/${props.id}`}>
        <img src={props.src} alt={props.alt} />
        <p>{props.title}</p>
      </Link>
    </li>
  );
}

export default Cards;
