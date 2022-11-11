import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound, Landing } from "pages";
import { Sidenav } from "components";
//

export function DashboardRoute() {
  return (
    <div className="DASHBOARD_CONTAINER">
      <Sidenav />
      <Routes>
        <Route path="DASHBOARD" element={<Landing />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
