const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar Panel */}
      <aside
        className={`fixed z-50 top-0 left-0 w-64 h-full bg-gray-800 shadow-md transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:block`}
      >
        <div className="p-6 text-xl font-bold">🔍 AI Analytics</div>
        <nav className="mt-4 space-y-2 px-6">
          <a href="#" className="block py-2 hover:bg-gray-700 rounded">Overview</a>
          <a href="#" className="block py-2 hover:bg-gray-700 rounded">Analytics</a>
          <a href="#" className="block py-2 hover:bg-gray-700 rounded">Users</a>
          <a href="#" className="block py-2 hover:bg-gray-700 rounded">Settings</a>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
