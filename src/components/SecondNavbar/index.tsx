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
          <div className="NOT_N">
            <i className="fas fa-bell"></i>
            <div className="N_NOT">4</div>
          </div>

          <i className="fas fa-user"></i>
        </div>
      </div>
    </div>
  );
}
