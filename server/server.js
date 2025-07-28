import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import analyticsRoutes from "./routes/analytics.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

// ✅ CORS Configuration
app.use(
  cors({
    origin: "http://localhost:5173", // 👈 Frontend origin
    credentials: true,               // 👈 Allow cookies / JWT / auth headers
  })
);

// ✅ Body Parser Middleware
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/analytics", analyticsRoutes);

// ✅ Connect to MongoDB and Start Server
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
