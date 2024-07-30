import React, { useState } from 'react';

interface TodoFormProps {
  addItem: (newItemValue: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addItem }) => {
  const [newItemValue, setNewItemValue] = useState('');

  const handleSubmit = () => {
    if (newItemValue.trim() !== '') {
      addItem(newItemValue);
      setNewItemValue('');
    }
  };

  return (
    <form className="flex mb-4">
      <input
        type="text"
        value={newItemValue}
        onChange={(e) => setNewItemValue(e.target.value)}
        placeholder="Add a new item ..."
        className="flex-1 p-2 rounded-l-lg border border-gray-300 bg-white text-black leading-6"
      />
      <button onClick={handleSubmit} type="button" className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg">Add</button>
    </form>
  );
};

export default TodoForm;
