import React from "react";
import { LinkButton, MenuLink } from "./components";
export function Sidenav() {
  return (
    <div className="SIDE_NAV">
      <MenuLink TITLE="Profile" CHILDREN={<LinkButton TITLE="" LINK_TO="" />} />
      <MenuLink TITLE="Menu" CHILDREN={<LinkButton TITLE="" LINK_TO="" />} />
    </div>
  );
}
