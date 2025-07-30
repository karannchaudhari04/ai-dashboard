// src/components/MetricCard.jsx
const MetricCard = ({ title, value, description, color = "text-blue-400" }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className={`text-3xl font-bold ${color}`}>{value}</p>
      <p className="text-gray-400 mt-1">{description}</p>
    </div>
  );
};

export default MetricCard;
