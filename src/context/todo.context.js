import { createContext, useState } from "react";

const addToDoList = (todoList, listToAdd) => {
    return [...todoList, { ...listToAdd, date: new Date().toLocaleString() }];
}

const removeList = (todoList, listToRemove) => {
    return todoList.filter((list) => list.date !== listToRemove.date);
}

const groupListWithPriority = (priorityValue, list) => {
    return list.filter((item) => {
        if (item.priority === priorityValue) {
            return item;
        }
    });
}

export const TodoContext = createContext({
    todoList: [],
    setTodoList: () => null,
    addItemtoToDoList: () => { },
    removeTodoFromList: () => { },
    sortedList: [],
    groupItemsWithPriority: () => { }
});

export const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([]);
    const [sortedList, setSortedList] = useState([]);

    const addItemtoToDoList = (listToAdd) => {
        setTodoList(addToDoList(todoList, listToAdd));
    }

    const removeTodoFromList = (listToRemove) => {
        setTodoList(removeList(todoList, listToRemove));
    }

    const groupItemsWithPriority = (priorityValue) => {
        setSortedList(groupListWithPriority(priorityValue, todoList));
    }

    const value = {
        todoList,
        addItemtoToDoList,
        setTodoList,
        groupItemsWithPriority,
        sortedList,
        removeTodoFromList
    };
    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}