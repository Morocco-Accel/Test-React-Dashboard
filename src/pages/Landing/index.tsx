import React from "react";
import { Outlet } from "react-router-dom";
export function Landing() {
  return (
    <div>
      Landing <Outlet />
    </div>
  );
}
