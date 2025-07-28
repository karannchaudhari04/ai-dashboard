// src/components/Analytics.jsx
import { Activity, Clock, TrendingUp, AlertTriangle } from "lucide-react";

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Analytics Overview</h2>

      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-800 p-4 rounded-xl shadow-md flex items-center">
          <Clock className="text-yellow-400 mr-3" />
          <div>
            <p className="text-sm text-gray-400">Avg Session Duration</p>
            <p className="text-lg font-semibold">3m 42s</p>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl shadow-md flex items-center">
          <TrendingUp className="text-blue-400 mr-3" />
          <div>
            <p className="text-sm text-gray-400">User Retention</p>
            <p className="text-lg font-semibold">64%</p>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl shadow-md flex items-center">
          <Activity className="text-green-400 mr-3" />
          <div>
            <p className="text-sm text-gray-400">Top AI Feature</p>
            <p className="text-lg font-semibold">Image Generator</p>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-xl shadow-md flex items-center">
          <AlertTriangle className="text-red-400 mr-3" />
          <div>
            <p className="text-sm text-gray-400">API Error Rate</p>
            <p className="text-lg font-semibold">1.2%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
