import React from "react";
import StatCard from "./StatCard";
import ProgressCircle from "./ProgressCircle";

/**
 * Account Progress component showing completion percentage
 * and completed/remaining steps
 */
const AccountProgress = () => {
  // Completed steps data
  const completedSteps = [
    { name: "Profile Setup", completed: true },
    { name: "Initial Training", completed: true },
    { name: "Legal Documents", completed: true },
  ];

  // Remaining steps data
  const remainingSteps = [
    { name: "Financial Integration", completed: false },
    { name: "Final Review", completed: false },
  ];

  return (
    // <StatCard title={<div className="text-center">Account Progress</div>}>
    <StatCard title="Account Progress">
      <div className="flex flex-col items-center pb-4">
        <ProgressCircle percentage={85} />
      </div>
      <hr />
      {/* Completed Steps */}
      <div className="rounded-lg bg-[#f6f7fb] p-4">
        <h3 className="font-medium text-gray-700 mb-2">Steps Completed</h3>
        <ul className="space-y-2 mt-4">
          {completedSteps.map((step, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex flex-row space-x-3 justify-center items-center">
                <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                <span className="text-gray-700">{step.name}</span>
              </div>
              <span className="w-6 h-6 mr-2 text-white items-center justify-center">
                {/* <CircleCheck size={20} className="bg-green-500 rounded-full" /> */}
                <img src="/tick.svg" alt="tick" className="w-5 h-5" />
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Remaining Steps */}
      <div className="mt-2 bg-[#f6f7fb] p-4 rounded-lg">
        <h3 className="font-medium text-gray-700 mb-2">Steps Remaining</h3>
        <ul className="space-y-2 mt-4">
          {remainingSteps.map((step, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex flex-row space-x-3 justify-center items-center">
                <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                <span className="text-gray-700">{step.name}</span>
              </div>
              <div className="w-6 h-6 mr-2 text-white items-center justify-center opacity-25">
                <img src="/tick.svg" alt="tick" className="w-5 h-5" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StatCard>
  );
};

export default AccountProgress;
