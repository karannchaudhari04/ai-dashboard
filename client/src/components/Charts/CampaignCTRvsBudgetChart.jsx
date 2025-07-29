// components/Charts/CampaignCTRvsBudgetChart.jsx
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "../../utils/axiosInstance";

const CampaignCTRvsBudgetChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/analytics/campaign-ctr-vs-budget");
        setChartData(res.data.chartData);
      } catch (err) {
        console.error("Failed to fetch CTR vs Budget data", err);
      }
    };
    fetchData();
  }, []);

  if (!chartData) return <div>Loading...</div>;

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full h-full">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Campaign CTR vs Budget
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            CTR performance against allocated budget for each campaign.
          </p>
          <Line data={chartData}/>
        </div>
  );
};

export default CampaignCTRvsBudgetChart;
