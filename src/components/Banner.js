import '../styles/Banner.css';

function Banner() {
    const nothing = null;
    return (
        <header className='kasa-banner'>
            <img src={nothing} alt="logo" className='logo'/>
            <ul className='menu flex'>
                <li>
                    <a className='padding' href="#">Accueil</a>
                </li>
                <li>
                    <a className='padding' href="#">A propos</a>
                </li>
            </ul>
            <div className='banner-text'>
                <p>Chez vous, partout et ailleurs</p>
            </div>
        </header>
    );
}

export default Banner;