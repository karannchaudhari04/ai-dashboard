// routes/analytics.js
import express from "express";
import { verifyToken, requireAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/session-duration", verifyToken, requireAdmin, async (req, res) => {
  try {
    const chartData = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      datasets: [
        {
          label: "Avg Session Duration (min)",
          data: [30, 45, 25, 60, 40],
          fill: true,
          backgroundColor: "rgba(99, 102, 241, 0.2)",
          borderColor: "#6366f1",
        },
      ],
    };

    res.status(200).json({ chartData, options: {} });
  } catch (err) {
    res.status(500).json({ error: "Failed to load chart data" });
  }
});

export default router;
