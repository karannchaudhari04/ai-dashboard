// routes/analyticsRoutes.js
import express from "express";
import { verifyToken, requireAdmin } from "../middleware/authMiddleware.js";

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

/**
 * @route GET /api/analytics/active-user-regions
 * @desc Get Active User Distribution by Region
 */
// GET /analytics/active-users
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
        "Malaysia"
      ],
      datasets: [
        {
          label: "Active Users",
          data: [5400, 8200, 7300, 3200, 4100, 1800, 2500], // Simulated values
          backgroundColor: [
            "#3B82F6", // US
            "#10B981", // India
            "#F59E0B", // China
            "#EF4444", // Japan
            "#6366F1", // UK
            "#14B8A6", // Singapore
            "#8B5CF6"  // Malaysia
          ]
        }
      ]
    };

    res.status(200).json({ chartData });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch active user data" });
  }
});

/**
 * @route GET /api/analytics/campaign-ctr-vs-budget
 * @desc Get Campaign CTR vs Budget
 */
router.get("/campaign-ctr-vs-budget", verifyToken, requireAdmin, async (req, res) => {
  try {
    const chartData = {
      labels: ["Campaign X", "Campaign Y", "Campaign Z"],
      datasets: [
        {
          label: "CTR (%)",
          data: [2.4, 3.1, 1.8],
          backgroundColor: "#4F46E5",
        },
        {
          label: "Budget (₹ in thousands)",
          data: [150, 200, 100],
          backgroundColor: "#10B981",
        },
      ],
    };
    res.status(200).json({ chartData, options: { responsive: true, barPercentage: 0.6 } });
  } catch (error) {
    console.error("CTR vs Budget Error:", error.message);
    res.status(500).json({ error: "Failed to fetch campaign CTR vs budget data" });
  }
});

export default router;