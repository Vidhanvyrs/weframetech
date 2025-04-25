import React from "react";
import StatCard from "./StatCard";
import { TrendingUp } from "lucide-react";

/**
 * Financial Wellbeing component showing financial metrics
 */
const FinancialWellbeing = () => {
  return (
    <StatCard title="Financial Wellbeing">
      <div className="flex justify-between items-baseline">
        <div className="space-y-1">
          <div className="text-3xl font-bold">20</div>
          <div className="text-medium text-[#475467] font-medium">
            Total Franchisees
          </div>
        </div>
        <div className="flex items-center bg-transparent border-2 border-green-700 text-green-700 font-bold px-2 py-1 rounded-full text-sm">
          <TrendingUp size={20} className="mr-1" />
          <span>2.1%</span>
        </div>
      </div>
      <hr />
      {/* Financial Metrics */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center">
          <div className="text-lg text-gray-500 mb-1">Target</div>
          <div className="text-2xl font-bold">$500,000</div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center">
          <div className="text-lg text-gray-500 mb-1">Current</div>
          <div className="text-2xl font-bold">$450,000</div>
        </div>
      </div>
    </StatCard>
  );
};

export default FinancialWellbeing;
