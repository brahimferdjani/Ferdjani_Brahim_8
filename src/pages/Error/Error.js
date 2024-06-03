import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import logo from "../../assets/img/LOGO.png";
import logofooter from "../../assets/img/LOGOFooter.png";
import "./Error.scss";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <Header className="header_home" logo={logo} alt="logo" />
      <main className="error">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </main>
      <Footer className="footer_home" logo={logofooter} alt="logo" />
    </>
  );
}

export default Error;
