// controllers/analyticsController.js

exports.getSessionDuration = (req, res) => {
  res.json({ averageSessionDuration: '5m 20s' });
};

exports.getPageViews = (req, res) => {
  res.json({
    pages: [
      { page: 'Home', views: 350 },
      { page: 'Dashboard', views: 200 },
      { page: 'Settings', views: 75 },
    ],
  });
};

exports.getUserCount = (req, res) => {
  res.json({ totalUsers: 1245, activeUsers: 875 });
};

exports.getTrafficSources = (req, res) => {
  res.json({
    sources: [
      { source: 'Google', count: 420 },
      { source: 'Direct', count: 300 },
      { source: 'Social Media', count: 180 },
    ],
  });
};
