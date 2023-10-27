import React from "react";
import DashBoard from "@/components/DashBoard/DashBoard";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import "./globals.css";
import { getCryptoCoins } from "@/api/getCryptoCoins";
const Avatar1 = "/Img/UsersImg/neil-sims.png";
const Avatar2 = "/Img/UsersImg/jese-leos.png";
const Avatar3 = "/Img/UsersImg/lana-byrd.png";
const Avatar4 = "/Img/UsersImg/profile.png";
const Avatar5 = "/Img/UsersImg/andrey.png";

const customersArr = [
  {
    id: 1,
    name: "Neil Sims",
    imageUrl: Avatar1,
    description: "neil.sims@flowbite.com",
    price: "1238",
  },
  {
    id: 2,
    name: "Roberta Casas",
    imageUrl: Avatar2,
    description: "roberta.casas@flowbite.com",
    price: "2348",
  },
  {
    id: 3,
    name: "Michael Gough",
    imageUrl: Avatar3,
    description: "michael.gough@flowbite.com",
    price: "958",
  },
  {
    id: 4,
    name: "Jese Leos",
    imageUrl: Avatar4,
    description: "jese.leos@flowbite.com",
    price: "1558",
  },
  {
    id: 5,
    name: "Bonnie Green",
    imageUrl: Avatar5,
    description: "bonnie.green@flowbite.com",
    price: "3378",
  },
];

export default async function Home() {
  const cryptoData = await getCryptoCoins();

  const mapedData = cryptoData.map((item) => ({
    // coinInfo: item.CoinInfo,
    name: item.CoinInfo.Name,
    imageUrl: `https://www.cryptocompare.com${item.CoinInfo.ImageUrl}`,
    description: item.CoinInfo.AssetLaunchDate,
    price: item.RAW?.USD.PRICE.toFixed(2) || "0",
  }));

  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="nav">
        <Sidebar />
      </div>
      <div className="app">
        <DashBoard mapedData={mapedData} customersArr={customersArr} />
      </div>
    </div>
  );
}
