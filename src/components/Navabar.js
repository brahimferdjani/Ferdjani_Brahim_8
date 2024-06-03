import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav_home">
      <Link to="/">Accueil</Link>
      <Link to="/apropos">A Propos</Link>
    </nav>
  );
};

export default Navbar;
