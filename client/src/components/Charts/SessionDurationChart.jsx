import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import API from "../../utils/axiosInstance";

const SessionDurationChart = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false); // new state

  useEffect(() => {
   API.get("/analytics/session-duration")
  .then((res) => {
    console.log("✅ Chart response:", res.data);
    setData(res.data);
  })
  .catch((err) => {
    console.error("❌ Chart error:", err?.response || err);
    setError(true);
  });

  }, []);

  if (error) return <div className="text-red-500">⚠️ Failed to load chart</div>;
  if (!data) return <div>Loading...</div>;

  return <Line data={data.chartData} options={data.options} />;
};

export default SessionDurationChart;
