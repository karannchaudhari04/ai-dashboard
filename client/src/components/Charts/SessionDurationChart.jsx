import { Line } from "react-chartjs-2";
export const SessionDurationChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Avg. Session Duration (mins)",
        data: [12, 19, 14, 23, 21, 17, 25],
        borderColor: "#38bdf8",
        backgroundColor: "rgba(56, 189, 248, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#cbd5e1" } }, // light text
    },
    scales: {
      x: { ticks: { color: "#cbd5e1" } },
      y: { ticks: { color: "#cbd5e1" } },
    },
  };

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md">
      <h2 className="text-white text-lg font-semibold mb-2">📈 Avg. Session Duration</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default SessionDurationChart;