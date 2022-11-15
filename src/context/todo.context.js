import { createContext, useState } from "react";

const addToDoList = (todoList, listToAdd) => {
    return [...todoList, { ...listToAdd }];
}

// const sortListHighPriority = (sortedlist) => {
//     sortedlist.filter((item) => {
//         return item.priority === "high"
//     })
// }

export const TodoContext = createContext({
    todoList: [],
    setTodoList: () => null,
    addItemtoToDoList: () => { },
    sortedlist: [],
    setSortedList: () => null
});

export const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([]);
    const [sortedlist, setSortedList] = useState([]);

    const addItemtoToDoList = (listToAdd) => {
        setTodoList(addToDoList(todoList, listToAdd));
    }

    const sortItemsWithHigh = () => {
        setSortedList(todoList);
        setSortedList((sortedlist));
    }

    const value = { todoList, addItemtoToDoList, setTodoList, sortItemsWithHigh };
    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}