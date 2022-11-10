import { Routes, Route, BrowserRouter } from "react-router-dom";

//
import { Application } from "./Application";
import { NotFound } from "pages";

export default function Screens() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Application />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
