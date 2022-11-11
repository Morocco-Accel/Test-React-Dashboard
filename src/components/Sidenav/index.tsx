import React from "react";
import {
  LinkButtonE,
  LinkButtonF,
  MenuLink,
  BlackSpot,
  ImgIcon,
} from "./components";

export function Sidenav() {
  return (
    <div className="SIDE_NAV">
      <BlackSpot />
      <MenuLink
        TITLE="Profile"
        CHILDREN={
          <div>
            <LinkButtonF
              LEFT={
                <ImgIcon
                  URL="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1001.jpg"
                  ALT="..."
                />
              }
              TITLE="Ryan Workman"
              LINK_TO="/"
              RIGHT={<i className="fas fa-ellipsis-h"></i>}
            />
            <LinkButtonF
              LEFT={<i className="fas fa-sign-in-alt"></i>}
              TITLE="Déconnexion"
              LINK_TO="/"
              RIGHT={<div />}
            />
          </div>
        }
      />
      <MenuLink
        TITLE="Menu"
        CHILDREN={
          <div>
            <LinkButtonE TITLE="Tableau de bord" LINK_TO="/" />
            <LinkButtonF
              LEFT={<div />}
              TITLE="Demandes de service"
              LINK_TO="/"
              RIGHT={<div className="SPAN">4</div>}
            />
            <LinkButtonE TITLE="Clients" LINK_TO="CLIENTS" />
            <LinkButtonE TITLE="Lieux d'interventions" LINK_TO="/" />
            <LinkButtonE TITLE="Partenaires" LINK_TO="PARTENAIRES" />
            <LinkButtonE TITLE="Bénéficaires" LINK_TO="/" />
          </div>
        }
      />
    </div>
  );
}
