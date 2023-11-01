import React from "react";

import { Bar } from "react-chartjs-2";
import s from "./Products.module.scss";

const Products = () => {
  const options = {
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
      },
    },
  };
  const data = {
    labels: [
      "20 Oct",
      "21 Oct",
      "22 Oct",
      "23 Oct",
      "24 Oct",
      "25 Oct",
      "26 Oct",
    ],
    datasets: [
      {
        label: "Quantity",
        data: [170, 180, 164, 150, 200, 175, 155],
        backgroundColor: [
          "rgba(26,86,219,1)",
          "rgba(26,86,219,1)",
          "rgba(26,86,219,1)",
          "rgba(26,86,219,1)",
          "rgba(26,86,219,1)",
          "rgba(26,86,219,1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.textWrapper}>
          <span className={s.text}>New products</span>
          <h2 className={s.title}>2,340</h2>
          <div className={s.text}>
            <span className={s.percent}>12.5% </span>
            Since last month
          </div>
        </div>
          <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Products;
