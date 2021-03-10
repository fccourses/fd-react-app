import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = props => {
  const { body, id, isDone, deleteTask } = props;

  const onDelete = () => {
    deleteTask(id);
  };
  return (
    <article>
      {body}
      <button onClick={onDelete}>delete</button>
    </article>
  );
};

TaskItem.propTypes = {
  body: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  deleteTask: PropTypes.func,
  switchTask: PropTypes.func,
};

export default TaskItem;
