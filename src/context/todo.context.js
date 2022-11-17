import { createContext, useState } from "react";

const addToDoList = (todoList, listToAdd) => {
    return [...todoList, { ...listToAdd, date: new Date().toLocaleString() }];
}

const removeList = (todoList, listToRemove) => {
    return todoList.filter((list) => list.date !== listToRemove.date);
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

export const TodoContext = createContext({
    todoList: [],
    setTodoList: () => null,
    addItemtoToDoList: () => { },
    removeTodoFromList: () => { },
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

    const addItemtoToDoList = (listToAdd) => {
        setTodoList(addToDoList(todoList, listToAdd));
    }

    const removeTodoFromList = (listToRemove) => {
        setTodoList(removeList(todoList, listToRemove));
    }

    const grouped = () => groupBy(todoList, todo => todo.priority);
    const groupedHigh = grouped().get('high');
    const groupedAverage = grouped().get('average');
    const groupedLow = grouped().get('low');

    const value = {
        todoList,
        setTodoList,
        addItemtoToDoList,
        removeTodoFromList,
        groupList,
        setGroupList,
        grouped,
        groupedHigh,
        groupedAverage,
        groupedLow
    };
    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}