import React from "react";
import logo from "../../assets/img/LOGO.png";
import logofooter from "../../assets/img/LOGOFooter.png";
import "./Fiche_Style/Fiche.scss";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import { annonces } from "../../Annonces.js";
import { useParams } from "react-router-dom";
import FicheCarroussel from "../../components/FicheCarroussel.js";
import Sections from "../../components/Sections.js";
import CollapseEquipements from "../../components/CollapseEquipements.js";
import FicheTitle from "../../components/FicheTitle.js";
import FicheName from "../../components/FicheName.js";
import PageError from "../PageError/PageError.js";

function Fiche() {
  const { id } = useParams();

  const fiche = annonces.find((fiche) => fiche.id === id);

  return fiche ? (
    <>
      <Header className="header_home" logo={logo} alt="logo" />
      <main>
        <FicheCarroussel
          className="fiche_carroussel"
          src={fiche.pictures}
          alt={fiche.title}
        />
        <div className="fiche_info">
          <FicheTitle {...fiche} className="description" />
          <FicheName {...fiche} className="equipement" />
        </div>
        <div className="fiche_sections">
          <Sections
            title="Description"
            text={fiche.description}
            id="description"
            className="fiche_collapse"
          />
          <CollapseEquipements
            title="Équipements"
            text={fiche.equipments}
            id="equipments"
            className="fiche_collapse"
          />
        </div>
      </main>
      <Footer className="footer_home" logo={logofooter} alt="logo" />
    </>
  ) : (
    <PageError />
  );
}

export default Fiche;
