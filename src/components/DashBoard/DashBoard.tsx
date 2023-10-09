"use client";
import React from "react";
import s from "./DashBoard.module.scss";
import Footer from "../Footer/Footer";
import Statistics from "./Statistics/Statistics";
import { v1 } from "uuid";
import LineChart from "./LineChart/LineChart";

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
      <div className={s.q}>
        <LineChart />
        <Statistics
          itemList={itemList}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </div>
      <Footer />
    </div>
  );
};

export default DashBoard;
