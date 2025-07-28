import { Home, BarChart, Users, Settings, LogOut, Menu } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Overview", icon: <Home />, href: "#" },
    { name: "Analytics", icon: <BarChart />, href: "#" },
    { name: "Users", icon: <Users />, href: "#" },
    { name: "Settings", icon: <Settings />, href: "#" },
  ];

  return (
    <>
      {/* Hamburger for mobile */}
      <div className="md:hidden flex items-center justify-between bg-gray-900 text-white p-4 shadow">
        <div className="text-xl font-bold">AI Analytics</div>
        <button onClick={() => setSidebarOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar Panel */}
      <aside
        className={`fixed z-50 top-0 left-0 w-64 h-screen bg-gray-900 text-gray-100 shadow-lg transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:block`}
      >
        <div className="flex flex-col justify-between h-screen">
          {/* Logo + Nav */}
          <div>
            {/* Logo */}
            <div className="p-6 text-2xl font-extrabold tracking-tight flex items-center gap-2">
              <span>🔍</span> <span>AI Analytics</span>
            </div>

            {/* Nav Items */}
            <nav className="mt-4 space-y-1 px-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 py-2 px-3 rounded-lg text-sm hover:bg-gray-800 transition-colors"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Logout Button */}
          <div className="p-6">
            <a
              href="#"
              className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
