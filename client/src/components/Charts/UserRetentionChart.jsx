import { Bar } from "react-chartjs-2";

const UserRetentionChart = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Returning Users',
        data: [120, 150, 130, 180],
        backgroundColor: '#10b981',
        borderRadius: 10,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#f1f5f9',
        },
      },
      tooltip: {
        backgroundColor: '#1e293b',
        titleColor: '#f8fafc',
        bodyColor: '#f8fafc',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#cbd5e1',
        },
        grid: {
          color: '#334155',
        },
      },
      x: {
        ticks: {
          color: '#cbd5e1',
        },
        grid: {
          color: '#334155',
        },
      },
    },
  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold text-white mb-4">🔁 User Retention</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default UserRetentionChart;
