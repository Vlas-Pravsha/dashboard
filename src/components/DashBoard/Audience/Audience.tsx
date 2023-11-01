import React from "react";
import s from "./Audience.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { v1 } from "uuid";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y" as const,

  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
    },
    y: {
      // ticks: {
      //   callback: (value: string | number) => `${value}+`,
      // },
      display: false,
      grid: {
        display: false,
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "right" as const,
    },
    title: {
      display: false,
      text: "Chart.js Horizontal Bar Chart",
    },
  },
};

const labels = [
  { date: "20 Oct", id: v1(), usersCount: 20 },
  { date: "21 Oct", id: v1(), usersCount: 45 },
  { date: "22 Oct", id: v1(), usersCount: 62 },
  { date: "23 Oct", id: v1(), usersCount: 28 },
];

export const data = {
  labels: labels.map((item) => item.date),
  datasets: [
    {
      data: labels.map((item) => item.usersCount),
      backgroundColor: "rgba(26,86,219,1)",
      borderColor: "rgba(229, 231, 235, 0.1)",
      borderWidth: 1,
      borderRadius: 6,
      borderSkipped: false,
      barPercentage: 0.5,
      categoryPercentage: 0.7,
    },
  ],
};

const Audience = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Audience by age</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "35px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <span>50+</span>
          <span>40+</span>
          <span>30+</span>
          <span>20+</span>
        </div>
        <div style={{ height: "120px" }}>
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Audience;
