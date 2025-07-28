import { Bar } from "react-chartjs-2";

const UserGeoChart = () => {
  const data = {
    labels: ['USA', 'India', 'Germany', 'Canada', 'Brazil', 'UK'],
    datasets: [
      {
        label: 'Users',
        data: [1200, 1050, 600, 500, 450, 430],
        backgroundColor: '#3b82f6', // blue-500
        borderRadius: 6,
        barThickness: 20,
      },
    ],
  };

  const options = {
    indexAxis: 'y', // 🔁 Horizontal bar chart
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1e293b',
        titleColor: '#f1f5f9',
        bodyColor: '#f1f5f9',
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#cbd5e1',
        },
        grid: {
          color: '#334155',
        },
        beginAtZero: true,
      },
      y: {
        ticks: {
          color: '#cbd5e1',
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold text-white mb-4">🌍 User Geo Distribution</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default UserGeoChart;
