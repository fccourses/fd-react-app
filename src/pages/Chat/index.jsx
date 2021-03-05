import React, { useReducer, useEffect } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'DATA_LOAD_SUCCESS': {
      const {
        data: { users, messages },
      } = action;

      const usersMap = new Map();

      users.forEach(user => {
        usersMap.set(user.id, user);
      });

      const messagesWithAuthors = messages.map(msg => {
        const msgWithAuthor = {
          ...msg,
          author: usersMap.get(msg.authorId),
        };

        return msgWithAuthor;
      });

      return {
        ...state,
        messages: messagesWithAuthors,
        users: usersMap,
      };
    }
    default:
      return state;
  }
};

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
