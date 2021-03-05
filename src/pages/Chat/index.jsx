import React, { useReducer, useEffect } from 'react';
import reducer from './reducer';

const Chat = props => {
  const [state, dispatch] = useReducer(reducer, {
    messages: [],
    users: [],
  });

  useEffect(() => {
    fetch('/chat.json')
      .then(res => res.json())
      .then(data =>
        dispatch({
          data,
          type: 'DATA_LOAD_SUCCESS',
        })
      );
  }, []);

  return (
    <div>
      {state.messages.map(m => (
        <li key={m.id}>{JSON.stringify(m, null, 4)}</li>
      ))}
    </div>
  );
};

export default Chat;
