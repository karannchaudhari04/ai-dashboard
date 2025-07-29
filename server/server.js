// 1. Import necessary modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// 2. Initialize environment variables
dotenv.config();

// 3. Initialize express app
const app = express();

// 4. Setup CORS middleware (⬇️ ADD THIS HERE)
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://ai-dashboard-nine-topaz.vercel.app"
  ],
  credentials: true,
}));

// 5. Other middlewares
app.use(express.json()); // for parsing JSON

// 6. Your routes
import authRoutes from "./routes/auth.js";
app.use("/api/auth", authRoutes);

// 7. Server start
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
