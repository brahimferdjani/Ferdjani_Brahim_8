import React, { useEffect } from "react";
import logo from "../../assets/img/LOGO.png";
import logofooter from "../../assets/img/LOGOFooter.png";
import Sections from "../../components/Sections.js";
import "./Fiche_Style/Fiche.scss";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import { annonces } from "../../Annonces.js";
import { useParams } from "react-router-dom";

function Fiche() {
  useEffect(() => {
    document.title = `Kasa | ${annonces.id}`;
  }, []);
  const { id } = useParams();

  const fiche = annonces
    .filter((fiche) => fiche.id === id)
    .map((fiche) => (
      <>
        <section>
          <img src={fiche.pictures[0]} alt={fiche.title} />
        </section>
        <section>
          <h2>{fiche.title}</h2>
          <p>{fiche.location}</p>
          <ul>
            {fiche.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <Sections
            title="Description"
            text={fiche.description}
            id="description"
          />
        </section>
        <section>
          <div>
            <p>{fiche.host.name}</p>
            <img src={fiche.host.picture} alt={fiche.host.name} />
          </div>
          <p>
            <span>{fiche.rating}</span>
          </p>
          <Sections
            title="Équipements"
            text={fiche.equipments}
            id="equipements"
          />
        </section>
      </>
    ));
  return (
    <>
      <Header className="header_fiche" logo={logo} alt="logo" />
      <main>{fiche}</main>
      <Footer className="footer_fiche" logo={logofooter} alt="logo" />
    </>
  );
}

export default Fiche;
