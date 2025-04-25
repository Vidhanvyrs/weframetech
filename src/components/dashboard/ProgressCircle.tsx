import React, { useEffect, useState } from "react";

interface ProgressCircleProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  circleColor?: string;
}

/**
 * Circular progress indicator component
 * Animates to show percentage completion
 */
const ProgressCircle: React.FC<ProgressCircleProps> = ({
  percentage,
  size = 200,
  strokeWidth = 20,
  circleColor = "#30a2db",
}) => {
  const [progress, setProgress] = useState(0);

  // Calculate circle properties
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 110) * circumference;

  // Animate progress on component mount
  useEffect(() => {
    // Small delay for animation effect
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 100);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="relative flex items-center justify-center mt-2">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background circle */}
        <circle
          className="progress-circle-bg"
          cx={size / 2}
          cy={size / 2}
          r={radius}
        />

        {/* Progress circle */}
        <circle
          className="progress-circle"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ stroke: circleColor }}
        />
      </svg>

      {/* Percentage text in the middle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-bold">{percentage}%</span>
      </div>
    </div>
  );
};

export default ProgressCircle;
// import React, { useEffect, useState } from "react";
// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// interface ProgressCircleProps {
//   percentage: number; // Accept percentage as a prop
// }

// const ProgressCircle: React.FC<ProgressCircleProps> = ({ percentage }) => {
//   const data = {
//     labels: ["Completed", "Remaining"],
//     datasets: [
//       {
//         data: [percentage, 100 - percentage],
//         backgroundColor: ["#279dd4", "#eaecf0"],
//       },
//     ],
//   };

//   const options = {
//     cutout: "76%", // thickness of the ring
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   return (
//     <div className="relative w-40 h-40">
//       <Doughnut data={data} options={options} />
//       {/* Percentage text in the middle */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <span className="text-3xl font-bold">{percentage}%</span>
//       </div>
//     </div>
//   );
// };

// export default ProgressCircle;
