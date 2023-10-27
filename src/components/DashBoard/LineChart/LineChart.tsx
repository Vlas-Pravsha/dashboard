import s from "./LineChart.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { en, Faker } from "@faker-js/faker";
import { CoinsItem } from "../DashBoard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
interface LineChartProps {
  btcData: CoinsItem[];
  ethData: CoinsItem[];
}

// export const faker = new Faker({
//   locale: [en],
// });

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
    // title: {
    //   display: true,
    // },
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
  "27 Oct",
];

const LineChart = ({ btcData, ethData }: LineChartProps) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Bitcoin 1",
        data: btcData.map((item) => item.high),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Ethereum  2",
        data: ethData.map((item) => item.high),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className={s.wrapper}>
      LineChart
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
