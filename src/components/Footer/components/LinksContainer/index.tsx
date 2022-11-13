import React from "react";
import { Link } from "react-router-dom";
import { IconsRow } from "../IconsRow";
import { BlackSpot } from "../../../Sidenav/components";
export function LinksContainer() {
  return (
    <div className="LINKS_CONTAINER">
      <div className="LINKS_MENU_L">
        <Link to="/">ACCEUIL</Link>
        <Link to="/">A PROPS</Link>
        <Link to="/">NOS SERVICES</Link>
        <Link to="/">ACTUALITES</Link>
      </div>
      <div className="LINKS_MENU_R">
        <Link to="/">MENTIONS LEGALES</Link>
        <Link to="/">POLITIQUE DE CONFIDALITE</Link>
        <Link to="/">CONDITION GENERALE D'UTILISATION</Link>
        <Link to="/"></Link>
      </div>
      <div className="ICON_MENU">
        <IconsRow />
        <BlackSpot />
      </div>
    </div>
  );
}
