import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound, Landing } from "pages";
import { Sidenav, Navbar } from "components";
//

export function DashboardRoute() {
  return (
    <div className="DASHBOARD_CONTAINER">
      <Sidenav />
      <div className="SCREEN_CONTAINER">
        <Navbar />
        <div className="SCREENS">
          <Routes>
            <Route index element={<Landing />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
