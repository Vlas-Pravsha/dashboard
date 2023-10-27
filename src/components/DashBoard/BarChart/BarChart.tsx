import React from "react";
import s from "./BarChart.module.scss";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    // legend: {
    //   position: "top" as const,
    // },
    title: {
      display: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [19, 54, 24, 54, 22, 61, 23],
      backgroundColor: "rgba(26, 86, 219, 1)",
    },
    {
      label: "Dataset 2",
      data: [15, 64, 34, 53, 51, 51, 29],
      backgroundColor: "rgba(253, 186, 140, 1)",
    },
    {
      label: "Dataset 2",
      data: [12, 24, 14, 43, 21, 31, 31],
      backgroundColor: "rgba(23, 176, 189, 1)",
    },
  ],
};

function BarChart() {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>BarChart</div>
      <Bar options={options} data={data} />
    </div>
  );
}
export default BarChart;
