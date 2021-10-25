// Reducer : 데이터를 안전하게 조작하기 위한 구조

// initial state : 초기 상태
const initialState = [];

// state : 상태, 데이터
// ex) 할 일 : { id: 1, text: "놀기", done: false },
// action : 상태를 ~~게 바꿈
const reducer = (state, action) => {
  let newArray = [];
  switch (action.type) {
    case "add":
      const newItem = action.payload;
      const newId = state.at(-1) === undefined ? 0 : state.at(-1).id + 1;
      newArray = [...state, { id: newId, ...newItem }];
      sessionStorage.setItem("data", JSON.stringify(newArray));
      return newArray;
    case "delete":
      const {
        payload: { id },
      } = action;
      newArray = state.filter((item) => item.id !== id);
      sessionStorage.setItem("data", JSON.stringify(newArray));
      return newArray;
    case "done":
      newArray = state.map((item) =>
        item.id === action.payload.id ? { ...item, done: !item.done } : item
      );
      sessionStorage.setItem("data", JSON.stringify(newArray));
      return newArray;
    default:
      return state;
  }
};

export default reducer;
