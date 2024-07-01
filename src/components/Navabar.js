import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  if (window.location.pathname === "/") {
    return (
      <nav className="nav_home">
        <Link to="/" className="textdecoration">
          Accueil
        </Link>
        <Link to="/apropos">A Propos</Link>
      </nav>
    );
  } else if (window.location.pathname === "/apropos") {
    return (
      <nav className="nav_home">
        <Link to="/">Accueil</Link>
        <Link to="/apropos" className="textdecoration">
          A Propos
        </Link>
      </nav>
    );
  }
  return (
    <nav className="nav_home">
      <Link to="/">Accueil</Link>
      <Link to="/apropos">A Propos</Link>
    </nav>
  );
};

export default Navbar;
