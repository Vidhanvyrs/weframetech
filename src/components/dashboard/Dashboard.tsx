import React from "react";
import AccountProgress from "./AccountProgress";
import FranchiseesOnboard from "./FranchiseesOnboard";
import KeyInsights from "./KeyInsights";
import FinancialWellbeing from "./FinancialWellbeing";
import ProspectLeads from "./ProspectLeads";
import PendingQuestions from "./PendingQuestions";
import AIChat from "./AIChat";

const Dashboard = () => {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4">
        {/* Account Progress */}
        <div className="h-full lg:col-span-1">
          <AccountProgress />
        </div>

        {/* Combined Section for Franchisees Onboard, Key Insights, Financial Wellbeing, and Prospect Leads */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-full">
            <FranchiseesOnboard />
          </div>
          <div className="h-full">
            <KeyInsights />
          </div>
          <div className="h-full">
            <FinancialWellbeing />
          </div>
          <div className="h-full">
            <ProspectLeads />
          </div>
        </div>

        {/* Combined Section for Pending Questions and AI Chat */}
        <div className="border border-[#d7dfe9] h-full lg:col-span-3 grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-1">
            <PendingQuestions />
          </div>
          <div className="md:col-span-2">
            <AIChat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
