import React from "react";
import { IconC } from "../Icon";
export function IconsRow() {
  return (
    <div className="ICONS_ROW">
      <IconC ICON={<i className="fab fa-facebook-f"></i>} TO={"/"} />
      <IconC ICON={<i className="fab fa-linkedin-in"></i>} TO={"/"} />
      <IconC ICON={<i className="fab fa-twitter"></i>} TO={"/"} />
      <IconC ICON={<i className="fab fa-instagram"></i>} TO={"/"} />
      <IconC ICON={<i className="fab fa-youtube"></i>} TO={"/"} />
    </div>
  );
}
