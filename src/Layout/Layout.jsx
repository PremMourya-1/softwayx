import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <ScrollToTop />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default Layout;
