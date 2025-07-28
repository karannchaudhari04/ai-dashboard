import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import API from "../../utils/axiosInstance";

const SessionDurationChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/analytics/session-duration")
      .then((res) => setData(res.data))
      .catch((err) => {
        if (err.response.status === 401) {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }
      });
  }, []);

  if (!data) return <div>Loading...</div>;

  return <Line data={data.chartData} options={data.options} />;
};

export default SessionDurationChart;
