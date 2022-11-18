import { initializeApp } from "firebase/app";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    query,
    getDocs,
    deleteDoc,
    updateDoc
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDG37bgwBebdyzDzaBncWvnKfxLKJZgoD0",
    authDomain: "todo-list-app-70087.firebaseapp.com",
    projectId: "todo-list-app-70087",
    storageBucket: "todo-list-app-70087.appspot.com",
    messagingSenderId: "234833252531",
    appId: "1:234833252531:web:a466730f465db2d1fae0c6"
};

// eslint-disable-next-line no-unused-vars
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();

export const addToDoListCollectionAndDocuments = async (listToAdd) => {
    if (!listToAdd) return;

    const docRef = doc(db, 'todolist', listToAdd.toDo);

    const docSnapshot = await getDoc(docRef);
    console.log(docSnapshot.exists());

    if (!docSnapshot.exists()) {
        const { toDo, note, priority } = listToAdd;

        const date = new Date().toLocaleString();

        try {
            await setDoc(docRef, {
                toDo,
                note,
                priority,
                date
            });
        } catch (error) {
            console.log(error.message);
        }
    } else {
        alert('list already exists');
    }
    getTodolistDocuments();
    return docRef;

}

export const getTodolistDocuments = async () => {
    const collectionRef = collection(db, 'todolist');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapShot) => {
        const docData = docSnapShot.data();
        acc.push(docData)
        return acc;
    }, []);
    //console.log(categoryMap);
    return categoryMap;
}

export const deleteTodoListDocument = async (listToDelete) => {
    const docRef = doc(db, 'todolist', listToDelete.toDo);
    await deleteDoc(docRef);
    await getTodolistDocuments();
}

export const updateTodoListDocument = async (listToUpdate, updatedList) => {
    const docRef = doc(db, 'todolist', listToUpdate.toDo);
    if (listToUpdate.toDo !== updatedList.toDo) {
        addToDoListCollectionAndDocuments(updatedList);
        deleteTodoListDocument(listToUpdate);
        getTodolistDocuments();
        return updatedList;
    }
    await updateDoc(docRef, updatedList);
    getTodolistDocuments();
    return updatedList;
}