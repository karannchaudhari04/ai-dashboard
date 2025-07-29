// components/APIErrorChart.jsx
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import axios from "../../utils/axiosInstance";

const ViewabilityFraudChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/analytics/viewability-fraud");
        setChartData(res.data.chartData);
      } catch (err) {
        console.error("Failed to fetch viewability data", err);
      }
    };
    fetchData();
  }, []);

  if (!chartData) return <div>Loading...</div>;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">Ad Viewability & Fraud Metrics</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default ViewabilityFraudChart;
