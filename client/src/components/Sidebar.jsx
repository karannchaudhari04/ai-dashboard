export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col p-6">
      <h2 className="text-xl font-bold mb-6">AI Dashboard</h2>
      <nav className="space-y-4">
        <a href="#" className="hover:text-indigo-400">Overview</a>
        <a href="#" className="hover:text-indigo-400">Analytics</a>
        <a href="#" className="hover:text-indigo-400">Users</a>
        <a href="#" className="hover:text-indigo-400">Settings</a>
      </nav>
    </aside>
  );
}
