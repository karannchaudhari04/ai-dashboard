// components/Charts/ActiveUserRegionsChart.jsx
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "../../utils/axiosInstance";

const ActiveUserRegionsChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/analytics/active-user-regions");
        setChartData(res.data.chartData);
      } catch (err) {
        console.error("Failed to fetch region data", err);
      }
    };
    fetchData();
  }, []);

  if (!chartData) return <div>Loading...</div>;

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full h-full">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Active User Regions
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Heatmap of top regions with the most active users.
          </p>
          <Doughnut data={chartData}/>
        </div>
  );
};

export default ActiveUserRegionsChart;
