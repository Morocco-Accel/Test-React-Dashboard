import React from "react";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <div className="FOOTER_CONTAINER">
      <div className="LINKS_CONTAINER">
        <div className="LINKS_MENU">
          <Link to="/">ACCEUIL</Link>
          <Link to="/">A PROPS</Link>
          <Link to="/">NOS SERVICES</Link>
          <Link to="/">ACTUALIT</Link>
        </div>
        <div className="LINKS_MENU">
          <Link to="/">MENTIONS LEGALES</Link>
          <Link to="/">POLITIQUE DE CONFIDALITE</Link>
          <Link to="/">CONDITION GENERALE D'UTILISATION</Link>
        </div>

        <div className="ICON_MENU"></div>
      </div>
    </div>
  );
}