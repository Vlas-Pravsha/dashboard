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
import { BarChartsItem } from "../DashBoard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
interface BarChartProps {
  BarChartsData: BarChartsItem[];
}

export const options = {
  responsive: true,
  scales: {
    x: {
      minBarLength: 12,
      grid: {
        display: false,
      },
    },
    y: {
      display: false,

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

const labels = [
  "20 Oct",
  "21 Oct",
  "22 Oct",
  "23 Oct",
  "24 Oct",
  "25 Oct",
  "26 Oct",
];

function BarChart({ BarChartsData }: BarChartProps) {
  const data = {
    labels,
    datasets: [
      {
        label: "Desktop PC",
        data: BarChartsData.map((item) => item.DesktopPC),
        backgroundColor: "rgba(26, 86, 219, 1)",
      },
      {
        label: "Phone",
        data: BarChartsData.map((item) => item.Phone),
        backgroundColor: "rgba(253, 186, 140, 1)",
      },
      {
        label: "Gaming/Console",
        data: BarChartsData.map((item) => item.Gaming),
        backgroundColor: "rgba(23, 176, 189, 1)",
      },
    ],
  };
  return (
    <div className={s.wrapper}>
      <div className={s.title}>BarChart</div>
      <Bar options={options} data={data} />
    </div>
  );
}
export default BarChart;
