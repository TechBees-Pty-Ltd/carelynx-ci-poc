import React from 'react';
import { Draggable } from '@hello-pangea/dnd';

interface KanbanCardProps {
  item: {
    id: string;
    task: string;
    assignedTo: string;
    assignee: string;
    priority: string;
    dueDate: string;
    riskScore: string;
    riskProbability: string;
    riskImpact: string;
  };
  index: number;
}

const KanbanCard: React.FC<KanbanCardProps> = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className='bg-white rounded-lg shadow-md p-4 mb-2'
        >
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              <div className='w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full'>
                {item.assignedTo.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className='flex space-x-2'>
              <div className='relative'>
                <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full'>
                  4
                </span>
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
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118.657 14H18a2 2 0 01-2-2V7a2 2 0 00-2-2H8a2 2 0 00-2 2v5a2 2 0 01-2 2H5.343a2.032 2.032 0 01-1.438.595L3 17h5m7 0v1a3 3 0 01-6 0v-1m6 0H9'
                  ></path>
                </svg>
              </div>
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
                  d='M6 6h12M6 12h12m-7 6h7'
                ></path>
              </svg>
            </div>
          </div>
          <div className='mt-2'>
            <h2 className='text-lg font-bold text-gray-900'>{item.assignedTo}</h2>
            <p className='text-gray-600'>{item.task}</p>
          </div>
          <div className='mt-4 grid grid-cols-3 gap-4'>
            <div>
              <div className='text-gray-600'>Assignee</div>
              <div className='font-bold text-gray-900'>{item.assignee}</div>
            </div>
            <div>
              <div className='text-gray-600'>Priority</div>
              <div className='font-bold text-gray-900'>{item.priority}</div>
            </div>
            <div>
              <div className='text-gray-600'>Due Date</div>
              <div className='font-bold text-gray-900'>{item.dueDate}</div>
            </div>
          </div>
          <div className='mt-4'>
            <span className='inline-flex items-center px-3 py-1 rounded-full font-medium bg-green-100 text-green-800'>
              Risk: {item.riskScore}
            </span>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default KanbanCard;
