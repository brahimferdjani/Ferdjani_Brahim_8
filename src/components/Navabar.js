import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
            <Link to='/'>Accueil</Link>
            <Link to='/apropos'>A Propos</Link>
        </nav>
    )
}