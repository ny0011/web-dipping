import {
  collection,
  doc,
  onSnapshot,
  query,
  writeBatch,
} from "@firebase/firestore";
import { db } from "server/fbase";

const createTodosDateLink = (uid) => {
  const today = new Date();
  const dateString = today
    .toLocaleDateString("ko-KR")
    .replace(/\./g, "")
    .split(" ")
    .join("");
  return `todos/${uid}/${dateString}`;
};

// fbase에서 저장된 todos 가져오기
export const getTodos = (dispatch, userObj, nextId) => {
  const q = query(collection(db, createTodosDateLink(userObj.uid)));
  try {
    onSnapshot(q, (snapshot) => {
      const todos = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: parseInt(doc.id),
      }));

      if (todos.length !== 0) {
        dispatch({ type: "SAVE", payload: todos });
        nextId.current = todos.at(-1).id + 1;
      } else {
        const localData = JSON.parse(localStorage.getItem("data")) || [];
        dispatch({ type: "SAVE", payload: localData });
        nextId.current = localData.length === 0 ? 1 : localData.at(-1).id + 1;
      }
    });
  } catch (error) {
    console.log(error);
  }
};

//export const deleteTodo = async (creatorId, id) => await deleteDoc(doc(db, `${creatorId}/${id}`));
export const saveTodo = async (dispatch, userObj, data) => {
  const batch = writeBatch(db);
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    const newId = i + 1;
    const idString = String(newId);
    const newTodo = { ...data[i], id: newId };

    const todoRef = doc(db, createTodosDateLink(userObj.uid), idString);
    batch.set(todoRef, newTodo);
    newData.push(newTodo);
  }
  dispatch({ type: "SAVE", payload: newData });

  await batch.commit();
  alert("서버에 저장 완료!");
};

//export const clearTodo = async (creatorId) => await deleteDoc(doc(db, creatorId));
