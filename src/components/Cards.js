import React from 'react';
function Cards(props) {

    return (
        <li key={props.title}>
            <a href={props.tags}>
                <img src={props.src} alt={props.alt} />
                <p>{props.title}</p>
            </a>
        </li>
    )
}

export default Cards