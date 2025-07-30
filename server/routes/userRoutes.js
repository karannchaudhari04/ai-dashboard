import express from "express";
import {
  getAllUsers,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { verifyToken, requireAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// GET /api/users — Admin only
router.get("/", verifyToken, requireAdmin, getAllUsers);

// PUT /api/users/:id — Admin only
router.put("/:id", verifyToken, requireAdmin, updateUser);

// DELETE /api/users/:id — Admin only
router.delete("/:id", verifyToken, requireAdmin, deleteUser);

export default router;
