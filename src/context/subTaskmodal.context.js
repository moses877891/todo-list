import { createContext, useState } from "react";

export const SubTaskModalContext = createContext({
    showSubTaskModal: '',
    setShowSubTaskModal: () => { }
});

export const SubTaskModalProvuder = ({ children }) => {
    const [showSubTaskModal, setShowSubTaskModal] = useState(false);
    const value = { showSubTaskModal, setShowSubTaskModal }

    return <SubTaskModalContext.Provider value={value} >{children}</SubTaskModalContext.Provider>
}