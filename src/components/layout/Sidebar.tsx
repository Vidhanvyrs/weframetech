import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Upload,
  Settings,
  ListCheck,
  User,
  LogOut,
  ArrowLeft,
} from "lucide-react";

/**
 * Sidebar component for navigation and branding
 */
const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Navigation items with icons and links
  const navItems = [
    {
      icon: <Home size={20} />,
      label: "Home",
      path: "/",
      active: activeIndex === 0,
    },
    {
      icon: <ListCheck size={20} />,
      label: "Stages & Checklist",
      path: "/",
      active: activeIndex === 1,
    },
    {
      icon: <Upload size={20} />,
      label: "Upload Docs",
      path: "/",
      active: activeIndex === 2,
    },
    {
      icon: <User size={20} />,
      label: "Preferred Vendors",
      path: "/",
      active: activeIndex === 3,
    },
    {
      icon: <Settings size={20} />,
      label: "Tech Stack",
      path: "/",
      active: activeIndex === 4,
    },
  ];

  // Additional navigation links
  const secondaryNavItems = [
    { label: "Targets", path: "/", active: activeIndex === 5 },
    {
      label: "Zee Sales Targets",
      path: "/",
      active: activeIndex === 6,
    },
    { label: "MAI Settings", path: "/", active: activeIndex === 7 },
    {
      label: "Pending Questions",
      path: "/",
      badge: "3",
      active: activeIndex === 8,
    },
  ];

  return (
    <aside
      className={
        "md:flex lg:flex bg-[#175d7d] text-white w-64 min-h-screen flex-col fixed left-0 top-0 z-10 md:relative md:translate-x-0 transition-transform duration-300 ease-in-out"
      }
    >
      {/* Back button for mobile */}
      <button className="absolute right-4 top-5 text-white hover:text-gray-300 transition-colors">
        <ArrowLeft size={24} />
      </button>

      {/* Logo area */}
      <div className="p-4 border-b border-white/10">
        <h1 className="text-xl font-bold">Franchise Portal</h1>
      </div>

      {/* Primary Navigation */}
      <nav className="flex-grow py-4">
        <ul>
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center px-6 py-3 hover:bg-dashboard-sidebarHover transition-colors duration-150 ${
                  item.active && idx === activeIndex
                    ? "bg-[#456e82] text-[#2fbbfd]"
                    : "text-[#95b3c0]"
                }`}
              >
                {/* <span className="mr-3">{item.icon}</span> */}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Divider */}
        {/* <div className="my-2 border-b border-white/10"></div> */}

        {/* Secondary Navigation */}
        <ul>
          {secondaryNavItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                onClick={() => setActiveIndex(idx + 5)}
                className={`flex items-center justify-between ${
                  item.active && idx + 5 === activeIndex
                    ? "bg-[#456e82] text-[#2fbbfd]"
                    : "text-[#95b3c0]"
                } px-6 py-3 hover:bg-dashboard-sidebarHover transition-colors duration-150`}
              >
                <span className="text-[#95b3c0]">{item.label}</span>
                {item.badge && (
                  <span className="bg-[#c2e2f1] text-dashboard-sidebar rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium">
                    {item.badge}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4">
        <Link
          to="/logout"
          className="flex items-center text-[#95b3c0] hover:text-white transition-colors duration-150"
        >
          <LogOut size={18} className="mr-2" />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
