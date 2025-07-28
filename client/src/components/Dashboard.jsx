import Topbar from "../components/Navbar";

import Chart1 from '../components/charts/SessionDurationChart';
import Chart2 from '../components/charts/UserRetentionChart';
import Chart3 from '../components/charts/TopFeaturesChart';
import Chart4 from '../components/charts/APIErrorChart';
import Chart5 from '../components/charts/UserGeoChart';
import Chart6 from '../components/charts/LineChart';

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a] text-white">
      {/* Topbar */}
      <Topbar />

      {/* Page Content */}
      <main className="flex-1 px-6 py-8 overflow-y-auto">
        {/* Page Header */}
        <h1 className="text-3xl font-bold mb-8">📊 AI Analytics Dashboard</h1>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          {/* Row 1 */}
          <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg">
            <Chart1 />
          </div>
          <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg">
            <Chart2 />
          </div>

          {/* Row 2 */}
          <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg">
            <Chart3 />
          </div>
          <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg">
            <Chart4 />
          </div>

          {/* Full-Width Row */}
          <div className="md:col-span-2 bg-[#1e293b] rounded-2xl p-4 shadow-lg">
            <Chart5 />
          </div>
          <div className="md:col-span-2 bg-[#1e293b] rounded-2xl p-4 shadow-lg">
            <Chart6 />
          </div>
        </div>
      </main>
    </div>
  );
}
