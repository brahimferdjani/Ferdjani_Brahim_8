import React from "react";
import Banner from "../../components/Banner.js";
import Cards from "../../components/Cards.js";
import { annonces } from "../../Annonces.js";
import logo from "../../assets/img/LOGO.png";
import logofooter from "../../assets/img/LOGOFooter.png";
import cover from "../../assets/img/Image source 1.png";
import "./Home.scss";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";

function Home() {
  const nombreCarte = annonces.map((annonce) => (
    <Cards
      key={annonce.id}
      tags={annonce.tags}
      src={annonce.cover}
      alt={annonce.title}
      title={annonce.title}
      id={annonce.id}
    />
  ));

  return (
    <>
      <div className="container">
        <Header className="header_home" logo={logo} alt="logo" />
        <Banner
          text="Chez vous, partout et ailleurs"
          className="banner"
          src={cover}
          alt="paysage"
        />
        <main className="main_home">
          <ul>{nombreCarte}</ul>
        </main>
      </div>
      <Footer className="footer_home" logo={logofooter} alt="logo" />
    </>
  );
}

export default Home;
