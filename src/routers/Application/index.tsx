import React from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound, Profile, Landing } from "pages";
// views
import { Store, Auth } from "./Client";

import { useAuth } from "core";
//
export function Application() {
  const { status } = useAuth();
  return (
    <>
      {status === "signOut" ? (
        <Routes>
          <Route path="/*" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<Store />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
}
