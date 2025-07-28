import { Home, BarChart, Users, Settings, LogOut } from "lucide-react"; // or use Heroicons/Tabler

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { name: "Overview", icon: <Home />, href: "#" },
    { name: "Analytics", icon: <BarChart />, href: "#" },
    { name: "Users", icon: <Users />, href: "#" },
    { name: "Settings", icon: <Settings />, href: "#" },
  ];

  return (
    <>
      {/* Overlay for Mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar Panel */}
      <aside
        className={`fixed z-50 top-0 left-0 w-64 h-full bg-gray-900 text-gray-100 shadow-lg transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:block`}
      >
        {/* Logo / Brand */}
        <div className="p-6 text-2xl font-extrabold tracking-tight flex items-center gap-2">
          <span>🔍</span> AI Analytics
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

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Logout */}
        <div className="absolute bottom-6 left-6">
          <a
            href="#"
            className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
