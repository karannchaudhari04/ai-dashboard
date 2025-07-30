// src/pages/Analytics.jsx
import Navbar from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

import {
  InventoryChart,
  EngagementChart,
  ChannelROIChart,
  ViewabilityFraudChart,
  CTRBudgetChart,
} from "../components/Charts";

const Analytics = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-gray-900">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Analytics Dashboard</h2>

          {/* Grid layout for responsive charts */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="bg-white rounded-lg shadow p-4 dark:bg-gray-800">
              <InventoryChart />
            </div>
            <div className="bg-white rounded-lg shadow p-4 dark:bg-gray-800">
              <EngagementChart />
            </div>
            <div className="bg-white rounded-lg shadow p-4 dark:bg-gray-800">
              <ChannelROIChart />
            </div>
            <div className="bg-white rounded-lg shadow p-4 dark:bg-gray-800">
              <ViewabilityFraudChart />
            </div>
            <div className="bg-white rounded-lg shadow p-4 dark:bg-gray-800">
              <CTRBudgetChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
