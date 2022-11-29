import { createContext, useEffect, useState } from "react";

import {
    getTodolistDocuments,
    addToDoListCollectionAndDocuments,
    deleteTodoListDocument,
    updateTodoListDocument
} from "../utils/firebase.utils";

const groupBy = (list, keyGetter) => {
    if (!list) return list;
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
    listToUpdate: [],
    setListToUpdate: () => { },
    dummyConst: [],
    setDummyConst: () => { },
    grouped: () => { },
    groupedHigh: [],
    groupedAverage: [],
    groupedLow: [],
    showAddTodoModal: false,
    setShowAddTodoModal: () => { },
    showEditTodoModal: false,
    setShowEditTodoModal: () => { },
    dropDown: false,
    setDropDown: () => { }
});

export const TodoProvider = ({ children }) => {
    //toDoList
    const [todoList, setTodoList] = useState([]);

    //list to update
    const [listToUpdate, setListToUpdate] = useState([]);

    //showAddTodoModal
    const [showAddTodoModal, setShowAddTodoModal] = useState(false);

    //showEditTodoModal
    const [showEditTodoModal, setShowEditTodoModal] = useState(false);

    //dummy constant for toDo list
    const [dummyConst, setDummyConst] = useState([]);

    const getToDoList = async () => {
        const List = await getTodolistDocuments();
        setTodoList(List);
        setDummyConst(List);
    }

    useEffect(() => {
        const getList = async () => {
            const List = await getTodolistDocuments();
            setTodoList(List);
            setDummyConst(List);
        }
        getList();
    }, []);

    //add item to Todo list
    const addItemtoToDoList = async (listToAdd) => {
        await addToDoListCollectionAndDocuments(listToAdd);
        await getToDoList();
    }

    //remove item from Todo list
    const removeTodoFromList = async (listTitle) => {
        await deleteTodoListDocument(listTitle);
        await getToDoList();
    }

    //edit Item from Todo list
    const updateItemTodoList = async (listToUpdate, updatedList) => {
        await updateTodoListDocument(listToUpdate, updatedList);
        await getToDoList();
    }

    //group items regarding high, average and low
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
        listToUpdate,
        setListToUpdate,
        dummyConst,
        setDummyConst,
        grouped,
        groupedHigh,
        groupedAverage,
        groupedLow,
        showAddTodoModal,
        setShowAddTodoModal,
        showEditTodoModal,
        setShowEditTodoModal
    };
    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}