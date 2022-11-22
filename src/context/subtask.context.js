import { createContext, useState, useEffect } from "react";

import {
    getSubtaskDocuments,
    AddSubTaskToList,
    deleteSubDocument,
    updateSubtaskDocument
} from '../utils/firebase.utils';

export const SubTaskContext = createContext({
    subtask: [],
    setSubtask: () => { },
    subtaskToUpdate: '',
    setSubtaskToUpdate: () => { },
    showSubTask: false,
    setShowSubTask: () => null,
    addItemtoToDoSubTask: () => { },
    removeTodoFromSubTask: () => { },
    updateItemSubTask: () => { },
    getSubTask: () => { }
});

export const SubTaskProvider = ({ children }) => {
    const [subtask, setSubtask] = useState([]);
    const [subtaskToUpdate, setSubtaskToUpdate] = useState([]);
    const [showSubTask, setShowSubTask] = useState(false);


    const getSubTask = async () => {
        const subList = await getSubtaskDocuments();
        setSubtask(subList);
    }

    useEffect(() => {
        getSubTask();
    }, []);

    const addItemtoToDoSubTask = async (listToAdd) => {
        await AddSubTaskToList(listToAdd);
        await getSubTask();
    }

    const removeTodoFromSubTask = async (subTaskTitle) => {
        await deleteSubDocument(subTaskTitle);
        await getSubTask();
    }

    const updateItemSubTask = async (listToUpdate, updatedList) => {
        await updateSubtaskDocument(listToUpdate, updatedList);
        await getSubTask();
    }

    const value = {
        subtask,
        setSubtask,
        subtaskToUpdate,
        setSubtaskToUpdate,
        showSubTask,
        setShowSubTask,
        addItemtoToDoSubTask,
        removeTodoFromSubTask,
        updateItemSubTask,
        getSubTask
    };

    return <SubTaskContext.Provider value={value}>{children}</SubTaskContext.Provider>
}