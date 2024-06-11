import React from "react";
import Sections from "./Sections";

function FicheEquipement(props) {
  return (
    <>
      <section>
        <div>
          <p>{props.host.name}</p>
          <img src={props.host.picture} alt={props.host.name} />
        </div>
        <p>
          <span>{props.rating}</span>
        </p>
        <Sections
          title="Équipements"
          text={props.equipments}
          id="equipements"
        />
      </section>
    </>
  );
}

export default FicheEquipement;
