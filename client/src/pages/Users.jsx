import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Header";
import Sidebar from "../components/Sidebar";
import DataTable from "../components/DataTable/data-table";
import { columns } from "../components/DataTable/columns.jsx";
import API from "../utils/axiosInstance";

const Users = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [editUser, setEditUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);
  const [users, setUsers] = useState([]);
  const location = useLocation();

  const tableColumns = columns({ setEditUser, setDeleteUser });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get("/users");
        setUsers(res.data);
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 p-4 overflow-y-auto w-full">
          <h2 className="text-2xl font-bold mb-4">User Management</h2>
          <div className="bg-neutral-900 rounded-lg shadow p-4 sm:p-6 w-full">
            <p className="text-white mb-4 text-sm sm:text-base">
              Manage registered users, update roles, and track activity.
            </p>
            {/* Remove overflow-x-auto to avoid horizontal scroll */}
            <div className="w-full">
              <DataTable columns={tableColumns} data={users} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Users;
