import React from "react";
import { LinkButton, MenuLink, BlackSpot } from "./components";
export function Sidenav() {
  return (
    <div className="SIDE_NAV">
      <BlackSpot />
      <MenuLink
        TITLE="Profile"
        CHILDREN={<LinkButton TITLE="Ryan Workman" LINK_TO="/" />}
      />
      <MenuLink
        TITLE="Menu"
        CHILDREN={<LinkButton TITLE="Tableau de bord" LINK_TO="/" />}
      />
    </div>
  );
}
