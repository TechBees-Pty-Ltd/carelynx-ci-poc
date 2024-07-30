// src/components/KanbanColumn.tsx
import React from "react";
import KanbanCard from "./KanbanCard";

interface KanbanColumnProps {
  title: string;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ title }) => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-md min-h-[600px]">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="flex-1 space-y-4">
        <KanbanCard title="Title" subtitle="Subtitle" />
        <KanbanCard title="Header" subtitle="Subhead" />
        <KanbanCard title="Header" subtitle="Subhead" />
      </div>
    </div>
  );
};

export default KanbanColumn;
