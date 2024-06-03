import React from "react";
import Navbar from "./Navabar.js";

function Header(props) {
  return (
    <header className={props.className}>
      <img src={props.logo} alt={props.alt} />
      <Navbar />
    </header>
  );
}

export default Header;
