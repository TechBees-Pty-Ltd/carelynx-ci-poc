// src/components/KanbanCard.tsx
import React from "react";

interface KanbanCardProps {
  title: string;
  subtitle: string;
}

const KanbanCard: React.FC<KanbanCardProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-purple-100 p-4 rounded-lg shadow-sm">
      <div className="flex items-center mb-2">
        <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
          A
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;
