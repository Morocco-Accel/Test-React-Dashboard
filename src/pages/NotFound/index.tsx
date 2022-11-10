import { useAuth } from "core";
import React from "react";

export function NotFound() {
  const { signOut } = useAuth();
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Not Found</h1>
      <button onClick={signOut}>signout</button>
    </div>
  );
}
