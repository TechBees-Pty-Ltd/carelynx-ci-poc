import React, { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import KanbanCard from './components/KanbanCard';
import { columnsFromBackend } from './KanbanData';

interface Column {
  title: string;
  items: {
    id: string;
    task: string;
    assigned_To: string;
    assignee: string;
    priority: string;
    due_Date: string;
  }[];
}

interface Columns {
  [key: string]: Column;
}

const Kanban: React.FC = () => {
  const [columns, setColumns] = useState<Columns>(columnsFromBackend);

  const onDragEnd = (
    result: DropResult,
    columns: Columns,
    setColumns: React.Dispatch<React.SetStateAction<Columns>>
  ) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }
  };

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
      <div className='flex space-x-4 p-4'>
        {Object.entries(columns).map(([columnId, column], index) => (
          <Droppable key={columnId} droppableId={columnId}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className='bg-gray-100 rounded-lg p-4 w-80'
              >
                <div className='flex justify-between items-center mb-2'>
                  <h2 className='font-bold text-gray-900'>{column.title}</h2>
                  <svg
                    className='w-6 h-6 text-gray-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 10h16M4 14h16M4 18h16'
                    ></path>
                  </svg>
                </div>
                <div className='border-t-2 border-gray-300 mb-2'></div>
                {column.items.map((item, index) => (
                  <KanbanCard key={item.id} item={item} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Kanban;
