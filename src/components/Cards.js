import '../styles/Cards.css';
function Cards() {

    const cards = []
    for(let i = 0; i <= 5; i++) {
    cards.push (
        <div className='contents'>
            <div className='elements'>
                <h1>title</h1>
                <p>host name</p>
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