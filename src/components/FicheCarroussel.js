import React from "react";
import { annonces } from "../Annonces";

function FicheCarroussel({ className, src, alt }) {
  const pictures = annonces.pictures === src;

  if (pictures.lenght > 1) {
    return (
      <>
        <section className={className}>
          <i class="fa-solid fa-arrow-left"></i>
          <img src={src} alt={alt} />
          <i class="fa-solid fa-arrow-right"></i>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className={className}>
          <img src={src} alt={alt} />
        </section>
      </>
    );
  }
}

export default FicheCarroussel;
