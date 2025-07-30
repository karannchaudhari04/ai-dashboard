// routes/analyticsRoutes.js
import express from "express";
import { verifyToken, requireAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// Utility to generate random numbers in a range
const random = (min, max) => parseFloat((Math.random() * (max - min) + min).toFixed(2));

// 1. Inventory Utilization
router.get("/inventory-utilization", verifyToken, requireAdmin, async (req, res) => {
  try {
    const chartData = {
      labels: ["OOH", "Digital", "Influencer", "Radio", "TV"],
      datasets: [
        {
          label: "Utilization (%)",
          data: [random(50, 100), random(40, 80), random(60, 100), random(30, 70), random(40, 90)],
          backgroundColor: ["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#6366F1"],
        },
      ],
    };
    res.status(200).json({ chartData, options: {} });
  } catch (error) {
    console.error("Inventory Utilization Error:", error.message);
    res.status(500).json({ error: "Failed to fetch inventory utilization data" });
  }
});

// 2. Campaign Engagement
router.get("/campaign-engagement", verifyToken, requireAdmin, async (req, res) => {
  try {
    const chartData = {
      labels: ["Campaign A", "Campaign B", "Campaign C", "Campaign D"],
      datasets: [
        {
          label: "Impressions",
          data: [random(8000, 16000), random(7000, 15000), random(9000, 17000), random(6000, 14000)],
          backgroundColor: "#3B82F6",
        },
        {
          label: "Clicks",
          data: [random(1000, 2500), random(800, 2000), random(1200, 3000), random(700, 1800)],
          backgroundColor: "#10B981",
        },
      ],
    };
    res.status(200).json({ chartData, options: {} });
  } catch (error) {
    console.error("Campaign Engagement Error:", error.message);
    res.status(500).json({ error: "Failed to fetch campaign engagement data" });
  }
});

// 3. Channel ROI
router.get("/channel-roi", verifyToken, requireAdmin, async (req, res) => {
  try {
    const chartData = {
      labels: ["Google Ads", "Facebook", "OOH", "Influencer", "Email"],
      datasets: [
        {
          label: "ROI (₹ earned per ₹ spent)",
          data: [random(2, 6), random(2, 6), random(1, 4), random(3, 7), random(2, 5)],
          backgroundColor: ["#F97316", "#0EA5E9", "#10B981", "#6366F1", "#EF4444"],
        },
      ],
    };
    res.status(200).json({ chartData, options: {} });
  } catch (error) {
    console.error("Channel ROI Error:", error.message);
    res.status(500).json({ error: "Failed to fetch ROI data" });
  }
});

// 4. Viewability & Fraud Metrics
router.get("/viewability-fraud", verifyToken, requireAdmin, async (req, res) => {
  try {
    const viewable = random(70, 90);
    const nonViewable = random(5, 20);
    const fraudulent = 100 - viewable - nonViewable;

    const chartData = {
      labels: ["Viewable Impressions", "Non-Viewable", "Fraudulent Clicks"],
      datasets: [
        {
          label: "Ad Quality Metrics",
          data: [viewable, nonViewable, fraudulent],
          backgroundColor: ["#10B981", "#FBBF24", "#EF4444"],
        },
      ],
    };
    res.status(200).json({ chartData, options: {} });
  } catch (error) {
    console.error("Viewability/Fraud Error:", error.message);
    res.status(500).json({ error: "Failed to fetch viewability/fraud data" });
  }
});

// 5. Active Users by Region
router.get("/active-users-regions", verifyToken, requireAdmin, async (req, res) => {
  try {
    const chartData = {
      labels: [
        "United States",
        "India",
        "China",
        "Japan",
        "United Kingdom",
        "Singapore",
        "Malaysia",
      ],
      datasets: [
        {
          label: "Active Users",
          data: [
            random(3000, 8000),
            random(6000, 12000),
            random(5000, 10000),
            random(2000, 5000),
            random(2500, 5500),
            random(1000, 3000),
            random(1500, 3500),
          ],
          backgroundColor: [
            "#3B82F6",
            "#10B981",
            "#F59E0B",
            "#EF4444",
            "#6366F1",
            "#14B8A6",
            "#8B5CF6",
          ],
        },
      ],
    };

    res.status(200).json({ chartData });
  } catch (error) {
    console.error("Active Users Error:", error.message);
    res.status(500).json({ error: "Failed to fetch active user data" });
  }
});

// 6. Campaign CTR vs Budget
router.get("/campaign-ctr-vs-budget", verifyToken, requireAdmin, async (req, res) => {
  try {
    const chartData = {
      labels: ["Campaign X", "Campaign Y", "Campaign Z"],
      datasets: [
        {
          label: "CTR (%)",
          data: [random(1, 5), random(1, 5), random(1, 5)],
          backgroundColor: "#4F46E5",
        },
        {
          label: "Budget (₹ in thousands)",
          data: [random(100, 300), random(100, 300), random(100, 300)],
          backgroundColor: "#10B981",
        },
      ],
    };
    res
      .status(200)
      .json({ chartData, options: { responsive: true, barPercentage: 0.6 } });
  } catch (error) {
    console.error("CTR vs Budget Error:", error.message);
    res.status(500).json({ error: "Failed to fetch campaign CTR vs budget data" });
  }
});

export default router;
