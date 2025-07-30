// src/pages/Overview.jsx
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Header";

const Overview = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            Company Overview
          </h2>

          {/* Grid of Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Card 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">Total Campaigns</h3>
              <p className="text-3xl font-bold text-blue-400">152</p>
              <p className="text-gray-400 mt-1">Active in last 30 days</p>
            </div>

            {/* Example Card 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">Ad Impressions</h3>
              <p className="text-3xl font-bold text-green-400">10.2M</p>
              <p className="text-gray-400 mt-1">Total this month</p>
            </div>

            {/* Example Card 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">Top Channel</h3>
              <p className="text-xl font-bold text-yellow-400">Influencer</p>
              <p className="text-gray-400 mt-1">Highest ROI</p>
            </div>

            {/* More cards can be added here */}
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Conversion Rate
              </h3>
              <p className="text-xl font-bold text-teal-400">15.7%</p>
              <p className="text-gray-400 mt-1">From clicks to conversions</p>
            </div>

            {/* Bounce Rate */}
            <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Bounce Rate
              </h3>
              <p className="text-xl font-bold text-red-400">18%</p>
              <p className="text-gray-400 mt-1">Visitors leaving immediately</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Overview;
