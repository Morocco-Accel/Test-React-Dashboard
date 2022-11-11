import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DashboardRoute } from "./Dashboard";
import { NotFound } from "pages";
//

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<DashboardRoute />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
