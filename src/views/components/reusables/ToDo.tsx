import React, { useState } from 'react';
import TodoList from './ToDoListComponents/ToDoList';
import TodoForm from './ToDoListComponents/TodoForm';

interface TodoItem {
  id: number;
  value: string;
  done: boolean;
}

const Todo: React.FC = ({initialItems}) => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>(initialItems);

  const addItem = (newItemValue: string) => {
    const newItem: TodoItem = {
      id: Date.now(),
      value: newItemValue,
      done: false,
    };
    setTodoItems([newItem, ...todoItems]);
  };

  const removeItem = (id: number) => {
    setTodoItems(todoItems.filter(item => item.id !== id));
  };

  const markTodoDone = (id: number) => {
    setTodoItems(
      todoItems.map(item =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <div className="max-w-md bg-white text-black rounded-lg">
      <TodoList items={todoItems} removeItem={removeItem} markTodoDone={markTodoDone} />
      <TodoForm addItem={addItem} />
    </div>
  );
};

export default Todo;
