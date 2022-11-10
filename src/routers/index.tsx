import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NotFound, Landing } from "pages";
//

export default function Screens() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
