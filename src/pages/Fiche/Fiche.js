import React from "react";
import logo from "../../assets/img/LOGO.png";
import logofooter from "../../assets/img/LOGOFooter.png";
import "./Fiche_Style/Fiche.scss";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import { annonces } from "../../Annonces.js";
import { useParams } from "react-router-dom";
import FicheDescription from "../../components/FicheDescription.js";
import FicheEquipement from "../../components/FicheEquipement.js";

function Fiche() {
  const { id } = useParams();

  const fiche = annonces
    .filter((fiche) => fiche.id === id)
    .map((fiche) => (
      <>
        <section className="fiche_carroussel">
          <img src={fiche.pictures[0]} alt={fiche.title} />
        </section>
        <FicheDescription {...fiche} />
        <FicheEquipement {...fiche} />
      </>
    ));
  return (
    <>
      <Header className="header_home" logo={logo} alt="logo" />
      <main>{fiche}</main>
      <Footer className="footer_home" logo={logofooter} alt="logo" />
    </>
  );
}

export default Fiche;
