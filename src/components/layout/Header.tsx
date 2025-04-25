// src/components/layout/Header.tsx
import React from "react";
import { Settings } from "lucide-react";

// interface HeaderProps {
//   toggleSidebar: () => void; // Accept toggleSidebar as a prop
// }

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4 sticky top-0 z-10">
      {/* Mobile menu button */}
      <button className="p-2 lg:hidden" aria-label="Toggle sidebar">
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black mb-1"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </button>

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
  );
};

export default Header;
