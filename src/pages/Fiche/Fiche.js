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
            id="description"
            className="fiche_collapse"
          >
            <p>{fiche.description}</p>
          </Sections>
          <Sections
            title="Equipements"
            id="equipements"
            className="fiche_collapse"
          >
            <p>
              {fiche.equipments.map((equipement) => (
                <li>{equipement}</li>
              ))}
            </p>
          </Sections>
        </div>
      </main>
      <Footer className="footer_home" logo={logofooter} alt="logo" />
    </>
  ) : (
    <PageError />
  );
}

export default Fiche;
