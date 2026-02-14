import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../state/authentication/Action";

const menu = [
  { title: "Home", icon: "🏠", path: "/" },
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
    } else if (item.title === "Home") {
      navigate("/");
    } else {
      navigate(`/super-admin${item.path}`);
    }
  };

  const isActive = (path) => {
    return location.pathname === `/super-admin${path}`;
  };

  return (
    <aside
      className={`fixed lg:sticky top-0 left-0 z-50 h-screen
                w-[280px] bg-neutral-900 border-r border-neutral-800
                flex-shrink-0`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-6 border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-white tracking-wide">
                Super Admin
              </h2>
              <p className="text-xs text-neutral-500">Platform Management</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto px-3 py-6 space-y-1">
          {menu.map((item, i) => (
            <button
              key={i}
              onClick={() => handleNavigate(item)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl
                         transition-all duration-200 group
                         ${isActive(item.path)
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-900/20"
                  : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
                }`}
            >
              <span className={`${isActive(item.path) ? "text-white" : "text-neutral-500 group-hover:text-white"} transition-colors text-2xl`}>
                {item.icon}
              </span>
              <span className="font-medium text-sm">{item.title}</span>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-800">
          <div className="bg-neutral-800/50 rounded-xl p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-bold text-neutral-300">
              SA
            </div>
            <div>
              <p className="text-sm text-white font-semibold">Super User</p>
              <p className="text-xs text-neutral-500">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
