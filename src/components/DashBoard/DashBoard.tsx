"use client";
import React from "react";
import s from "./DashBoard.module.scss";
import Footer from "../Footer/Footer";
import Statistics from "./Statistics/Statistics";
import { v1 } from "uuid";

const DashBoard = ({ mapedData, customersArr }: any) => {
  const [activeItem, setActiveItem] = React.useState("Coins");
  const slicedCoins = mapedData.slice(0, 5);
  const itemList = [
    {
      id: v1(),
      title: "Coins",
      arr: slicedCoins,
      buttonText: "Top products",
      type: "button",
    },
    {
      id: v1(),
      title: "Customers",
      arr: customersArr,
      buttonText: "Top Customers",
      type: "secondary",
    },
  ];
  return (
    <div className={s.wrapper}>
      <Statistics
        itemList={itemList}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <Footer />
    </div>
  );
};

export default DashBoard;
