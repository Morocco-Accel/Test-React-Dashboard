import React from "react";
import env from "react-dotenv";
import { Outlet } from "react-router-dom";
export function Landing() {
  console.log(env.TEST_API);
  return <div className="LANDING_CONTAINER">Landing</div>;
}
