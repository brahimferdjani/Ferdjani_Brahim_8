import React from "react";
import logo from "../../assets/img/LOGO.png";
import logofooter from "../../assets/img/LOGOFooter.png";
import "./Fiche.scss";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import { annonces } from "../../Annonces.js";
import { useParams } from "react-router-dom";
import FicheCarroussel from "../../components/FicheCarroussel.js";
import Accordion from "../../components/Accordion.js";
import FicheTitle from "../../components/FicheTitle.js";
import FicheName from "../../components/FicheName.js";
import PageError from "../PageError/PageError.js";

function Fiche() {
  const { id } = useParams();

  const fiche = annonces.find((fiche) => fiche.id === id);

  return fiche ? (
    <>
      <div className="container">
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
            <Accordion
              title="Description"
              id="description"
              className="fiche_collapse"
            >
              <p>{fiche.description}</p>
            </Accordion>
            <Accordion
              title="Equipements"
              id="equipements"
              className="fiche_collapse"
            >
              <ul>
                {fiche.equipments.map((equipement) => (
                  <li key={equipement}>{equipement}</li>
                ))}
              </ul>
            </Accordion>
          </div>
        </main>
      </div>
      <Footer className="footer_home" logo={logofooter} alt="logo" />
    </>
  ) : (
    <PageError />
  );
}

export default Fiche;
