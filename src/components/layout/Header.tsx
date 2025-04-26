// src/components/layout/Header.tsx
import React, { useState } from "react";
import { Menu, Settings, X } from "lucide-react";

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeNav, setActiveNav] = useState<string>("Home");

  const navItems = [
    "Home",
    "Stages & Checklist",
    "Upload Docs",
    "Preferred Vendors",
    "Tech Stacks",
    "Targets",
  ];

  return (
    <div className="sticky top-0 z-10">
      <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4">
        {/* Mobile menu button */}
        <div className="lg:hidden">
          {!visible ? (
            <button
              className="p-2"
              aria-label="Open menu"
              onClick={() => setVisible(true)}
            >
              <Menu size={25} />
            </button>
          ) : (
            <button
              className="p-2 text-2xl font-bold"
              aria-label="Close menu"
              onClick={() => setVisible(false)}
            >
              <X size={25} />
            </button>
          )}
        </div>

        <div className="flex items-center space-x-4 ml-auto">
          {/* Settings button */}
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Settings size={20} className="text-gray-600" />
          </button>

          {/* User profile */}
          <div className="flex items-center">
            <img
              src="/img3.svg"
              alt="User profile"
              className="w-10 h-10 rounded-full object-cover border border-gray-200"
            />
          </div>
        </div>
      </header>

      {visible && (
        <div className="bg-white lg:hidden md:hidden p-4 shadow-md">
          <div className="bg-white">
            <nav className="flex flex-col items-center justify-center space-y-2">
              {navItems.map((item) => (
                <span
                  key={item}
                  onClick={() => setActiveNav(item)}
                  className={`text-gray-700 hover:text-black cursor-pointer px-3 py-1 ${
                    activeNav === item
                      ? "rounded-md bg-gray-100 font-medium"
                      : ""
                  }`}
                >
                  {item}
                </span>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
