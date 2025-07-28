// middleware/auth.js
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_super_secret_key";

// ✅ Middleware to verify JWT token
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // includes id and role
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid or expired token" });
  }
};

// ✅ Middleware to allow only admins
export const requireAdmin = (req, res, next) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ msg: "Access denied. Admins only." });
  }
  next();
};
