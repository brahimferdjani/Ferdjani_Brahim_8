/**
 * @returns {HTMLElement} header with logo and menu
 */

import '../styles/Banner.css';
import Cards from '../components/Cards';

function Banner() {
    const nothing = null;
    return (
        <header className='kasa-banner'>
            <img src={nothing} alt="logo" className='logo'/>
            <ul className='flex'>
                <li>
                    <a className='padding' href="index.html">Accueil</a>
                </li>
                <li>
                    <a className='padding' href="index.html">A propos</a>
                </li>
            </ul>
            <div className='banner-text'>
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <Cards/>
        </header>
    );
}

export default Banner;