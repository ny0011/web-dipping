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
      return [...state, newItem];
    case "delete":
      return;
    default:
      return;
  }
};

export default reducer;
