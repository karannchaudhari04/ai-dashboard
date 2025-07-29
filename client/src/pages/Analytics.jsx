// src/pages/Analytics.jsx

import Header from "../components/Header"; // You named your Navbar as Header
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
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header/Navbar */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Analytics Charts */}
        <main className="flex-1 p-4 overflow-y-auto space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
          <InventoryChart />
          <EngagementChart />
          <ChannelROIChart />
          <ViewabilityFraudChart />
          <CTRBudgetChart />
          <CTRBudgetChart /> {/* Optional duplicate */}
        </main>
      </div>
    </div>
  );
};

export default Analytics;
