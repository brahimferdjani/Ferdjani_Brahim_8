import React from 'react';
import Banner from '../../components/Banner.js';
import Cards from '../../components/Cards.js';
import { annonces } from '../../Annonces.js';
import logo from '../../assets/img/LOGO.png';
import logofooter from '../../assets/img/LOGOFooter.png';
import cover from '../../assets/img/Image source 1.png'
import './Home.scss';
import { Navbar } from '../../components/Navabar.js';

function Home(props) {

    const nombreCarte = annonces.map(annonce => <Cards key={annonce.id} tags={annonce.tags} src={annonce.cover} alt={annonce.title} title={annonce.title} />)

    const year = new Date().getFullYear();


    // composant header et footer
    return (
        <>
            <header>
                <img src={logo} alt='logo'/>
                <Navbar />
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