// src/pages/Overview.jsx
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Header";
import MetricCard from "../components/MetricCard";

const Overview = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const metrics = [
    {
      title: "Total Campaigns",
      value: "152",
      description: "Active in last 30 days",
      color: "text-blue-400",
    },
    {
      title: "Ad Impressions",
      value: "10.2M",
      description: "Total this month",
      color: "text-green-400",
    },
    {
      title: "Top Channel",
      value: "Influencer",
      description: "Highest ROI",
      color: "text-yellow-400",
    },
    {
      title: "Conversion Rate",
      value: "15.7%",
      description: "From clicks to conversions",
      color: "text-teal-400",
    },
    {
      title: "Bounce Rate",
      value: "18%",
      description: "Visitors leaving immediately",
      color: "text-red-400",
    },
  {
    title: "Revenue",
    value: "$120.3K",
    description: "Monthly revenue generated",
    color: "text-green-400",
  },
  {
    title: "Users",
    value: "8,240",
    description: "Active users this month",
    color: "text-blue-400",
  },
  {
    title: "Growth",
    value: "12.4%",
    description: "Month-over-month growth",
    color: "text-yellow-400",
  },
];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Company Overview</h2>

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
