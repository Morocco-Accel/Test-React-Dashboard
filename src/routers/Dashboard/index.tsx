import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound, Landing, Partenaires, ClientsP } from "pages";
import { Sidenav, Navbar, Footer, SecondNavbar } from "components";
//

export function DashboardRoute() {
  return (
    <div className="DASHBOARD_CONTAINER">
      <Sidenav />
      <div className="SCREEN_CONTAINER">
        <SecondNavbar />
        <Navbar />
        <div className="SCREENS">
          <Routes>
            <Route index element={<Landing />} />
            <Route path="PARTENAIRES" element={<Partenaires />} />
            <Route path="CLIENTS" element={<ClientsP />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}
