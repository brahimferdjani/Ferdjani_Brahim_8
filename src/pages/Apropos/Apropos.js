import React from "react";
import Banner from "../../components/Banner";
import logo from "../../assets/img/LOGO.png";
import cover from "../../assets/img/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import logofooter from "../../assets/img/LOGOFooter.png";
import "./Apropos_Style/Apropos.scss";
import Sections from "../../components/Sections";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Apropos() {
  return (
    <>
      <Header className="header_home" logo={logo} alt="logo" />
      <Banner text={null} className="banner" src={cover} alt="paysage" />
      <main className="main_apropos">
        <Sections title="Fiabilité" id="fiabilite" className="button">
          <p
            style={{
              transform: "translateY(0)",
              transition: "all 0.5s",
            }}
          >
            Kasa garantit votre fiabilité. Toutefois, pour une durée de 9
            semaines ou plus, une maintenance proactive peut être envisagée.{" "}
          </p>
        </Sections>
        <Sections title="Respect" id="respect" className="button">
          <p
            style={{
              transform: "translateY(0)",
              transition: "all 0.5s",
            }}
          >
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement suspect sera supprimé.
          </p>
        </Sections>
        <Sections title="Service" id="service" className="button">
          <p
            style={{
              transform: "translateY(0)",
              transition: "all 0.5s",
            }}
          >
            Chez Kasa, partout où vous est.
          </p>
        </Sections>
        <Sections title="Sécurité" id="securite" className="button">
          <p
            style={{
              transform: "translateY(0)",
              transition: "all 0.5s",
            }}
          >
            La sécurité est la priorité de Kasa. Aussi bien pour nos équipes que
            pour nos clients. N'hésitez pas à nos DM !
          </p>
        </Sections>
      </main>
      <Footer className="footer_home" logo={logofooter} alt="logo" />
    </>
  );
}

export default Apropos;
