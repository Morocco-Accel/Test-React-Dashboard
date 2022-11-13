import React from "react";

export function SecondNavbar() {
  return (
    <div className="SECONDE_NAV">
      <div className="SNAV_CON">
        <div className="SN_BLACKSPOT" />
        <button>
          <i className="fas fa-bars"></i>
        </button>
        <div className="USER_INFO">
          <i className="fas fa-bell"></i>
          <i className="fas fa-user"></i>
        </div>
      </div>
    </div>
  );
}
