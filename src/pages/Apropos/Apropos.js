import React from "react";
import Banner from "../../components/Banner";
import logo from "../../assets/img/LOGO.png";
import cover from "../../assets/img/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import logofooter from "../../assets/img/LOGOFooter.png";
import './Apropos_Style/Apropos.css';
import Sections from "../../components/Sections";

function Apropos() {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/53eb4fa86e.js";
    script.crossOrigin = "anonymous";
    head.appendChild(script);
    const year = new Date().getFullYear();


    return (
        <>
            <header>
                <img src={logo} alt='logo' />
                <nav>
                    <ul>
                        <li><a href='./pages/Home'>Accueil</a></li>
                        <li><a href='./pages/A_propos'>A Propos</a></li>
                    </ul>
                </nav>
            </header>
            <Banner text={null} className='banner' src={cover} alt='paysage' />
            <main>
               <Sections title="Fiabilisation" text="Les annonces postées sur Kasa garantissent une fiabilisation de 99%." id="fiabilite" />
               <Sections title="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement suspect sera supprimé." id="respect" />
               <Sections title="Service" text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." id="service" />
               <Sections title="Sécurité" text="La sécurité est la priorité de Kasa. Aussi bien pour nos équipes que pour nos clients. N'hésitez pas à nos DM !" id="securite" />
            </main>
            <footer>
                <div>
                <img src={logofooter} alt='logo' />
                <p>© {year} Kasa. All rights reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Apropos