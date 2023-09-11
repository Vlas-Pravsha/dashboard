"use client";
import { getNews } from "@/api/getNews";
import React from "react";
import s from "./DashBoard.module.scss";
import Cart from "./Cart/Cart";
import ShowNews from "./ShowNews/ShowNews";

const DashBoard = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const newsData = await getNews();
        setData(newsData);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={s.wrapper}>
      <Cart></Cart>
      <ShowNews data={data} />
    </div>
  );
};

export default DashBoard;
