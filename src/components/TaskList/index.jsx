import TaskItem from 'components/TaskItem';
import React from 'react';

const TaskList = props => {
  const { todos, deleteTask } = props;
  return (
    <section>
      {todos.map(task => {
        return <TaskItem key={task.id} {...task} deleteTask={deleteTask} />;
      })}
    </section>
  );
};

export default TaskList;
