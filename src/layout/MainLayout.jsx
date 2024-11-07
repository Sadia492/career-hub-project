import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import AppProvider from "../Context/AppProvider";

export default function MainLayout() {
  return (
    <div>
      <AppProvider>
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-232px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </AppProvider>
    </div>
  );
}
