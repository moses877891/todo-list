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
    showAddSubTaskModal: false,
    setShowAddSubTaskModal: () => null,
    showEditSubTaskModal: false,
    setShowEditSubTaskModal: () => null,
    addItemtoToDoSubTask: () => { },
    removeTodoFromSubTask: () => { },
    updateItemSubTask: () => { },
    getSubTask: () => { }
});

export const SubTaskProvider = ({ children }) => {
    //SubTask
    const [subtask, setSubtask] = useState([]);

    //subTask To Update
    const [subtaskToUpdate, setSubtaskToUpdate] = useState([]);

    //add subtask modal
    const [showAddSubTaskModal, setShowAddSubTaskModal] = useState(false);

    //edit subtask modal
    const [showEditSubTaskModal, setShowEditSubTaskModal] = useState(false);

    //get subtask
    const getSubTask = async () => {
        const subList = await getSubtaskDocuments();
        setSubtask(subList);
    }

    useEffect(() => {
        getSubTask();
    }, []);

    //add item to subtask 
    const addItemtoToDoSubTask = async (listToAdd) => {
        await AddSubTaskToList(listToAdd);
        await getSubTask();
    }

    // remove item from subtask
    const removeTodoFromSubTask = async (subTaskTitle) => {
        await deleteSubDocument(subTaskTitle);
        await getSubTask();
    }

    //edit an item in subtask
    const updateItemSubTask = async (listToUpdate, updatedList) => {
        await updateSubtaskDocument(listToUpdate, updatedList);
        await getSubTask();
    }

    const value = {
        subtask,
        setSubtask,
        subtaskToUpdate,
        setSubtaskToUpdate,
        showAddSubTaskModal,
        setShowAddSubTaskModal,
        showEditSubTaskModal,
        setShowEditSubTaskModal,
        addItemtoToDoSubTask,
        removeTodoFromSubTask,
        updateItemSubTask,
        getSubTask
    };

    return <SubTaskContext.Provider value={value}>{children}</SubTaskContext.Provider>
}