import React from "react";
import StatCard from "./StatCard";
import { TrendingUp } from "lucide-react";

/**
 * Franchisees Onboard component showing number of franchisees
 * and their stages in the onboarding process
 */
const FranchiseesOnboard = () => {
  // Onboarding stages data with counts
  const stages = [
    { name: "Stage 1 (Initial Inquiry)", count: 2, color: "blue" },
    { name: "Stage 2 (Document Submission)", count: 7, color: "lightBlue" },
    { name: "Stage 3 (Training)", count: 5, color: "secondary" },
  ];

  // User avatars
  const avatars = [
    "/img2.svg",
    "/img5.svg",
    "/img6.svg",
    "/img7.svg",
    "/img9.svg",
  ];

  return (
    <StatCard title="Total Franchisees Onboard">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-4xl font-bold mr-4">14</div>
          <div className="flex items-center bg-transparent border-2 border-green-700 text-green-700 font-bold px-1 py-1 rounded-full text-sm">
            <TrendingUp size={20} className="mr-1" />
            <span>7.4%</span>
          </div>
        </div>
        <div className="flex items-center mt-2">
          <div className="flex -space-x-4 overflow-hidden">
            {avatars.map((avatar, idx) => (
              <img
                key={idx}
                src={avatar}
                alt={`User ${idx + 1}`}
                className="inline-block h-8 w-8 rounded-full"
              />
            ))}
          </div>
          <div className="flex items-center justify-center w-8 h-8 -ml-3 rounded-full bg-gray-200 text-xs font-medium text-gray-600">
            +7
          </div>
        </div>
      </div>
      {/* <Image src="/border.svg" alt="Border" /> */}
      <div className="items-center justify-center ">
        <img src="/border.svg" alt="Border" className="w-full mt-3 mb-3" />
      </div>
      {/* Progress bars for each stage */}
      <div className="space-y-4 mt-4">
        {stages.map((stage, idx) => {
          // Define an array of blue shades
          const blueShades = [
            "bg-[#1f7eaa]", // Stage 1
            "bg-[#2fbdff]", // Stage 2
            "bg-[#97deff]", // Stage 3
          ];
          return (
            <div key={idx}>
              <div className="flex justify-between text-sm mb-1 text-[#475467] font-medium">
                <div className="flex flex-row justify-center items-center space-x-3">
                  <div
                    className={`rounded-full ${blueShades[idx]} w-2 h-2`}
                  ></div>
                  <span className="text-[14px]">{stage.name}</span>
                </div>
                <span className="font-medium text-black text-base">
                  {String(stage.count).padStart(2, "0")}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </StatCard>
  );
};

export default FranchiseesOnboard;
