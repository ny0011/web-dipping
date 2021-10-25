// Reducer : 데이터를 안전하게 조작하기 위한 구조

// initial state : 초기 상태
const initialState = [];

// state : 상태, 데이터
// ex) 할 일 : { id: 1, text: "놀기", done: false },
// action : 상태를 ~~게 바꿈
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      const newItem = action.payload;
      const newId = state.at(-1) === undefined ? 0 : state.at(-1).id + 1;
      return [...state, { id: newId, ...newItem }];
    case "delete":
      const {
        payload: { id },
      } = action;
      return state.filter((item) => item.id !== id);
    case "done":
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, done: !item.done } : item
      );
    default:
      return state;
  }
};

export default reducer;
