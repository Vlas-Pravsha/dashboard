import React from "react";
import s from "./PieCharts.module.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Blue", "Orange", "Aqua"],
  datasets: [
    {
      label: "# of Votes",
      data: [7, 3, 5],
      backgroundColor: [
        "rgba(26, 86, 219, 1)",
        "rgba(253, 186, 140, 1)",
        "rgba(23, 176, 189, 1)",
      ],
      borderColor: [],
      borderWidth: 1,
    },
  ],
};

function PieCharts() {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>PieCharts</h1>
      <div className={s.chart}>
        <Pie data={data} />
      </div>
    </div>
  );
}
export default PieCharts;
