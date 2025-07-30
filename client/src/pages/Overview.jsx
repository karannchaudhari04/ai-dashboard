// src/pages/Overview.jsx
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Header";
import MetricCard from "../components/MetricCard";
import exportToCSV from "../utils/exportToCSV";

const generateRandomMetrics = () => {
  return [
    {
      title: "Total Campaigns",
      value: Math.floor(Math.random() * 200 + 50).toString(),
      description: "Active in last 30 days",
      color: "text-blue-400",
    },
    {
      title: "Ad Impressions",
      value: `${(Math.random() * 20 + 1).toFixed(1)}M`,
      description: "Total this month",
      color: "text-green-400",
    },
    {
      title: "Top Channel",
      value: ["Influencer", "Email", "Paid Ads", "Social"][Math.floor(Math.random() * 4)],
      description: "Highest ROI",
      color: "text-yellow-400",
    },
    {
      title: "Conversion Rate",
      value: `${(Math.random() * 30 + 5).toFixed(1)}%`,
      description: "From clicks to conversions",
      color: "text-teal-400",
    },
    {
      title: "Bounce Rate",
      value: `${(Math.random() * 30 + 5).toFixed(1)}%`,
      description: "Visitors leaving immediately",
      color: "text-red-400",
    },
    {
      title: "Revenue",
      value: `$${(Math.random() * 200 + 20).toFixed(1)}K`,
      description: "Monthly revenue generated",
      color: "text-green-400",
    },
    {
      title: "Users",
      value: Math.floor(Math.random() * 10000 + 2000).toString(),
      description: "Active users this month",
      color: "text-blue-400",
    },
    {
      title: "Growth",
      value: `${(Math.random() * 25 + 1).toFixed(1)}%`,
      description: "Month-over-month growth",
      color: "text-yellow-400",
    },
  ];
};

const Overview = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [metrics, setMetrics] = useState(generateRandomMetrics());

  // Real-time update every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(generateRandomMetrics());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Company Overview</h2>
            <div className="flex gap-4">
              <button
                onClick={() => exportToCSV(metrics, "metrics_data")}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
              >
                Export CSV
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                title={metric.title}
                value={metric.value}
                description={metric.description}
                color={metric.color}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Overview;
