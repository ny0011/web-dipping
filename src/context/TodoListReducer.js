// Reducer : 데이터를 안전하게 조작하기 위한 구조

// initial state : 초기 상태
export const initialState = [];

const saveItems = (newItems) => {
  localStorage.setItem("data", JSON.stringify(newItems));
}

// state : 상태, 데이터
// ex) 할 일 : { id: 1, text: "놀기", done: false },
// action : 상태를 ~~게 바꿈
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const nextState = state.concat(action.payload);
      saveItems(nextState);
      return nextState;
    }
    case "DELETE": {
      const nextState = state.filter((item) => item.id !== action.payload.id);
      saveItems(nextState);
      return nextState;
    }
    case "DONE": {
      const nextState = state.map((item) =>
        item.id === action.payload.id ? { ...item, done: !item.done } : item
      );
      saveItems(nextState);
      return nextState;
    }
    case "SAVE": {
      const nextState = [...action.payload];
      saveItems(nextState);
      return nextState;
    }
    default:
      return state;
  }
};

export default reducer;
