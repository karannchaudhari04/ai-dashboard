import React, { useEffect, useState } from "react";
import API from "@/utils/axiosInstance";

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

  const fetchUsers = async (page = 1) => {
    try {
      const res = await API.get(`/users?page=${page}&limit=${limit}`);
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
      await API.put(`/users/${editUser._id}`, {
        name: editUser.name,
        email: editUser.email,
        role: editUser.role,
      });
      await fetchUsers(currentPage);
      setEditUser(null);
    } catch (err) {
      console.error("Failed to update user", err);
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      await API.delete(`/users/${deleteUser._id}`);
      await fetchUsers(currentPage);
      setDeleteUser(null);
    } catch (err) {
      console.error("Failed to delete user", err);
    }
  };

  return (
    <>
      <div className="w-full p-4 rounded-lg border border-neutral-800 bg-black text-white">
        <h2 className="text-xl font-semibold mb-4">
          Manage registered users, update roles, and track activity
        </h2>

        {/* Desktop Table View */}
        <div className="hidden md:block">
          <Table className="w-full">
            <TableHeader className="bg-black text-white">
              <TableRow>
                {columns.map((column, index) => (
                  <TableHead key={index} className="px-2 py-3 text-sm">
                    {column.header}
                  </TableHead>
                ))}
                <TableHead className="px-2 py-3 text-sm">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row._id}
                  className="hover:bg-neutral-900 transition-colors"
                >
                  {columns.map((column, index) => (
                    <TableCell
                      key={index}
                      className="px-2 py-2 text-sm"
                    >
                      {row[column.accessorKey]}
                    </TableCell>
                  ))}
                  <TableCell className="flex gap-2 px-2 py-2">
                    <Button
                      size="sm"
                      className="bg-blue-800 hover:bg-blue-700 text-white"
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
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-3">
          {data.map((row) => (
            <div
              key={row._id}
              className="bg-neutral-900 rounded-lg p-4 border border-neutral-700"
            >
              <div className="space-y-2">
                {columns.map((column, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <span className="text-neutral-400 text-sm font-medium min-w-[80px]">
                      {column.header}:
                    </span>
                    <span className="text-white text-sm text-right flex-1 break-words">
                      {row[column.accessorKey]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-4 pt-3 border-t border-neutral-700">
                <Button
                  size="sm"
                  className="bg-blue-800 hover:bg-blue-700 text-white flex-1"
                  onClick={() => setEditUser(row)}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  className="flex-1"
                  onClick={() => setDeleteUser(row)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-3">
          <Button
            disabled={currentPage === 1}
            onClick={() => fetchUsers(currentPage - 1)}
            className="bg-neutral-800 text-white disabled:opacity-40 w-full sm:w-auto"
          >
            Previous
          </Button>
          <span className="text-sm text-white text-center">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            disabled={currentPage === totalPages}
            onClick={() => fetchUsers(currentPage + 1)}
            className="bg-neutral-800 text-white disabled:opacity-40 w-full sm:w-auto"
          >
            Next
          </Button>
        </div>
      </div>

      {/* Edit Modal */}
      <Dialog open={!!editUser} onOpenChange={() => setEditUser(null)}>
        <DialogContent className="!bg-black !text-white !border-neutral-800 max-w-md mx-4">
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
                className="bg-neutral-900 text-white border border-neutral-700"
              />
              <Input
                name="email"
                value={editUser.email}
                onChange={handleEditChange}
                placeholder="Email"
                className="bg-neutral-900 text-white border border-neutral-700"
              />
              <Input
                name="role"
                value={editUser.role}
                onChange={handleEditChange}
                placeholder="Role"
                className="bg-neutral-900 text-white border border-neutral-700"
              />
              <Button type="submit" className="bg-blue-800 hover:bg-blue-700">
                Save
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Modal */}
      <Dialog open={!!deleteUser} onOpenChange={() => setDeleteUser(null)}>
        <DialogContent className="!bg-black !text-white !border-neutral-800 max-w-md mx-4">
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
          </DialogHeader>
          <div className="text-white mt-2">
            Are you sure you want to delete{" "}
            <strong>{deleteUser?.name}</strong>?
          </div>
          <div className="flex gap-3 mt-4">
            <Button variant="destructive" onClick={handleDeleteConfirm} className="flex-1">
              Delete
            </Button>
            <Button
              variant="outline"
              onClick={() => setDeleteUser(null)}
              className="bg-neutral-800 text-white hover:bg-neutral-700 flex-1"
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
