import React from "react"


function Sections(props) {
    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const paragraphe = document.querySelector(".paragraphe")
        paragraphe.classList.toggle("active");
        toggleArrow()
    }

    const toggleArrow = () => {
        const arrow = document.querySelector(".fa-chevron-down")
        arrow.classList.toggle("hidden")
        const arrow2 = document.querySelector(".fa-chevron-up")
        arrow2.classList.toggle("active")
    }

    return (
        <section id={props.id}>
            <div onClick={handleClick}>
                <a href="Apropos">
                    <h2>{props.title}</h2>
                    <div className="arrow">
                        <i class="fa-solid fa-chevron-down"></i>
                        <i class="fa-solid fa-chevron-up"></i>
                    </div>
                </a>
            </div>
            <div className="paragraphe">
                <p>
                    {props.text}
                </p>
            </div>
        </section>
    )
}

export default Sections