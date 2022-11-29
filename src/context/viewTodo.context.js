import { createContext, useState } from "react";

export const ViewTodoContext = createContext({
    viewPriority: false,
    setViewPriority: () => null,
    viewHighPriority: false,
    setViewHighPriority: () => { },
    viewAveragePriority: false,
    setViewAveragePriority: () => { },
    viewLowPriority: false,
    setViewLowPriority: () => { },
    viewSubtasks: false,
    setViewSubtasks: () => { },
    viewAll: true,
    setViewAll: () => { },
});

export const ViewTodoProvider = ({ children }) => {
    const [viewHighPriority, setViewHighPriority] = useState(false);
    const [viewAveragePriority, setViewAveragePriority] = useState(false);
    const [viewLowPriority, setViewLowPriority] = useState(false);
    const [viewSubtasks, setViewSubtasks] = useState(false);
    const [viewAll, setViewAll] = useState(true);

    const value = {
        viewHighPriority,
        setViewHighPriority,
        viewAveragePriority,
        setViewAveragePriority,
        viewLowPriority,
        setViewLowPriority,
        viewSubtasks,
        setViewSubtasks,
        viewAll,
        setViewAll
    }

    return <ViewTodoContext.Provider value={value} >{children}</ViewTodoContext.Provider>
}