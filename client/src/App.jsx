import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/auth/ProtectedRoute"; // path depends on your structure
import { ToastContainer } from "react-toastify";
import Overview from "./pages/Overview"; // Example page, adjust as needed
import Analytics from "./pages/Analytics"; // Example page, adjust as needed
import Users from "./pages/Users"; // Example page, adjust as needed
import Settings from "./pages/Settings"; // Example page, adjust as needed
import Profile from "./pages/Profile"; // Profile page


export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pages/Overview"
            element={
                <Overview />
            }
          />
          <Route
            path="/pages/Analytics"
            element={
                <Analytics />
            }
          />
          <Route
            path="/pages/Users"
            element={
                <Users />
            }
          />
          <Route
            path="/pages/Settings"
            element={
                <Settings />
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}
