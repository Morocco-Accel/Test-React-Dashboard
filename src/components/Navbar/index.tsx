import React from "react";
import { Avatar, Notification, UserInfo } from "./components";
export function Navbar() {
  return (
    <div className="NAV_BAR">
      <div className="N_CONTAINER">
        <UserInfo FIRST_NAME="Ryan" />
        <div className="AVA_NOT">
          <Notification />
          <Avatar
            ALT="..."
            IMAGE_LINK="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1001.jpg"
          />
        </div>
      </div>
    </div>
  );
}
