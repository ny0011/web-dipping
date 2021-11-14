
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "@firebase/firestore";
import { db } from "server/fbase";

// fbase에서 저장된 todos 가져오기
export const getTodos = (dispatch, userObj, nextId) => {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR").replace(/\./g, '').split(' ').join('');

  const q = query(collection(db, `todos/${userObj.uid}/${dateString}`));
  try {
    onSnapshot(q, (snapshot) => {
      const todos = snapshot.docs.map((doc) => ({ ...doc.data(), id: parseInt(doc.id) }));

      dispatch({ type: "GET", payload: todos });
      nextId.current = todos.length === 0 ? 1 : todos.at(-1).id + 1

    });
  }
  catch (error) {
    console.log(error);
  }

};



//export const deleteTodo = async (creatorId, id) => await deleteDoc(doc(db, `${creatorId}/${id}`));
//export const saveTodo = async () => await updateDoc(doc(db, action.payload.creatorId, nextState));
//export const clearTodo = async (creatorId) => await deleteDoc(doc(db, creatorId));