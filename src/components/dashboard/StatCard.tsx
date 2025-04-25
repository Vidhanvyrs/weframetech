import React from "react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <Card
      className={`p-4 md:p-6 h-full shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
    >
      <h2 className="text-lg font-semibold mb-4 text-[#202020]">{title}</h2>
      <div className="flex flex-col space-y-3">{children}</div>
    </Card>
  );
};

export default StatCard;
