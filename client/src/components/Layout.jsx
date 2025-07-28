// src/components/Layout.jsx
import { Home, BarChart2, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 space-y-6 hidden md:block">
        <h1 className="text-2xl font-bold mb-8">📊 AI Dashboard</h1>
        <nav className="space-y-4">
          <Link to="/" className="flex items-center gap-3 hover:text-purple-400">
            <Home size={20} /> Dashboard
          </Link>
          <Link to="/analytics" className="flex items-center gap-3 hover:text-purple-400">
            <BarChart2 size={20} /> Analytics
          </Link>
          <Link to="/settings" className="flex items-center gap-3 hover:text-purple-400">
            <Settings size={20} /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-6">{children}</main>
    </div>
  );
}
