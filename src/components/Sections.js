import React from "react"
import { useState } from "react";

function Sections(props) {

    const [isOpen, setIsOpen] = useState(false)

    return !isOpen ? (
        <section>
            <div onClick={() => setIsOpen(true)}>
                <button>
                    <h2>{props.title}</h2>
                    <div className="arrow">
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                </button>
            </div>
        </section>
    ) : (<section>
        <div onClick={() => setIsOpen(false)}>
            <button>
                <h2>{props.title}</h2>
                <div className="arrow">
                    <i class="fa-solid fa-chevron-up"></i>
                </div>
            </button>
            <div className="paragraphe">
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    </section >
    )
}

export default Sections