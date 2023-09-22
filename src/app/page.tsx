import React from "react";
import DashBoard from "@/components/DashBoard/DashBoard";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import "./globals.css";
export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="app">
        <DashBoard />
      </div>
      <div className="nav">
        <Sidebar />
      </div>
    </div>
  );
}
