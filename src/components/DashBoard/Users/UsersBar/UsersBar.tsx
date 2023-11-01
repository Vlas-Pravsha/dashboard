import React from "react";
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
  responsive: true,
  scales: {
    x: {
      display: false,
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
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

// const labels = ["January", "February", "March", "April", "May", "June", "July"];
const labels = [
  { date: "20 Oct", id: v1(), usersCount: 1350 },
  { date: "21 Oct", id: v1(), usersCount: 2350 },
  { date: "22 Oct", id: v1(), usersCount: 1741 },
  { date: "23 Oct", id: v1(), usersCount: 1350 },
  { date: "24 Oct", id: v1(), usersCount: 1115 },
  { date: "25 Oct", id: v1(), usersCount: 1632 },
  { date: "26 Oct", id: v1(), usersCount: 1319 },
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

function UsersBar() {
  return (
    <div style={{ height: "120px" }}>
      <Bar options={options} data={data} />
    </div>
  );
}
export default UsersBar;
