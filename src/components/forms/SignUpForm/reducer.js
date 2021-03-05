/* 
  ЧИСТАЯ функция, принимает прошлое состояние и action.
  Возвращает новое состояние.
*/
const reducer = (state, action) => {
  const { name, value } = action;

  /* Update */
  const newState = {
    ...state,
    [name]: value,
  };

  return newState;
};

export default reducer;
