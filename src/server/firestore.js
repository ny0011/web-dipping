import {
  collection,
  doc,
  onSnapshot,
  query,
  writeBatch,
} from "@firebase/firestore";
import { db } from "server/fbase";

const createTodayString = () => {
  const today = new Date();
  return today
    .toLocaleDateString("ko-KR")
    .replace(/\./g, "")
    .split(" ")
    .join("");
};

const createTodosDateLink = (uid) => {
  return `todos/${uid}/${createTodayString()}`;
};

export const initialState = (uid) => {
  return { uid, date: createTodayString(), todos: [] };
};

/* 저장된 todos 가져오기
localStorage의 data확인
if data가 있음 && 오늘 날짜 && uid 같음
-> localStorage 사용
else 
-> firestore 데이터로 localStorage 덮어쓰기

*/
export const getTodos = (dispatch, userObj, nextId) => {
  const localData = JSON.parse(localStorage.getItem("data")) || {};
  console.log(localData);
  if (
    localData.length !== 0 &&
    localData.uid === userObj.uid &&
    localData.date === createTodayString()
  ) {
    dispatch({ type: "SAVE", payload: localData });
    nextId.current =
      localData.todos.length === 0 ? 1 : localData.todos.at(-1).id + 1;
  } else {
    try {
      const q = query(collection(db, createTodosDateLink(userObj.uid)));
      onSnapshot(q, (snapshot) => {
        const todos =
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: parseInt(doc.id),
          })) || [];
        dispatch({
          type: "SAVE",
          payload: { uid: userObj.uid, date: createTodayString(), todos },
        });
        nextId.current = todos.length === 0 ? 1 : todos.at(-1).id + 1;
      });
    } catch (error) {
      console.log(error);
    }
  }
};

//export const deleteTodo = async (creatorId, id) => await deleteDoc(doc(db, `${creatorId}/${id}`));
export const saveTodo = async (dispatch, userObj, data) => {
  const batch = writeBatch(db);
  let newTodos = [];
  for (let i = 0; i < data.todos.length; i++) {
    const newId = i + 1;
    const idString = String(newId);
    const newTodo = { ...data.todos[i], id: newId };

    const todoRef = doc(db, createTodosDateLink(userObj.uid), idString);
    newTodos.push(newTodo);
    console.log(newTodos, newTodo);
    batch.set(todoRef, newTodo);
  }
  console.log(newTodos);
  dispatch({
    type: "SAVE",
    payload: { uid: userObj.uid, date: createTodayString(), todos: newTodos },
  });

  await batch.commit();
  alert("서버에 저장 완료!");
};

//export const clearTodo = async (creatorId) => await deleteDoc(doc(db, creatorId));
