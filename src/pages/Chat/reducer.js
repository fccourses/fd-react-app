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

export default reducer;
