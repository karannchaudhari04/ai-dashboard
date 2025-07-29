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
    <div className="bg-white p-4 rounded-2xl shadow-md w-full h-full">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Viewability & Fraud Metrics
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Distribution of valid impressions vs fraudulent clicks.
          </p>
          <Pie data={chartData}/>
        </div>
  );
};

export default ViewabilityFraudChart;
