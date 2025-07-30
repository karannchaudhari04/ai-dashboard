import { useEffect, useState } from "react";
import Navbar from "../components/Header";
import Sidebar from "../components/Sidebar";
import DataTable from "../components/DataTable/data-table";
import { columns } from "../components/DataTable/columns.jsx";
import API from "../utils/axiosInstance"; // ✅ Import custom axios instance

const Users = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [editUser, setEditUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);
  const [users, setUsers] = useState([]);

  const tableColumns = columns({ setEditUser, setDeleteUser });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await API.get("/users"); // ✅ Use axiosInstance (auto handles token)
        setUsers(res.data);
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 p-4 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4 text-white">User Management</h2>
          <div className="bg-black rounded-lg shadow p-6">
            <p className="text-white mb-4">
              Here you can manage registered users, update their roles, and view user activity.
            </p>
            <DataTable columns={tableColumns} data={users} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Users;
