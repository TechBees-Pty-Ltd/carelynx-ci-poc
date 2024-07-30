// src/pages/KanbanBoard.tsx
import React from "react";
import KanbanColumn from "../components/KanbanColumn";

const KanbanBoard: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 p-6 bg-gray-50">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex space-x-2">
            <select className="select select-bordered">
              <option>Assigned To: All-time</option>
              <option>...</option>
            </select>
            <select className="select select-bordered">
              <option>Priority: All</option>
              <option>...</option>
            </select>
            <select className="select select-bordered">
              <option>Risk: All</option>
              <option>...</option>
            </select>
            <select className="select select-bordered">
              <option>Timeframe: All-time</option>
              <option>...</option>
            </select>
            <select className="select select-bordered">
              <option>Standard: All</option>
              <option>...</option>
            </select>
            <select className="select select-bordered">
              <option>Policy: All</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <KanbanColumn title="In Review" />
          <KanbanColumn title="Approved" />
          <KanbanColumn title="In Action" />
          <KanbanColumn title="Complete" />
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;
