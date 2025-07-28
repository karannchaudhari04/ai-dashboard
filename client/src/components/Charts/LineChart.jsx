import { Line } from "react-chartjs-2";

export const LineChart = () => {
  const data = {
    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Users",
        data: [150, 300, 500, 800, 1200, 1800],
        borderColor: "#6366f1", // Indigo-500
        backgroundColor: "rgba(99, 102, 241, 0.5)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#cbd5e1", // slate-300
        },
      },
      title: {
        display: true,
        text: "📊 User Growth (Last 6 Months)",
        color: "#cbd5e1",
        font: { size: 16 },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#cbd5e1",
        },
      },
      y: {
        ticks: {
          color: "#cbd5e1",
        },
      },
    },
  };

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md">
      <h2 className="text-white text-lg font-semibold mb-2">
        📈 User Growth
      </h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
