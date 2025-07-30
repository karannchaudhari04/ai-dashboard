// src/pages/Analytics.jsx
import { useEffect, useState } from "react";
import Navbar from "../components/Header";
import Sidebar from "../components/Sidebar";
import exportToPDF from "../utils/exportToPDF";
import {
  InventoryChart,
  EngagementChart,
  ChannelROIChart,
  ViewabilityFraudChart,
  CTRBudgetChart,
} from "../components/Charts";

const Analytics = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Initial dummy data generator
  const generateChartData = () =>
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 1000));

  // States for each chart
  const [inventoryData, setInventoryData] = useState(generateChartData());
  const [engagementData, setEngagementData] = useState(generateChartData());
  const [roiData, setRoiData] = useState(generateChartData());
  const [fraudData, setFraudData] = useState(generateChartData());
  const [ctrBudgetData, setCtrBudgetData] = useState(generateChartData());

  // Simulate updates every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setInventoryData(generateChartData());
      setEngagementData(generateChartData());
      setRoiData(generateChartData());
      setFraudData(generateChartData());
      setCtrBudgetData(generateChartData());
    }, 10000); // <-- 10 seconds

    return () => clearInterval(interval);
  }, []);

  const handleExportAllCharts = () => {
    exportToPDF("all-charts-container", "AllCharts.pdf");
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-gray-900">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Analytics Dashboard
            </h2>
            <button
              onClick={handleExportAllCharts}
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded"
            >
              Export Charts
            </button>
          </div>

          {/* All charts wrapped for export */}
          <div
            id="all-charts-container"
            className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
          >
            <div className="bg-white rounded-lg shadow p-4 dark:bg-gray-800">
              <InventoryChart data={inventoryData} />
            </div>
            <div className="bg-white rounded-lg shadow p-4 dark:bg-gray-800">
              <EngagementChart data={engagementData} />
            </div>
            <div className="bg-white rounded-lg shadow p-4 dark:bg-gray-800">
              <ChannelROIChart data={roiData} />
            </div>
            <div className="bg-white rounded-lg shadow p-4 dark:bg-gray-800">
              <ViewabilityFraudChart data={fraudData} />
            </div>
            <div className="bg-white rounded-lg shadow p-4 dark:bg-gray-800">
              <CTRBudgetChart data={ctrBudgetData} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Analytics;
