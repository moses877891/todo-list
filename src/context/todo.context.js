import { createContext, useState } from "react";

import {
    getTodolistDocuments,
    addToDoListCollectionAndDocuments,
    deleteTodoListDocument,
    updateTodoListDocument
} from "../utils/firebase.utils";

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

export const TodoContext = createContext({
    getToDoList: () => null,
    todoList: [],
    setTodoList: () => null,
    addItemtoToDoList: () => { },
    removeTodoFromList: () => { },
    updateItemTodoList: () => { },
    groupList: [],
    setGroupList: () => { },
    grouped: () => { },
    groupedHigh: [],
    groupedAverage: [],
    groupedLow: []
});

export const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([]);
    const [groupList, setGroupList] = useState([]);

    // useEffect(() => {
    //     getToDoList();
    // }, []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getToDoList = async () => {
        const List = await getTodolistDocuments();
        setTodoList(List);
        console.log(todoList);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const addItemtoToDoList = async (listToAdd) => {
        await addToDoListCollectionAndDocuments(listToAdd);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const removeTodoFromList = async (listToRemove) => {
        await deleteTodoListDocument(listToRemove);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateItemTodoList = async (listToUpdate, updatedList) => {
        await updateTodoListDocument(listToUpdate, updatedList);
    }



    const grouped = () => groupBy(todoList, todo => todo.priority);
    const groupedHigh = grouped().get('high');
    const groupedAverage = grouped().get('average');
    const groupedLow = grouped().get('low');

    const value = {
        getToDoList,
        todoList,
        setTodoList,
        addItemtoToDoList,
        removeTodoFromList,
        updateItemTodoList,
        groupList,
        setGroupList,
        grouped,
        groupedHigh,
        groupedAverage,
        groupedLow
    };
    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}