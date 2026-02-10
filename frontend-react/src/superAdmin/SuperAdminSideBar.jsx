import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../state/authentication/Action";

const menu = [
  { title: "Customers", icon: "👥", path: "/customers" },
  { title: "Restaurants", icon: "🏪", path: "/restaurants" },
  { title: "Restaurant Requests", icon: "📝", path: "/restaurant-request" },
  { title: "Logout", icon: "🚪", path: "/" },
];

export default function SuperAdminSidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleNavigate = (item) => {
    if (item.title === "Logout") {
      navigate("/");
      dispatch(logout());
    } else {
      navigate(`/admin${item.path}`);
    }
  };

  const isActive = (path) => {
    return location.pathname === `/admin${path}`;
  };

  return (
    <aside className="sticky top-0 h-screen w-[280px] bg-gradient-to-b from-primary-900 to-primary-800 flex-shrink-0">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-6 border-b border-primary-700">
          <h2 className="font-display text-2xl font-bold text-white">
            Super Admin
          </h2>
          <p className="text-sm text-primary-200 mt-1">Platform Management</p>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
          {menu.map((item, i) => (
            <button
              key={i}
              onClick={() => handleNavigate(item)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg
                         transition-all duration-200 group
                         ${isActive(item.path)
                  ? "bg-white text-primary-700 shadow-lg"
                  : "text-primary-100 hover:bg-primary-700 hover:text-white"
                }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="font-medium">{item.title}</span>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-primary-700">
          <div className="bg-primary-700/50 rounded-lg p-4">
            <p className="text-xs text-primary-200">Foodo Platform</p>
            <p className="text-sm text-white font-semibold mt-1">Super Admin Panel</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
