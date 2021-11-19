// Reducer : 데이터를 안전하게 조작하기 위한 구조

const saveItems = (newItems) => {
  localStorage.setItem("data", JSON.stringify(newItems));
};

// state : 상태, 데이터
// action : 상태를 ~~게 바꿈
/*
state =
{
  uid: user의 id,
  date: yyyymmdd,
  todos : [{ id: 1, text: "놀기", done: false },{ id: 2, text: "먹기", done: true }]
}
*/

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const newTodos = state.todos.concat(action.payload);
      const nextState = { ...state, todos: newTodos };
      saveItems(nextState);
      return nextState;
    }
    case "DELETE": {
      const newTodos = state.todos.filter(
        (item) => item.id !== action.payload.id
      );
      const nextState = { ...state, todos: newTodos };
      saveItems(nextState);
      return nextState;
    }
    case "DONE": {
      const newTodos = state.todos.map((item) =>
        item.id === action.payload.id ? { ...item, done: !item.done } : item
      );
      const nextState = { ...state, todos: newTodos };
      saveItems(nextState);
      return nextState;
    }
    case "SAVE": {
      const nextState = { ...action.payload };
      console.log(nextState);
      saveItems(nextState);
      return nextState;
    }
    default:
      return state;
  }
};

export default reducer;
