import Layout from "./Layout";

import Chart1 from "./Charts/InventoryUtilization";
import Chart2 from "./Charts/CampaignEngagement";
import Chart3 from "./Charts/ChannelROI";
import Chart4 from "./Charts/ViewabilityFraud";
import Chart5 from "./Charts/CampaignCTRvsBudgetChart";
import Chart6 from "./Charts/ActiveUserRegionsChart";

export default function Dashboard() {
  return (
    <Layout>
      {/* Page Content */}
      <main className="flex-1 px-6 py-8 overflow-y-auto">
        {/* Page Header */}
        <h1 className="text-3xl font-bold mb-8 text-white">📊 AI Analytics Dashboard</h1>

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
          {/* Row 3 */}
          <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg">
            <Chart5 />
          </div>
          <div className="bg-[#1e293b] rounded-2xl p-4 shadow-lg">
            <Chart6 />
          </div>
        </div>
      </main>
    </Layout>
  );
}
