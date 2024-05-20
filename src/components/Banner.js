import React from 'react';
function Banner(props) {
    return (
        <div className={props.className}>
            <img src={props.src} alt={props.alt} />
            <div>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Banner;