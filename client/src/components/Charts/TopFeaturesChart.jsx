import { Doughnut } from 'react-chartjs-2';
const TopFeaturesChart = () => {
  const data = {
    labels: ['Text Gen', 'Image Gen', 'Summarizer', 'Chatbot', 'Code Gen'],
    datasets: [
      {
        label: 'Top AI Features',
        data: [35, 25, 15, 10, 15],
        backgroundColor: [
          '#10b981', // emerald
          '#3b82f6', // blue
          '#f59e0b', // amber
          '#ec4899', // pink
          '#8b5cf6', // violet
        ],
        borderColor: '#0f172a',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#f1f5f9',
          boxWidth: 20,
        },
      },
      tooltip: {
        backgroundColor: '#1e293b',
        titleColor: '#f8fafc',
        bodyColor: '#f8fafc',
      },
    },
  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold text-white mb-4">🚀 Top Used AI Features</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default TopFeaturesChart;
