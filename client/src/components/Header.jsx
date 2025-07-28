import { Menu } from "lucide-react"; // Install with: npm install lucide-react

const Header = ({ setSidebarOpen }) => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-gray-800 shadow md:shadow-none md:px-6">
      <button
        className="text-gray-200 md:hidden"
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        <Menu size={24} />
      </button>
      <h1 className="text-lg font-semibold">Dashboard</h1>
    </header>
  );
};

export default Header;
