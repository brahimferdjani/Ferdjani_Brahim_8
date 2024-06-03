import React from "react";
import Banner from "../../components/Banner";
import logo from "../../assets/img/LOGO.png";
import cover from "../../assets/img/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import logofooter from "../../assets/img/LOGOFooter.png";
import './Apropos_Style/Apropos.scss';
import Sections from "../../components/Sections";
import { Navbar } from "../../components/Navabar";

function Apropos() {
   
    const year = new Date().getFullYear();

    return (
        <>
            <header className="header_home">
                <img src={logo} alt='logo' />
                <Navbar />
            </header>
            <Banner text={null} className='banner' src={cover} alt='paysage' />
            <main className="main_apropos">
               <Sections title="Fiabilisation" text="Les annonces postées sur Kasa garantissent une fiabilisation de 99%." id="fiabilite" />
               <Sections title="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement suspect sera supprimé." id="respect" />
               <Sections title="Service" text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." id="service" />
               <Sections title="Sécurité" text="La sécurité est la priorité de Kasa. Aussi bien pour nos équipes que pour nos clients. N'hésitez pas à nos DM !" id="securite" />
            </main>
            <footer className="footer_home">
                <div>
                <img src={logofooter} alt='logo' />
                <p>© {year} Kasa. All rights reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Apropos