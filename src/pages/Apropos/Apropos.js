import React from "react";
import Banner from "../../components/Banner";
import logo from "../../assets/img/LOGO.png";
import cover from "../../assets/img/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import logofooter from "../../assets/img/LOGOFooter.png";
import "./Apropos.scss";
import Accordion from "../../components/Accordion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Apropos() {
  return (
    <>
      <div className="container">
        <Header className="header_home" logo={logo} alt="logo" />
        <Banner
          text={null}
          className="banner_about"
          src={cover}
          alt="paysage"
        />
        <main className="main_apropos">
          <Accordion title="Fiabilité" id="fiabilite">
            <p>
              Kasa garantit votre fiabilité. Toutefois, pour une durée de 9
              semaines ou plus, une maintenance proactive peut être envisagée.{" "}
            </p>
          </Accordion>
          <Accordion title="Respect" id="respect">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement suspect sera supprimé.
            </p>
          </Accordion>
          <Accordion title="Service" id="service">
            <p>Chez Kasa, partout où vous est.</p>
          </Accordion>
          <Accordion title="Sécurité" id="securite">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos équipes
              que pour nos clients. N'hésitez pas à nos DM !
            </p>
          </Accordion>
        </main>
      </div>
      <Footer className="footer_home" logo={logofooter} alt="logo" />
    </>
  );
}

export default Apropos;
