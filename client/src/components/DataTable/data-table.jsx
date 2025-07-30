import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { columns as defaultColumns } from "./columns";

const DataTable = ({ columns = defaultColumns }) => {
  const [data, setData] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 5;

  const token = localStorage.getItem("token");

  const fetchUsers = async (page = 1) => {
    try {
      const res = await axios.get(
        `http://localhost:5050/api/users?page=${page}&limit=${limit}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setData(res.data.users);
      setTotalPages(res.data.totalPages);
      setCurrentPage(res.data.currentPage);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSave = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5050/api/users/${editUser._id}`,
        {
          name: editUser.name,
          email: editUser.email,
          role: editUser.role,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      await fetchUsers(currentPage);
      setEditUser(null);
    } catch (err) {
      console.error("Failed to update user", err);
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(
        `http://localhost:5050/api/users/${deleteUser._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      await fetchUsers(currentPage);
      setDeleteUser(null);
    } catch (err) {
      console.error("Failed to delete user", err);
    }
  };

  return (
    <>
      <div className="overflow-x-auto rounded-lg border border-gray-700 bg-[#0f0f0f] text-white p-4">
        <h2 className="text-xl font-semibold mb-4">
          Manage registered users, update roles, and track activity
        </h2>

        <Table>
          <TableHeader className="bg-gray-900 text-white">
            <TableRow>
              {columns.map((column, index) => (
                <TableHead key={index}>{column.header}</TableHead>
              ))}
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row._id}
                className="hover:bg-gray-800 transition-all"
              >
                {columns.map((column, index) => (
                  <TableCell key={index}>{row[column.accessorKey]}</TableCell>
                ))}
                <TableCell className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-gray-800 text-white hover:bg-gray-700"
                    onClick={() => setEditUser(row)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => setDeleteUser(row)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-6">
          <Button
            disabled={currentPage === 1}
            onClick={() => fetchUsers(currentPage - 1)}
            className="bg-gray-800 text-white disabled:opacity-50"
          >
            Prev
          </Button>
          <span className="text-white text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            disabled={currentPage === totalPages}
            onClick={() => fetchUsers(currentPage + 1)}
            className="bg-gray-800 text-white disabled:opacity-50"
          >
            Next
          </Button>
        </div>
      </div>

      {/* Edit Modal */}
      <Dialog open={!!editUser} onOpenChange={() => setEditUser(null)}>
        <DialogContent className="!bg-gray-900 !text-white !border-gray-700">
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
          </DialogHeader>
          {editUser && (
            <form onSubmit={handleEditSave} className="flex flex-col gap-3 mt-2">
              <Input
                name="name"
                value={editUser.name}
                onChange={handleEditChange}
                placeholder="Name"
              />
              <Input
                name="email"
                value={editUser.email}
                onChange={handleEditChange}
                placeholder="Email"
              />
              <Input
                name="role"
                value={editUser.role}
                onChange={handleEditChange}
                placeholder="Role"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Save
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Modal */}
      <Dialog open={!!deleteUser} onOpenChange={() => setDeleteUser(null)}>
        <DialogContent className="!bg-gray-900 !text-white !border-gray-700">
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
          </DialogHeader>
          <div className="text-white mt-2">
            Are you sure you want to delete{" "}
            <strong>{deleteUser?.name}</strong>?
          </div>
          <div className="flex gap-2 mt-4">
            <Button variant="destructive" onClick={handleDeleteConfirm}>
              Delete
            </Button>
            <Button
              variant="outline"
              onClick={() => setDeleteUser(null)}
              className="bg-gray-800 text-white hover:bg-gray-700"
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DataTable;
