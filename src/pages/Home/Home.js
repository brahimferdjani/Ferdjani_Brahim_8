import React from 'react';
import Banner from '../../components/Banner.js';
import Cards from '../../components/Cards.js';
import { annonces } from '../../Annonces.js';
import logo from '../../assets/img/LOGO.png';
import logofooter from '../../assets/img/LOGOFooter.png';
import cover from '../../assets/img/Image source 1.png'
import './Home_Style/Home.css';

function Home(props) {

    const nombreCarte = annonces.map(annonce => <Cards key={annonce.id} tags={annonce.tags} src={annonce.cover} alt={annonce.title} title={annonce.title} />)

    if (nombreCarte.length > 6) {
        nombreCarte.length = 6
    }

    const year = new Date().getFullYear();


    return (
        <>
            <header>
                <img src={logo} alt='logo'/>
                <nav>
                    <ul>
                        <li><a href='./pages/Home'>Accueil</a></li>
                        <li><a href='./pages/A_propos'>A Propos</a></li>
                    </ul>
                </nav>
            </header>
            <Banner text='Chez vous, partout et ailleurs' className='banner' src={cover} alt='paysage' />
            <main>
                <ul>
                    {nombreCarte}
                </ul>
            </main>
            <footer>
                <div>
                <img src={logofooter} alt='logo' />
                <p>© {year} Kasa. All rights reserved</p>
                </div>
            </footer>
        </>
    );
}

export default Home