import { Bar } from 'react-chartjs-2';
const APIErrorChart = () => {
  const data = {
    labels: ['400', '401', '403', '404', '500'],
    datasets: [
      {
        label: 'Error Count',
        data: [14, 9, 6, 20, 12],
        backgroundColor: '#ef4444', // red-500
        borderRadius: 8,
        barThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1f2937',
        titleColor: '#f9fafb',
        bodyColor: '#f9fafb',
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#cbd5e1', // slate-300
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: '#cbd5e1',
        },
        grid: {
          color: '#334155', // slate-700
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold text-white mb-4">⚠️ API Error Rates</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default APIErrorChart;
