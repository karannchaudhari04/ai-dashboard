// 1. Import necessary modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// 2. Load environment variables
dotenv.config();

// 3. Initialize express app
const app = express();

// 4. CORS setup to allow frontend connections (local + vercel)
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local frontend
      "https://ai-dashboard-nine-topaz.vercel.app" // deployed frontend
    ],
    credentials: true,
  })
);

// 5. Middleware to parse incoming JSON
app.use(express.json());

// 6. Import & use routes
import authRoutes from "./routes/authRoutes.js";
import analyticsRoutes from "./routes/analytics.js";
import userRoutes from "./routes/userRoutes.js";

app.use("/api/auth", authRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/users", userRoutes);  // ⬅️ Your analytics charts routes must exist here

// 7. Connect to MongoDB and start the server
const PORT = process.env.PORT || 5050;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on port http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection failed:", error.message);
  });

  mongoose.connection.once("open", () => {
  console.log("✅ Connected to MongoDB:", mongoose.connection.name);
});

