import React, { useState } from 'react';
import TaskForm from 'components/forms/Task';
import TaskList from 'components/TaskList';

const ToDoPage = props => {
  const [todoArray, setTodoArray] = useState([
    {
      id: Date.now(),
      body: 'Выучить SQL',
      isDone: false,
      createdAt: new Date(),
    },
  ]);

  const addTask = values => {
    const newTodo = {
      body: values.todoBody,
      id: Date.now(),
      isDone: false,
    };
    setTodoArray([...todoArray, newTodo]);
  };

  const deleteTask = id => {
    const filteredTodos = todoArray.filter(
      currentTask => currentTask.id !== id
    );
    setTodoArray(filteredTodos);
  };

  return (
    <div>
      <TaskForm onSubmit={addTask} />
      <TaskList todos={todoArray} deleteTask={deleteTask} />
    </div>
  );
};

export default ToDoPage;
