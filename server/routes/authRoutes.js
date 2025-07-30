import express from "express";
import { signup, login, getProfile } from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// 🆕 Protected profile route
router.get("/profile", verifyToken, getProfile);

export default router;
