import { Bell, Settings, LogOut, User, Menu } from "lucide-react";
import { useState } from "react";

const Header = ({ setSidebarOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const user = {
    name: "Admin User",
    role: "Administrator",
    avatar: "https://i.pravatar.cc/150?img=12",
  };

  return (
    <header className="bg-gray-900 px-6 py-3 flex justify-between items-center sticky top-0 z-30 shadow-md">
      {/* Left - Hamburger + Title */}
      <div className="flex items-center gap-4">
        {/* Hamburger for Mobile */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-white md:hidden"
        >
          <Menu size={24} />
        </button>
        <div className="text-xl font-semibold text-white">Dashboard</div>
      </div>

      {/* Right - Profile */}
      <div className="relative">
        <button
          className="flex items-center gap-3 focus:outline-none"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img
            src={user.avatar}
            alt="avatar"
            className="w-9 h-9 rounded-full border-2 border-gray-700"
          />
          <div className="hidden md:block text-left">
            <div className="text-sm font-medium text-white">{user.name}</div>
            <div className="text-xs text-gray-300">{user.role}</div>
          </div>
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 text-sm z-50">
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-700 text-white flex items-center gap-2"
            >
              <User size={16} /> Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-700 text-white flex items-center gap-2"
            >
              <Settings size={16} /> Settings
            </a>
            <hr className="border-gray-600" />
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-700 text-red-400 flex items-center gap-2"
            >
              <LogOut size={16} /> Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;