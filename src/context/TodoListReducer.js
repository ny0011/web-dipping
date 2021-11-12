// Reducer : 데이터를 안전하게 조작하기 위한 구조

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "@firebase/firestore";
import { db } from "server/fbase";

const COLLECTION = "todos";

// fbase에서 저장된 todos 가져오기
export const getTodos = async () => {
  const q = query(collection(db, COLLECTION), orderBy("createdAt", "desc"));
  await getDocs(q, (snapshot) => {
    console.log(snapshot.docs);
    const todoArray = snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));

    return todoArray;
  });
};

// initial state : 초기 상태
export const initialState = [];

// state : 상태, 데이터
// ex) 할 일 : { id: 1, text: "놀기", done: false },
// action : 상태를 ~~게 바꿈
const reducer = async (state, action) => {
  switch (action.type) {
    case "ADD": {
      const nextState = state.concat(action.payload);
      await updateDoc(doc(db, `${COLLECTION}/${action.payload.id}`, nextState));
      return nextState;
    }
    case "DELETE": {
      const nextState = state.filter((item) => item.id !== action.payload.id);
      await deleteDoc(doc(db, `${COLLECTION}/${action.payload.id}`));
      return nextState;
    }
    case "DONE": {
      const nextState = state.map((item) =>
        item.id === action.payload.id ? { ...item, done: !item.done } : item
      );
      await updateDoc(doc(db, `${COLLECTION}/${action.payload.id}`, nextState));
      return nextState;
    }
    case "CLEAR": {
      const nextState = initialState;
      await updateDoc(doc(db, `${COLLECTION}/${action.payload.id}`, nextState));
      return nextState;
    }
    default:
      return state;
  }
};

export default reducer;
