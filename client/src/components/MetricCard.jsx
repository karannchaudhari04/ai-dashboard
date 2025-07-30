// src/components/MetricCard.jsx
const MetricCard = ({ title, value, description, color }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
      <h4 className={`text-lg font-semibold mb-1 ${color}`}>{title}</h4>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-sm text-gray-400 mt-1">{description}</p>
    </div>
  );
};

export default MetricCard;
