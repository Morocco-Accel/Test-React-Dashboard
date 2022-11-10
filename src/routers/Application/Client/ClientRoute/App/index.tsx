import React from "react";
import { Routes, Route } from "react-router-dom";
import { Profile, Landing, NotFound } from "pages";
export function Store() {
  console.log("store");
  return (
    <Routes>
      <Route path="main" element={<Landing />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
