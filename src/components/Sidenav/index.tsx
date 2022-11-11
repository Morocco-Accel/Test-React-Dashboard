import React from "react";
import { LinkButton, MenuLink, BlackSpot } from "./components";
export function Sidenav() {
  return (
    <div className="SIDE_NAV">
      <BlackSpot />
      <MenuLink
        TITLE="Profile"
        CHILDREN={
          <div>
            <LinkButton TITLE="Ryan Workman" LINK_TO="/" />
            <LinkButton TITLE="Déconnexion" LINK_TO="/" />
          </div>
        }
      />
      <MenuLink
        TITLE="Menu"
        CHILDREN={
          <div>
            <LinkButton TITLE="Tableau de bord" LINK_TO="/" />
            <LinkButton TITLE="Demandes de service" LINK_TO="/" />
            <LinkButton TITLE="Clients" LINK_TO="/" />
            <LinkButton TITLE="Lieux d'interventions" LINK_TO="/" />
            <LinkButton TITLE="Partenaires" LINK_TO="PARTENAIRES" />
            <LinkButton TITLE="Bénéficaires" LINK_TO="/" />
          </div>
        }
      />
    </div>
  );
}
