"use client";
import DashBoard from "@/components/DashBoard/DashBoard";
import Sidebar from "@/components/Sidebar/Sidebar";
import React, { useState } from "react";
import Header from "../Header";
import "../../../app/globals.css";
import { DataType } from "@/components/DashBoard/Statistics/Statistics";

interface SideBarOpenProps {
  mapedData: DataType[];
  customersArr: DataType[];
}

const SideBarOpen = ({ mapedData, customersArr }: SideBarOpenProps) => {
  const [navOpen, setNavOpen] = useState(true);
  const navToggle = () => setNavOpen(!navOpen);
  return (
    <div className="container">
      <div className="header">
        <Header navToggle={navToggle} navOpen={navOpen} />
      </div>
      <div className="app">
        <DashBoard mapedData={mapedData} customersArr={customersArr} />
      </div>
      <div className="nav">
        <Sidebar navOpen={navOpen} />
      </div>
    </div>
  );
};

export default SideBarOpen;
