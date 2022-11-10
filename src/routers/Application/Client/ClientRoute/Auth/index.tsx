import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signin, Landing, Signup, NotFound } from "pages";
export function Auth() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
