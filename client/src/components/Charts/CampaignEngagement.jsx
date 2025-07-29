// components/UserRetentionChart.jsx
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "../../utils/axiosInstance";

const CampaignEngagementChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/analytics/campaign-engagement");
        setChartData(res.data.chartData);
      } catch (err) {
        console.error("Failed to fetch campaign engagement data", err);
      }
    };
    fetchData();
  }, []);

  if (!chartData) return <div>Loading...</div>;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">Campaign Engagement</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default CampaignEngagementChart;
