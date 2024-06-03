import React from 'react';
import { Link } from 'react-router-dom';
function Cards(props) {
 //use link to navigate to the fiche page
    return (
        <li key={props.title}>
            <Link to={`/fiche/${props.title}`}>
                <img src={props.src} alt={props.alt} />
                <p>{props.title}</p>
            </Link>
        </li>
    )
}

export default Cards