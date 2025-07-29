// src/pages/Overview.jsx

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Pie } from "react-chartjs-2";

const Overview = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const data = {
    labels: ["Active Campaigns", "Completed", "Paused"],
    datasets: [
      {
        label: "Campaign Status",
        data: [12, 19, 7],
        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
        borderColor: "#111827",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex-1 flex flex-col">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 p-6 overflow-y-auto space-y-6">
          <h1 className="text-3xl font-bold mb-4">Welcome to AI Analytics Dashboard</h1>

          {/* Company Summary */}
          <div className="bg-gray-800 rounded-lg p-6 shadow">
            <p className="text-gray-300 text-lg">
              AI Vibe is a performance-driven advertising intelligence platform
              providing real-time insights on campaign performance, user engagement,
              inventory utilization, and ROI. Get a bird’s-eye view of your advertising ecosystem.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-4 rounded shadow">
              <h2 className="text-lg font-semibold text-white">Total Users</h2>
              <p className="text-2xl font-bold">12,345</p>
            </div>
            <div className="bg-gray-800 p-4 rounded shadow">
              <h2 className="text-lg font-semibold text-white">Active Campaigns</h2>
              <p className="text-2xl font-bold">56</p>
            </div>
            <div className="bg-gray-800 p-4 rounded shadow">
              <h2 className="text-lg font-semibold text-white">CTR (avg)</h2>
              <p className="text-2xl font-bold">3.8%</p>
            </div>
            <div className="bg-gray-800 p-4 rounded shadow">
              <h2 className="text-lg font-semibold text-white">Monthly Revenue</h2>
              <p className="text-2xl font-bold">$28,400</p>
            </div>
          </div>

          {/* Overview Chart */}
          <div className="bg-gray-800 shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-white">Campaign Distribution</h2>
            <div className="w-full md:w-1/2">
              <Pie data={data} options={{ plugins: { legend: { labels: { color: "#ffffff" } } } }} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Overview;
