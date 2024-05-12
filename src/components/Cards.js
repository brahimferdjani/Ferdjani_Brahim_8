import '../styles/Cards.css';
import { annonces } from '../Datas/Annonces';
function Cards() {

    const cards = []
    for(let i = 0; i <= 5; i++) {
    cards.push (
        <div className='contents' key={annonces[i].id}>
            <img src={annonces[i].pictures} alt=""/>
            <div className='elements'>
                <h1>{annonces[i].title}</h1>
            </div>
        </div>
    )
}

    return (
        <div className="cards">
        {cards}
        </div>
    );
}

export default Cards;