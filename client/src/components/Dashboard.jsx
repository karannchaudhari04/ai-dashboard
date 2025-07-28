export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">📊 Total Users</div>
      <div className="bg-white p-6 rounded-lg shadow">🕒 Active Sessions</div>
      <div className="bg-white p-6 rounded-lg shadow">⚡ AI Requests</div>
    </div>
  );
}
