import React from "react";
import StatCard from "./StatCard";

/**
 * Prospect Leads component showing potential franchise leads
 */
const ProspectLeads = () => {
  // Prospect data
  const prospects = [
    { name: "Wade Warren", stage: "Initial Inquiry", avatar: "/img10.svg" },
    { name: "Ava Wright", stage: "Initial Inquiry", avatar: "/img4.svg" },
    { name: "Cody Fisher", stage: "Initial Inquiry", avatar: "/img8.svg" },
  ];

  return (
    <StatCard title="Prospect Leads">
      <div className="space-y-3 md:-ml-3">
        {prospects.map((prospect, idx) => (
          <div
            key={idx}
            className="flex w-full md:w-[330px] items-center bg-[#f6f7fb] rounded-lg px-4 justify-between py-2"
          >
            <div className="flex items-center">
              <img
                src={prospect.avatar}
                alt={prospect.name}
                className="w-9 h-9 md:w-7 md:h-7 rounded-full mr-3 object-cover"
              />
              <span className="font-medium md:text-sm md:font-medium">
                {prospect.name}
              </span>
            </div>
            <div className="text-base md:text-sm font-medium text-gray-500">
              Stage: {prospect.stage}
            </div>
          </div>
        ))}
      </div>
    </StatCard>
  );
};

export default ProspectLeads;
