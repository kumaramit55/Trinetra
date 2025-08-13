import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";


function Layout() {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <Header />
      </header>
      <main className="layout-main">
        <Outlet />
      </main>
      <footer className="layout-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
