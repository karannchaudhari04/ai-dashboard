import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/auth/ProtectedRoute"; // path depends on your structure

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
        </Routes>
      </Router>
    </div>
  );
}
