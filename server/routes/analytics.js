// routes/analyticsRoutes.js
import express from "express";
import { verifyToken, requireAdmin } from "../middleware/auth.js";

const router = express.Router();

/**
 * @route GET /api/analytics/inventory-utilization
 * @desc Get Ad Inventory Utilization Data
 */
router.get("/inventory-utilization", verifyToken, requireAdmin, async (req, res) => {
  try {
    const chartData = {
      labels: ["OOH", "Digital", "Influencer", "Radio", "TV"],
      datasets: [
        {
          label: "Utilization (%)",
          data: [78, 55, 90, 40, 65],
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

/**
 * @route GET /api/analytics/campaign-engagement
 * @desc Get Campaign Reach & Engagement Data
 */
router.get("/campaign-engagement", verifyToken, requireAdmin, async (req, res) => {
  try {
    const chartData = {
      labels: ["Campaign A", "Campaign B", "Campaign C", "Campaign D"],
      datasets: [
        {
          label: "Impressions",
          data: [12000, 8500, 15400, 9900],
          backgroundColor: "#3B82F6",
        },
        {
          label: "Clicks",
          data: [1800, 1200, 2100, 950],
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

/**
 * @route GET /api/analytics/channel-roi
 * @desc Get ROI by Channel
 */
router.get("/channel-roi", verifyToken, requireAdmin, async (req, res) => {
  try {
    const chartData = {
      labels: ["Google Ads", "Facebook", "OOH", "Influencer", "Email"],
      datasets: [
        {
          label: "ROI (₹ earned per ₹ spent)",
          data: [4.2, 3.5, 2.1, 5.8, 3.0],
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

/**
 * @route GET /api/analytics/viewability-fraud
 * @desc Get Viewability & Fraud Metrics
 */
router.get("/viewability-fraud", verifyToken, requireAdmin, async (req, res) => {
  try {
    const chartData = {
      labels: ["Viewable Impressions", "Non-Viewable", "Fraudulent Clicks"],
      datasets: [
        {
          label: "Ad Quality Metrics",
          data: [85, 10, 5],
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

export default router;
