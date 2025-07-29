// components/TopFeaturesChart.jsx
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "../../utils/axiosInstance";

const ChannelROIChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/analytics/channel-roi");
        setChartData(res.data.chartData);
      } catch (err) {
        console.error("Failed to fetch ROI data", err);
      }
    };
    fetchData();
  }, []);

  if (!chartData) return <div>Loading...</div>;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-2">ROI by Channel</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default ChannelROIChart;
