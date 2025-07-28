
// src/components/Navbar.jsx
import DarkModeToggle from './DarkModeToggle';

export default function Navbar() {
  return (
    <div className="w-full bg-gray-900 text-white p-4 flex justify-between items-center shadow">
      <h2 className="text-lg font-semibold">Welcome Back 👋</h2>
      <DarkModeToggle />
    </div>
  );
}
