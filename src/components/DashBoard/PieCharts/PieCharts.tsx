import React from "react";
import s from "./PieCharts.module.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie, Doughnut } from "react-chartjs-2";
import Devices from "./Devices/Devices";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieCharts() {
  const options = {
    responsive: true,
    scales: {},
    plugins: {
      legend: {
        display: false,
      },
      // legend: {
      //   position: "top" as const,
      // },
      title: {
        display: false,
      },
    },
  };
  const data = {
    labels: ["Desktop", "Tablet", "Phone"],
    datasets: [
      {
        label: "Device Usage",
        data: [70, 5, 25],
        backgroundColor: [
          "rgba(23, 176, 189, 1)",
          "rgba(253, 186, 140, 1)",
          "rgba(26, 86, 219, 1)",
        ],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={s.wrapper}>
      <div className={s.headerWrapper}>
        <div className={s.textWrapper}>
          <span className={s.text}>Traffic by device</span>
          <h1 className={s.title}>PieCharts</h1>
        </div>
        <span className={s.fullReportText}>FULL REPORT</span>
      </div>
      <div className={s.chart}>
        <div style={{ width: "350px", height: "380px" }}>
          <Doughnut data={data} options={options} />
        </div>
      </div>
      <Devices />
    </div>
  );
}
export default PieCharts;
