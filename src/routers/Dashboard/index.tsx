import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound, Landing, Partenaires } from "pages";
import { Sidenav, Navbar, Footer } from "components";
//

export function DashboardRoute() {
  return (
    <div className="DASHBOARD_CONTAINER">
      <Sidenav />
      <div className="SCREEN_CONTAINER">
        <Navbar />
        <div className="SCREENS">
          <Routes>
            <Route index element={<Landing />} />
            <Route path="PARTENAIRES" element={<Partenaires />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}
