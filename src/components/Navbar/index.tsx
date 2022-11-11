import React from "react";
import { Avatar, Notification, UserInfo } from "./components";
export function Navbar() {
  return (
    <div className="NAV_BAR">
      <div className="N_CONTAINER">
        <UserInfo FIRST_NAME="Ryan" />
        <div>
          <Notification />
          <Avatar ALT="..." IMAGE_LINK="..." />
        </div>
      </div>
    </div>
  );
}
