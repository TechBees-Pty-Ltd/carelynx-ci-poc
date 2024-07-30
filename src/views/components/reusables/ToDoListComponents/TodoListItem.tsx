import React from 'react';

interface TodoListItemProps {
  item: { id: number; value: string; done: boolean };
  removeItem: (id: number) => void;
  markTodoDone: (id: number) => void;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ item, removeItem, markTodoDone }) => {
  return (
    <li className={`p-2 mb-2 flex justify-between items-center ${item.done ? 'line-through text-red-500' : 'text-black'}`}>
      <span className="font-bold italic">{item.value}</span>
      <div className="flex space-x-5 cursor-pointer">
        <svg onClick={() => markTodoDone(item.id)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="2">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
        <svg onClick={() => removeItem(item.id)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="2">
          <path fillRule="evenodd" d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10 3.636 5.05a1 1 0 011.414-1.414L10 8.586z" clipRule="evenodd" />
        </svg>
      </div>
    </li>
  );
};

export default TodoListItem;
