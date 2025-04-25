import React from "react";
import StatCard from "./StatCard";
import { CirclePercent } from "lucide-react";

/**
 * Key Insights component showing sales growth and feedback
 */
const KeyInsights = () => {
  // Feedback data
  const feedback = [
    "Franchisees are requesting more detailed training materials.",
  ];

  return (
    <StatCard title="Key Insights & Feedback">
      {/* Sales Growth */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="text-3xl font-bold">10%</div>
          <div className="text-medium font-semibold text-gray-500">
            Sales Growth
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-2 rounded-full mb-1">
            <img src="/img1.svg" alt="top-performer" className="w-10 h-10" />
          </div>
          <div className="bg-[#ebf9ff] text-[#279dd4] border border-[#bae9ff] px-3 py-1 rounded-full text-sm">
            Top Performer
          </div>
        </div>
      </div>
      <hr />
      {/* Feedback Section */}
      <div className="mt-4 bg-[#f6f7fb] p-4 rounded-lg">
        <h3 className="font-medium mb-2">Feedback</h3>
        <ul className="space-y-2">
          {feedback.map((item, idx) => (
            <li key={idx} className="flex items-start justify-center">
              <span className="mr-2 mt-2 w-2 h-2 rounded-full bg-[#d9d9d9] flex-shrink-0"></span>
              <span className="text-sm font-medium text-[#455468]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </StatCard>
  );
};

export default KeyInsights;
