import React from "react";
import s from "./Devices.module.scss";

import { FiSmartphone } from "react-icons/fi";
import { BsTablet } from "react-icons/bs";
import { IoMdDesktop } from "react-icons/io";
import { v1 } from "uuid";

const DevicesData = [
  {
    id: v1(),
    svg: <IoMdDesktop className={s.svg} />,
    device: "Desktop",
    count: "234k",
    percent: (
      <>
        <span className={s.percent}>4$ </span> vs last month
      </>
    ),
  },
  {
    id: v1(),
    svg: <FiSmartphone className={s.svg} />,
    device: "Phone",
    count: "94k",
    percent: (
      <>
        <span className={s.percent}>13$ </span> vs last month
      </>
    ),
  },
  {
    id: v1(),
    svg: <BsTablet className={s.svg} />,
    device: "Tablet",
    count: "16k",
    percent: (
      <>
        <span className={s.percent}>20$ </span> vs last month
      </>
    ),
  },
];
const Devices = () => {
  return (
    <div className={s.wrapper}>
      {DevicesData.map((el) => (
        <div className={s.content} key={el.id}>
          {el.svg}
          <span className={s.device}>{el.device}</span>
          <span className={s.count}>{el.count}</span>
          <span>{el.percent}</span>
        </div>
      ))}
    </div>
  );
};

export default Devices;
