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
  type: "line",
  aspectRatio: 3,
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        callback: (value: string | number) => `${value} $`,
      },
      grid: {
        display: false,
      },
    },
  },
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
        borderColor: "rgba(26, 86, 219, 1)",
        backgroundColor: "rgba(26, 86, 219, 1)",
      },
      // {
      //   label: "Ethereum  2",
      //   data: ethData.map((item) => item.high),
      //   borderColor: "rgb(255, 99, 132)",
      //   backgroundColor: "rgba(255, 99, 132, 0.5)",
      // },
    ],
  };
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>LineChart</h2>
      <div className={s.text}>Crypto dashboard</div>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
