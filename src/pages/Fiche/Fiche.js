import React from "react";
import Banner from "../../components/Banner";
import logo from "../../assets/img/LOGO.png";
import cover from "../../assets/img/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";
import logofooter from "../../assets/img/LOGOFooter.png";
import './Apropos_Style/Apropos.css';
import { annonces } from '../../Annonces.js';


function Fiche(props) {
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
            <main>
                <img src={annonces.pictures[0]} alt={annonces.title} />
                <h2>{annonces.title}</h2>
                <p>{annonces.location}</p>
              
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

export default Fiche