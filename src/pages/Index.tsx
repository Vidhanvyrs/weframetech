import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Dashboard from "@/components/dashboard/Dashboard";

/**
 * Main Index page of the application
 * Contains the layout structure with sidebar, header and main content
 */
const Index = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      <div className="flex" />

      {/* Sidebar component */}
      <div
        className={`
        lg:relative fixed inset-y-0 left-0 z-30 
        transform lg:block md:block hidden
        lg:translate-x-0 transition-transform duration-300 ease-in-out
      `}
      >
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />

        {/* Scrollable content area */}
        <main className="flex-1 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default Index;
