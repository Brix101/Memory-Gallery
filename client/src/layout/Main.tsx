import React from "react";
import { Outlet } from "react-router-dom";
import FooterBar from "../components/FooterBar";
import NavigationBar from "../components/NavigationBar";

function Main() {
  return (
    <>
      <NavigationBar />
      {/* Page Views */}
      <div className="min-h-screen">
        <Outlet />
      </div>
      <FooterBar />
    </>
  );
}

export default Main;
