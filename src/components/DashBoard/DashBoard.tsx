"use client";
import React from "react";
import s from "./DashBoard.module.scss";
import Footer from "../Footer/Footer";
import { v1 } from "uuid";
import LineChart from "./LineChart/LineChart";
import ActivityCard from "./ActivityCard/ActivityCard";
import CarouselWidget from "./Carousel widget/CarouselWidget";
import Statistics from "./Statistics/Statistics";
import { getBtcToUsd, getETHToUsd } from "@/api/getCoinsToUsd";
import BarChart from "./BarChart/BarChart";
import PieCharts from "./PieCharts/PieCharts";
import Products from "./Products/Products";
import Users from "./Users/Users";
import Audience from "./Audience/Audience";
import SmartChat from "./SmartChat/SmartChat";

export interface ItemType {
  title: string;
  arr: DataType[];
  id: string;
  type: any;
  buttonText: string;
}

export interface DataType {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}
export interface BarChartsItem {
  id: string;
  DesktopPC: number;
  Phone: number;
  Gaming: number;
}
export interface CoinsItem {
  time: number;
  high: number;
  low: number;
  open: number;
  volumefrom: number;
  volumeto: number;
  close: number;
  conversionType: string;
  conversionSymbol: string;
}

interface DashBoardProps {
  mapedData: DataType[];
  customersArr: DataType[];
}

const ActivityCardData = [
  {
    id: v1(),
    date: "April 2023",
    title: "Application UI design in Figma",
    text: "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
    button: <>Learn More</>,
  },
  {
    id: v1(),
    date: "March 2023",
    title: "Marketing UI code in Flowbite",
    text: "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
    link: <>Go to Flowbite Blocks</>,
  },
  {
    id: v1(),
    date: "February 2023",
    title: "Application UI design in Figma",
    text: "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
  },
];

const CarouselData = [
  {
    id: v1(),
    header: "Insights",
    title: "You are going to grow by 44% next year",
    text: "Get started with a free and open-source admin dashboard layout built with Tailwind CSS and Flowbite featuring charts, widgets, CRUD layouts, authentication pages, and more",
    listTitle: "Key Takeaways:",
    list: [
      {
        id: v1(),
        text: "What are the new challenges in the delivery industry due to new consumer expectations.",
      },
      {
        id: v1(),
        text: "How the online delivery business model is diversifying to meet new demands.",
      },
      {
        id: v1(),
        text: "Which new technology requirements must be met to ensure true retail experiences.",
      },
      {
        id: v1(),
        text: "How a headless commerce architecture solves challenges in the industry.",
      },
    ],
    link: <>Get me there</>,
  },
  {
    id: v1(),
    header: "Tips to grow",
    text: "Marketing, sales & business growth for small business. Improve your marketing & promotion results - and grow your sales!",
    listTitle: "What you will learn:",
    list: [
      {
        id: v1(),
        text: "Dynamic reports and dashboards",
      },
      {
        id: v1(),
        text: "Learn from competitors about what to do, and not to do",
      },
      {
        id: v1(),
        text: "Take their business to the next level",
      },
      {
        id: v1(),
        text: "Limitless business automation",
      },
      {
        id: v1(),
        text: "Build relationships with other businesses to co-promote",
      },
      {
        id: v1(),
        text: "Make their customers feel loved and apprecaited",
      },
    ],
    link: <>Let&lsquo;s start</>,
  },
  {
    id: v1(),
    header: "Features",
    title: "Go next level with Flowbite",
    text: "Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.",
    list: [
      {
        id: v1(),
        text: "Dynamic reports and dashboards",
      },
      {
        id: v1(),
        text: "Templates for everyone",
      },
      {
        id: v1(),
        text: "Development workflow",
      },
      {
        id: v1(),
        text: "Limitless business automation",
      },
    ],
    button: <>Viev more</>,
  },
];

const BarChartsData = [
  {
    id: v1(),
    DesktopPC: 170,
    Phone: 120,
    Gaming: 220,
  },
  {
    id: v1(),
    DesktopPC: 180,
    Phone: 294,
    Gaming: 194,
  },
  {
    id: v1(),
    DesktopPC: 164,
    Phone: 167,
    Gaming: 217,
  },
  {
    id: v1(),
    DesktopPC: 145,
    Phone: 179,
    Gaming: 279,
  },
  {
    id: v1(),
    DesktopPC: 194,
    Phone: 245,
    Gaming: 215,
  },
  {
    id: v1(),
    DesktopPC: 170,
    Phone: 182,
    Gaming: 263,
  },
  {
    id: v1(),
    DesktopPC: 155,
    Phone: 143,
    Gaming: 183,
  },
];

const DashBoard = ({ mapedData, customersArr }: DashBoardProps) => {
  const [btcData, setBtcData] = React.useState([]);
  const [ethData, setEthData] = React.useState([]);

  React.useEffect(() => {
    async function fetchDataBtc() {
      const fetchedData = await getBtcToUsd();
      setBtcData(fetchedData);
    }
    async function fetchDataEth() {
      const fetchedData = await getETHToUsd();
      setEthData(fetchedData);
    }
    fetchDataBtc();
    fetchDataEth();
  }, []);
  console.log(ethData);

  console.log(btcData);
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
      <div className={s.cryptoWrapper}>
        <LineChart btcData={btcData} ethData={ethData} />
        <Statistics itemList={itemList} />
      </div>
      <div className={s.statsWrapper}>
        <Products />
        <Users />
        <Audience />
      </div>
      <div className={s.sectionWrapper}>
        <div className={s.gridItem}>
          <SmartChat />
        </div>
        <PieCharts />
        <BarChart BarChartsData={BarChartsData} />
      </div>
      <div className={s.secondSectionWrapper}>
        <ActivityCard ActivityCardData={ActivityCardData} />
        <CarouselWidget CarouselData={CarouselData} />
      </div>

      <Footer />
      <div className={s.footerText}>© 2023 Dashboard.com. My Best Project.</div>
    </div>
  );
};

export default DashBoard;
