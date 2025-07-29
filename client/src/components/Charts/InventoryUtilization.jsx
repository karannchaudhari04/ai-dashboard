// components/SessionDurationChart.jsx
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "../../utils/axiosInstance";

const InventoryUtilizationChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/analytics/inventory-utilization");
        setChartData(res.data.chartData);
      } catch (err) {
        console.error("Failed to fetch inventory data", err);
      }
    };
    fetchData();
  }, []);

  if (!chartData) return <div>Loading...</div>;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">Ad Inventory Utilization</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default InventoryUtilizationChart;
