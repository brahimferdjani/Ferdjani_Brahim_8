import React from "react";
import logo from "../../assets/img/LOGO.png";
import logofooter from "../../assets/img/LOGOFooter.png";
import { annonces } from '../../Annonces.js';
import Sections from "../../components/Sections.js";
import { Navbar } from "../../components/Navabar.js";

function Fiche(props) {

    const year = new Date().getFullYear();

    return (
        <>
            <header>
                <img src={logo} alt='logo' />
                <Navbar />
            </header>
            <main>
                <section>
                    <img src={annonces.pictures[0]} alt={annonces.title} />
                </section>
                <section>
                    <h2>{annonces.title}</h2>
                    <p>{annonces.location}</p>
                    <ul>
                        {annonces.tags.map(tag => <li key={tag}>{tag}</li>)}
                    </ul>
                    <Sections title="Description" text={annonces.description} id="description" />
                </section>
                <section>
                    <div>
                        <p>{annonces.host.name}</p>
                        <img src={annonces.host.picture} alt={annonces.host.name} />
                    </div>
                    <p><span>{annonces.rating}</span></p>
                    <Sections title="Équipements" text={annonces.equipments} id="equipements" />
                </section>
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