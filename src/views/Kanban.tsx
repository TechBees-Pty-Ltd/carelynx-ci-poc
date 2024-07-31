import React, { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from '@hello-pangea/dnd';
import { columnsFromBackend } from './KanbanData';
import KanbanCard from './components/KanbanCard';
import Modal from './components/reusables/Modal';
import CiForm from './components/CiForm';
import Notification from './components/reusables/Notification';

interface Candidate {
  id: string;
  task: string;
  assignedTo: string;
  assignee: string;
  Status: string;
  priority: string;
  dueDate: string;
  riskScore: string;
  riskProbability: string;
  riskImpact: string;
}

interface Column {
  title: string;
  items: Candidate[];
}

interface Columns {
  [key: string]: Column;
}

const Kanban: React.FC = () => {
  const [columns, setColumns] = useState<Columns>(columnsFromBackend);
  const [heading, setHeading] = useState('Sample CI Form');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCiId, setSelectedCiId] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const showNotificationHandler = () => {
    setShowNotification(true);
  };

  const handleClose = () => {
    setShowNotification(false);
  };

  const onClose = () => setIsOpen(false);

  const onSave = (ciData: any) => {
    showNotificationHandler();
  };

  const onSelectCard = (ciId: string) => {
    setHeading('CI Details');
    setSelectedCiId(ciId);
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

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
    <DragDropContext onDragEnd={onDragEnd}>
      <button
        onClick={() => setIsOpen(true)}
        type='button'
        className='float-right inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        <svg className='-ml-0.5 h-5 w-5' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
          <path d='M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z' />
        </svg>
        New CI
      </button>
      <Modal
        content={
          <CiForm
            ciId={selectedCiId}
            heading={heading}
            onClose={onClose}
            onSave={onSave}
            showNotificationHandler={showNotificationHandler}
          />
        }
        isOpen={isOpen}
      />
      <div className='flex space-x-4 p-4 w-full'>
        {Object.entries(columns).map(([columnId, column]) => (
          <Droppable key={column.id} droppableId={columnId}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className={`bg-gray-100 rounded-lg p-4 w-1/4 ${snapshot.isDraggingOver ? 'bg-gray-200' : 'bg-gray-100'}`}
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
      {showNotification && (
        <Notification
          message='Successfully NOT saved!'
          description='Hey Genius! 🤓 Chill, this is just a POC! 😎'
          onClose={handleClose}
        />
      )}
    </DragDropContext>
  );
};

export default Kanban;
