import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {
  if (!data || data.length === 0) return <div>No data</div>;

  const firstPrice = parseFloat(data[0].price);
  const lastPrice = parseFloat(data[data.length - 1].price);
  const trendColor = lastPrice > firstPrice ? 'green' : lastPrice < firstPrice ? 'red' : 'orange';

  const chartData = {
    labels: data.map(d => new Date(d.timestamp * 1000).toLocaleTimeString()),
    datasets: [
      {
        label: 'Price',
        data: data.map(d => parseFloat(d.price)),
        borderColor: trendColor,
        backgroundColor: trendColor,
        fill: false,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    }
  };

  return (
    <div style={{ width: "100%", height: "50px" }}>
      <Line options={options} data={chartData} />
    </div>
  );
};

export default LineChart;
