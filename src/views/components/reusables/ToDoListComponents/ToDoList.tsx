import React from 'react';
import TodoListItem from './TodoListItem';

interface TodoListProps {
  items: { id: number; value: string; done: boolean }[];
  removeItem: (id: number) => void;
  markTodoDone: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, removeItem, markTodoDone }) => {
  return (
    <ul className="list-none p-0">
      {items.map(item => (
        <TodoListItem
          key={item.id}
          item={item}
          removeItem={removeItem}
          markTodoDone={markTodoDone}
        />
      ))}
    </ul>
  );
};

export default TodoList;
