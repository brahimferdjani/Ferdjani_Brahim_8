import React from "react";

function Footer(props) {
  const year = new Date().getFullYear();

  return (
    <footer className={props.className}>
      <div>
        <img src={props.logo} alt={props.alt} />
        <p>© {year} Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
