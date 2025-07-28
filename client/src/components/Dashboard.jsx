import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart2, Clock, Zap } from 'lucide-react';

const data = [
  { name: 'Feb', users: 150 },
  { name: 'Mar', users: 300 },
  { name: 'Apr', users: 500 },
  { name: 'May', users: 800 },
  { name: 'Jun', users: 1200 },
  { name: 'Jul', users: 1800 },
];

function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-xl p-4 flex items-center shadow-md">
          <BarChart2 className="text-purple-400 w-6 h-6 mr-3" />
          <div>
            <p className="text-sm text-gray-400">Total Users</p>
            <p className="text-lg font-semibold">1,800</p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 flex items-center shadow-md">
          <Clock className="text-pink-400 w-6 h-6 mr-3" />
          <div>
            <p className="text-sm text-gray-400">Active Sessions</p>
            <p className="text-lg font-semibold">312</p>
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 flex items-center shadow-md">
          <Zap className="text-orange-400 w-6 h-6 mr-3" />
          <div>
            <p className="text-sm text-gray-400">AI Requests</p>
            <p className="text-lg font-semibold">5,120</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-gray-800 rounded-xl p-4 shadow-md">
        <h2 className="text-md font-semibold mb-4 text-gray-200">User Growth (Last 6 Months)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip contentStyle={{ backgroundColor: "#222", borderColor: "#555" }} />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Dashboard;
