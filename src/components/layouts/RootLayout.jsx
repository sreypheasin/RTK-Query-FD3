import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-xl mx-auto">
        <Outlet />
      </main>
    </>
  );
}
