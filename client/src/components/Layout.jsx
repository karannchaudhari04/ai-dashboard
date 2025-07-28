import Sidebar from "./Sidebar";
import Navbar from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
