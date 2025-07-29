import { Home, BarChart, Users, Settings, LogOut, BarChart2Icon } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutUser } from "../utils/logout";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", icon: <Home />, path: "/dashboard" },
    { name: "Overview", icon: <BarChart2Icon/>, path: "/pages/overview" },
    { name: "Analytics", icon: <BarChart />, path: "/pages/analytics" },
    { name: "Users", icon: <Users />, path: "/pages/users" },
    { name: "Settings", icon: <Settings />, path: "/pages/settings" },
  ];

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 py-2 px-3 rounded-lg text-sm transition ${
      isActive ? "bg-gray-800 text-white font-semibold" : "hover:bg-gray-800"
    }`;

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 z-50 w-64 h-screen bg-gray-900 text-white transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:block`}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Logo */}
          <div>
            <div className="p-6 text-2xl font-extrabold flex items-center gap-2">
              <span>🔍</span> AI Analytics
            </div>

            {/* Navigation */}
            <nav className="mt-4 px-4 space-y-1">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={linkClasses}
                  onClick={() => setSidebarOpen(false)} // close sidebar on mobile
                >
                  {item.icon}
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Logout */}
          <div className="p-6 border-t border-gray-700">
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-700 text-red-400 flex items-center gap-2"
              onClick={() => logoutUser(navigate, toast)}
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
