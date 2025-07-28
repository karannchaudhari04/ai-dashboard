import { Bell, Settings, LogOut, User } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const user = {
    name: "Admin User",
    role: "Administrator",
    avatar: "https://i.pravatar.cc/150?img=12",
  };

  return (
    <header className="bg-white shadow-sm px-6 py-3 flex justify-between items-center sticky top-0 z-30">
      {/* Left - Placeholder for page title or breadcrumb */}
      <div className="text-xl font-semibold text-gray-800">Dashboard</div>

      {/* Right - Profile */}
      <div className="relative">
        <button
          className="flex items-center gap-3 focus:outline-none"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img
            src={user.avatar}
            alt="avatar"
            className="w-9 h-9 rounded-full border-2 border-gray-300"
          />
          <div className="hidden md:block text-left">
            <div className="text-sm font-medium text-gray-800">{user.name}</div>
            <div className="text-xs text-gray-500">{user.role}</div>
          </div>
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-md border text-sm z-50">
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
            >
              <User size={16} /> Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
            >
              <Settings size={16} /> Settings
            </a>
            <hr />
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 text-red-500 flex items-center gap-2"
            >
              <LogOut size={16} /> Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
