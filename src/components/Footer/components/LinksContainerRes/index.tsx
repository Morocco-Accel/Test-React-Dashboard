import React from "react";
import { Link } from "react-router-dom";
import { IconsRow } from "../IconsRow";
import { BlackSpot } from "../../../Sidenav/components";
export function LinkContainerRes() {
  return (
    <div>
      <div className="MENU_TOP">
        <div>
          <BlackSpot />
          <IconsRow />
        </div>
      </div>
      <div className="LINE_CON">
        <div className="LINE" />
      </div>

      <div className="CON_RES">
        <div className="LINKS_CONTAINER_R">
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
        </div>
      </div>
    </div>
  );
}
