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
} from 'firebase/firestore';


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

//get the main task
export const getTodolistDocuments = async () => {
    const collectionRef = collection(db, 'todolist');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapShot) => {
        const docData = docSnapShot.data();
        acc.push(docData)
        return acc;
    }, []);
    //console.log(categoryMap[1]);
    return categoryMap;
}

//creation of main task
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
    return docRef;

}

//deletion of main task
export const deleteTodoListDocument = async (listTitle) => {
    const docRef = doc(db, 'todolist', listTitle);
    await deleteDoc(docRef);
    await getTodolistDocuments();
}

//updation of main task
export const updateTodoListDocument = async (listToUpdate, updatedList) => {
    const docRef = doc(db, 'todolist', listToUpdate.toDo);
    if (listToUpdate.toDo !== updatedList.toDo) {
        await addToDoListCollectionAndDocuments(updatedList);
        await deleteTodoListDocument(listToUpdate.toDo);
        await getTodolistDocuments();
        return updatedList;
    }
    await updateDoc(docRef, updatedList);
    await getTodolistDocuments();
    return updatedList;
}

const groupBy = (list, keyGetter) => {
    const map = new Map();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}

//get all subtask
export const getSubtaskDocuments = async () => {
    const collectionRef = collection(db, 'subtask');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapShot) => {
        const docData = docSnapShot.data();
        acc.push(docData);
        return acc;
    }, []);
    const groupedSubTask = groupBy(categoryMap, todo => todo.key);
    console.log(groupedSubTask);
    return groupedSubTask;
}

//create subtask
export const AddSubTaskToList = async (mainTask, subtask) => {
    const docRef = doc(db, 'subtask', subtask.toDo);
    const docSnapshot = await getDoc(docRef);
    console.log(docSnapshot.exists());
    const key = mainTask.toDo;

    if (!docSnapshot.exists()) {
        const { toDo } = subtask;

        const date = new Date().toLocaleString();

        try {
            await setDoc(docRef, {
                key,
                toDo,
                date
            });
        } catch (error) {
            console.log(error.message);
        }
    } else {
        alert('subtask already exists');
    }
    await getSubtaskDocuments();
    return docRef;
}

//delete subtask
export const deleteSubDocument = async (listTitle) => {
    const docRef = doc(db, 'subtask', listTitle);
    await deleteDoc(docRef);
    await getSubtaskDocuments();
    await getTodolistDocuments();
}

//update subtask
export const updateSubtaskDocument = async (listToUpdate, updatedList) => {
    const docRef = doc(db, 'subtask', updatedList.toDo);
    const docSnapshot = await getDoc(docRef);
    console.log(docSnapshot.exists());
    const key = listToUpdate.key;

    if (!docSnapshot.exists()) {
        const { toDo } = updatedList;

        const date = new Date().toLocaleString();

        try {
            await setDoc(docRef, {
                key,
                toDo,
                date
            });
            await deleteSubDocument(listToUpdate.toDo)
        } catch (error) {
            console.log(error.message);
        }
    } else {
        alert('subtask already exists');
    }
    await getSubtaskDocuments();
    return updatedList;
}